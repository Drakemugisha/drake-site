
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('drake-site/', admin.site.urls),
    path('', include("mess.urls"))
]
