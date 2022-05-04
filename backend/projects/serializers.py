from rest_framework import serializers
from .models import Projects


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'description', 'priority', 'deadline', 'status', 'assigned_members', 'author', 'tasks', 'comments', 'created_date', 'updated_date']
 