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


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = '__all__'


class SchoolSerializer(serializers.ModelSerializer):

    subscriptions = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()

    class Meta:
        model = School
        fields = '__all__'

    def get_subscriptions(self, school):
        return SubscriptionSerializer(school.subscriptions, many=True, context=self.context).data

    def get_location(self, school):
        return LocationSerializer(school.location, context=self.context).data

    def create(self, validated_data):
        return Subscription.objects.create(owner=validated_data.pop('owner'), **validated_data)


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

    def create(self, validated_data):
        return Subscription.objects.create(owner=validated_data.pop('owner'), **validated_data)


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

