from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from schoolDarshika import helpers
from django.utils import timezone


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('User must have a valid email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Creates and saves a new super user"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class Location(models.Model):
    street_address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, default="Warangal")
    state = models.CharField(max_length=100, default="Telangana")
    country = models.CharField(max_length=100, default="India")
    lat = models.FloatField(default=17.9689)
    lng = models.FloatField(default=79.5941)


class Amenity(models.Model):
    label = models.CharField(max_length=100)
    image = models.ImageField(null=True, blank=True, upload_to=helpers.PathAndRenameFile('amenities'))


class FeedbackAmenityScore(models.Model):
    amenity = models.ForeignKey('Amenity', on_delete=models.CASCADE)
    score = models.FloatField(default=0)
    feedback = models.ForeignKey('Feedback', on_delete=models.CASCADE)


# Average over feedback scores
class SchoolAmenityScore(models.Model):
    amenity = models.ForeignKey('Amenity', on_delete=models.CASCADE)
    score = models.FloatField(default=5)
    school = models.ForeignKey('School', on_delete=models.CASCADE)


class Feedback(models.Model):
    created_on = models.DateTimeField(default=timezone.now)
    owner = models.ForeignKey('User', on_delete=models.CASCADE)
    school = models.ForeignKey('School', on_delete=models.CASCADE)


class Subscription(models.Model):
    owner = models.ForeignKey('User', on_delete=models.CASCADE)
    school = models.ForeignKey('School', on_delete=models.CASCADE, related_name='subscriptions')


class Notification(models.Model):
    to = models.ForeignKey('User', on_delete=models.CASCADE)
    content = models.TextField()
    resource_uri = models.CharField(max_length=300)


class School(models.Model):
    name = models.CharField(max_length=300)
    location = models.ForeignKey('Location', on_delete=models.CASCADE)
    cover_image = models.ImageField(null=True, blank=True, upload_to=helpers.PathAndRenameFile('amenities'))
    profile_image = models.ImageField(null=True, blank=True, upload_to=helpers.PathAndRenameFile('amenities'))
