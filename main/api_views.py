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
from rest_framework import filters

# from django.contrib.gis.db.models.functions import Distance
# from django.contrib.gis.measure import D
# from django.contrib.gis.geos import Point


class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    http_method_names = ('get', )
    serializer_class = SchoolSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'location__city', 'location__state',)

    def get_queryset(self):
        queryset = School.objects.all()
        params = self.request.query_params

        if params.get('lat', None) is not None and params.get('lng', None) is not None:
            lat = float(params.get('lat'))
            lng = float(params.get('lng'))
            # ref_point = Point(lat, lng)
            # queryset = queryset.filter(location__distance_lte=(ref_point, D(m=2000)))\
            #     .annotate(distance=Distance("location", ref_point))\
            #     .order_by("distance")

        if params.get('amenity', None) is not None:
            amenity_ids = params.get('amenity')
            print(amenity_ids)
            queryset = queryset.filter(scores__amenity__id__in=amenity_ids).order_by("scores__score")

        return queryset




class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    http_method_names = ('get',)
    serializer_class = NotificationSerializer


class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        return Response(serializer.data)


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        return Response(serializer.data)


class ImageUploadViewSet(viewsets.ModelViewSet):
    queryset = ImageUpload.objects.all()
    serializer_class = ImageUploadSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AmenityViewSet(viewsets.ModelViewSet):
    queryset = Amenity.objects.all()
    serializer_class = AmenitySerializer
    http_method_names = ('get',)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )