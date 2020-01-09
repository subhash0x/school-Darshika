from django.urls import path
from user import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', views.UserViewSet)

app_name = 'user'

urlpatterns = [
	path('api/signup/', views.CreateUserView.as_view(), name='user_create'),
	path('api/login/', views.CreateTokenView.as_view(), name='token'),
]