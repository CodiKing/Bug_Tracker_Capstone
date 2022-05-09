from rest_framework import serializers
from .models import Projects


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'title', 'description', 'priority', 'deadline', 'status', 'assigned_members', 'user', 'tasks', 'comments', 'created_date', 'updated_date']
 
    # assigned_members = serializers.IntegerField(read_only=True)
   
    