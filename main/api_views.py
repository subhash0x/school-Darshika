from rest_framework import viewsets, permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import *
from .models import *
from .serializers import *
import uuid
import time
import json


class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    http_method_names = ('get', )
    serializer_class = SchoolSerializer


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    http_method_names = ('get',)
    serializer_class = Notification

