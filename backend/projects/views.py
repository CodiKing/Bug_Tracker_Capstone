from logging import raiseExceptions
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Projects
from authentication.models import User
from .serializers import ProjectsSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

@api_view (['GET','POST'])
@permission_classes([IsAuthenticated])
def projects_list(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        projects = Projects.objects.filter(user=request.user.id)
        serializer = ProjectsSerializer(projects, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProjectsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
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

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def add_member(request, project_id, member_id):
    project=get_object_or_404(Projects, pk=project_id)
    new_member = get_object_or_404(User, pk=member_id)
    project.assigned_members.add(new_member)
    return Response(status=status.HTTP_200_OK)
    # save?