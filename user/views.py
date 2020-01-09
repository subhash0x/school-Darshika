from rest_framework import generics, viewsets
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from main.models import User
from schoolDarshika.permissions import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import list_route


from user.serializers import UserSerializer, AuthTokenSerializer


class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user"""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class UserViewSet(viewsets.ModelViewSet):
    """
    GET:
    Return a list of all the existing users.

    POST:
    Create a new user instance.

    /reset_password:
    Resets password to a new one

    /forgot_password:
    Resets password randomly and sends on mail

    /user_by_token:
    Get user's details by Oauth access token


    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsCreationOrIsAuthenticated, IsOwnerOrReadOnly)

    def get_serializer_class(self):

        serializer_class = self.serializer_class

        if self.request.method == 'PUT':
            serializer_class = UserSerializerForPut
        elif self.request.method == 'GET' and not self.request.user.is_staff:
            serializer_class = UserSerializerForPublicGet

        return serializer_class

    def get_permissions(self):

        if self.request.method == 'DELETE':
            return [permissions.IsAdminUser()]
        return super(UserViewSet, self).get_permissions()

    @list_route(url_path="by_token", permission_classes=(IsAuthenticated,))
    def user_by_token(self, request):
        serializer = UserSerializerForAuthGet(request.user)
        return Response(serializer.data)