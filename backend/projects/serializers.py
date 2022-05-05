from rest_framework import serializers
from .models import Projects


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'description', 'priority', 'deadline', 'status', 'assigned_members_id', 'tasks', 'comments', 'created_date', 'updated_date', 'user_id']
 
    assigned_members_id = serializers.IntegerField(write_only=True)
    # author = serializers.IntegerField(write_only=True)
    # 'author',