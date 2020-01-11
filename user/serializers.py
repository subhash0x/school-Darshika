from django.contrib.auth import get_user_model, authenticate
from django.utils.translation import ugettext_lazy as _
from rest_framework.validators import UniqueValidator

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = get_user_model()
        fields = ('name', 'email', 'password', 'phone', 'aadhaar', 'is_ngo')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        """Create a new user with enc pass and return it"""
        return get_user_model().objects.create_user(**validated_data)


# user serializer class for PUT requests, excludes username field
class UserSerializerForPut(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password',)
        extra_kwargs = {'password': {'write_only': True},
                        'name': {'required': True}, 'email': {'write_only': True}}


# user serializer class for public GET requests, excludes email and password field
class UserSerializerForPublicGet(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'name', 'gender')


class UserSerializerForAuthGet(serializers.ModelSerializer):
    # notifications = NotificationSerializer(read_only=True, many=True)

    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'name', 'notifications', 'careerAnalysis')


class AuthTokenSerializer(serializers.Serializer):
    """Serializer for the user authentication object"""
    email = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        """"Validate and authenticate the user"""
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password
        )
        if not user:
            msg = _('unable to authenticate with provided credentials')
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs
