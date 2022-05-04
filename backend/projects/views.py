from logging import raiseExceptions
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Projects
from .serializers import ProjectsSerializer

@api_view (['GET','POST'])
def projects_list(request):
    if request.method == 'GET':
        projects = Projects.objects.all()
        serializer = ProjectsSerializer(projects, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProjectsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def projects_detail(request, pk):
    project=get_object_or_404(Projects, pk=pk)
    if request.method=='GET':
        serializer=ProjectsSerializer(project)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=ProjectsSerializer(project, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method=='DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)