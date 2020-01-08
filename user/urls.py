from django.urls import path
from user import views

app_name = 'user'

urlpatterns = [
	path('api/create/', views.CreateUserView.as_view(), name='user_create'),
	path('api/login/', views.CreateTokenView.as_view(), name='token'),
]