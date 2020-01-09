"""schoolDarshika URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import MainPage
    2. Add a URL to urlpatterns:  path('', MainPage.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
import schoolDarshika.settings as settings
from django.conf.urls.static import static
from main.urls import router as main_router
from user.urls import router as user_router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.registry.extend(main_router.registry)
router.registry.extend(user_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user.urls')),
    url(r'^', include('main.urls')),
    url(r'^api/', include(router.urls)),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
