from django.db import models
from authentication.models import User


class Projects(models.Model):
   user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Projects.author+',null=True, blank=True, default=None)
   description = models.CharField(max_length= 500)
   priority = models.CharField(max_length= 500)
   deadline = models.CharField(max_length= 500)
   status = models.CharField(max_length= 500)
   assigned_members = models.ManyToManyField(User, default=None)
   tasks = models.CharField(max_length= 500)
   comments = models.CharField(max_length= 500)
   created_date = models.DateTimeField(auto_now_add=True, blank=True)
   updated_date =models.DateTimeField(auto_now=True, blank=True)




# ForeignKey(User, on_delete=models.CASCADE, related_name='Projects.assigned_members+', null=True, blank=True)