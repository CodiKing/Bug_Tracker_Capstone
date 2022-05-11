from django.db import models
from authentication.models import User


class Projects(models.Model):
   user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Projects.author+',null=True, blank=True, default=None)
   title = models.CharField(max_length=100)
   description = models.CharField(max_length= 500)
   priority = models.CharField(max_length= 500)
   deadline = models.DateField(null=True, blank=True)
   status = models.CharField(max_length= 500)
   assigned_members = models.ManyToManyField(User, default=None,blank=True)
   tasks = models.CharField(max_length= 500)
   comments = models.CharField(max_length= 500)
   created_date = models.DateTimeField(auto_now_add=True, blank=True)
   updated_date =models.DateTimeField(auto_now=True, blank=True)


class Tasks(models.Model):
   user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Projects.author+',null=True, blank=True, default=None)
   assigned_members = models.ManyToManyField(User, default=None,blank=True)
   taskTitle = models.CharField(max_length=100)
   taskDescription = models.CharField(max_length= 500)
   taskPriority = models.CharField(max_length= 500)
   taskStatus = models.CharField(max_length= 500)
   created_date = models.DateTimeField(auto_now_add=True, blank=True)
   updated_date =models.DateTimeField(auto_now=True, blank=True)