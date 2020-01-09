from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from main.views import render_react
from main.api_views import *

router = DefaultRouter()
router.register('schools', SchoolViewSet)
router.register('notifications', NotificationViewSet)
router.register('subscriptions', SubscriptionViewSet)
router.register('feedbacks', FeedbackViewSet)


urlpatterns = [
    url(r'^app/*', render_react, name='main'),
]