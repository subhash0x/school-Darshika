from rest_framework import serializers
from .models import *
from user.serializers import UserSerializer


class SubscriptionSerializer(serializers.ModelSerializer):

    owner = serializers.SerializerMethodField()

    class Meta:
        model = Subscription
        fields = '__all__'

    def get_owner(self, subscription):
        return UserSerializer(subscription.owner, context=self.context).data

    def create(self, validated_data):
        return Subscription.objects.create(owner=validated_data.pop('owner'), **validated_data)


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = '__all__'


class SchoolAmenityScoreSerializer(serializers.ModelSerializer):

    amenity = serializers.SerializerMethodField(read_only=True)
    amenity_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = SchoolAmenityScore
        fields = '__all__'

    def get_amenity(self, score):
        return AmenitySerializer(score.amenity, context=self.context).data


class SchoolSerializer(serializers.ModelSerializer):

    class Meta:
        model = School
        fields = '__all__'

    scores = SchoolAmenityScoreSerializer(many=True, read_only=True)
    subscriptions = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()

    def get_subscriptions(self, school):
        return SubscriptionSerializer(school.subscriptions, many=True, context=self.context).data

    def get_location(self, school):
        return LocationSerializer(school.location, context=self.context).data

    def create(self, validated_data):
        return Subscription.objects.create(owner=validated_data.pop('owner'), **validated_data)


class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = '__all__'


class AmenitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Amenity
        fields = '__all__'





class FeedbackAmenityScoreSerializer(serializers.ModelSerializer):

    amenity = serializers.SerializerMethodField()
    amenity_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = FeedbackAmenityScore
        fields = '__all__'
        extra_kwargs = {'feedback' : {'required': False}}

    def get_amenity(self, score):
        return AmenitySerializer(score.amenity, context=self.context).data


class FeedbackImageSerializer(serializers.ModelSerializer):

    image_upload = ImageUploadSerializer(read_only=True)
    image_upload_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = FeedbackImage
        fields = '__all__'
        extra_kwargs = {'feedback': {'required': False}}


class FeedbackSerializer(serializers.ModelSerializer):

    owner = serializers.SerializerMethodField()
    scores = FeedbackAmenityScoreSerializer(many=True)
    images = FeedbackImageSerializer(many=True, required=False)

    class Meta:
        model = Feedback
        fields = '__all__'

    def get_owner(self, feedback):
        return UserSerializer(feedback.owner, context=self.context).data

    def get_scores(self, feedback):
        return FeedbackAmenityScoreSerializer(feedback.scores, many=True, context=self.context).data

    def get_images(self, feedback):
        return FeedbackImageSerializer(feedback.images, many=True, context=self.context).data

    def create(self, validated_data):
        print(str(validated_data))

        images_raw = validated_data.pop('images')
        scores_raw = validated_data.pop('scores')
        feedback = Feedback.objects.create(owner=validated_data.pop('owner'), **validated_data)

        for score_raw in scores_raw:
            FeedbackAmenityScore.objects.create(
                amenity=Amenity.objects.get(pk=score_raw['amenity_id']),
                score=score_raw['score'],
                feedback=feedback
            )

        for image_raw in images_raw:
            print(image_raw)
            FeedbackImage.objects.create(image_upload=ImageUpload.objects.get(pk=image_raw['image_upload_id']), feedback=feedback)

        school = feedback.school
        feedback_count = school.feedbacks.count()   # includes the current one

        for fscore in feedback.scores.all():
            sscore = school.scores.get(amenity=fscore.amenity)
            sscore.score = (sscore.score * (feedback_count - 1) + fscore.score) / feedback_count
            sscore.save()

        return feedback


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'
