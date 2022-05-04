from django.urls import path
from . import views


urlpatterns = [
    path('', views.projects_list),
    path('<int:pk>/',views.projects_detail),
]