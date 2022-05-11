from django.urls import path
from . import views


urlpatterns = [
    path('', views.projects_list),
    path('<int:pk>/',views.projects_detail),
    path('add/<int:project_id>/add_member/<int:member_id>/', views.add_member),
    path('otherUsers/',views.get_Users),
    path('tasks/',views.tasks_list)
]