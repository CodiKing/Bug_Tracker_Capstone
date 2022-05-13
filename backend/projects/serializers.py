from asyncio import Task
from rest_framework import serializers
from .models import Projects, Tasks


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id', 'title', 'description', 'priority', 'deadline', 'status', 'assigned_members', 'user', 'tasks_set', 'comments', 'created_date', 'updated_date']
        depth = 1
 
class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ['id', 'projects', 'taskTitle', 'taskDescription', 'taskPriority', 'taskStatus', 'assigned_members', 'created_date', 'updated_date']