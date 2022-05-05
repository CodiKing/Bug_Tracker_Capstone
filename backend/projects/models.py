from pickle import TRUE
from django.db import models
from authentication.models import User


class Projects(models.Model):
   description = models.CharField(max_length= 500)
   priority = models.CharField(max_length= 500)
   deadline = models.CharField(max_length= 500)
   status = models.CharField(max_length= 500)
   assigned_members_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Projects.assigned_members_id+', null=True, blank=True)
   # author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Projects.author+')
   tasks = models.CharField(max_length= 500)
   comments = models.CharField(max_length= 500)
   created_date = models.DateTimeField(auto_now_add=True, blank=True)
   updated_date =models.DateTimeField(auto_now=True, blank=True)




