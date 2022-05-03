from django.db import models
from authentication.models import User


class Projects(models.Model):
   description = models.CharField(max_length= 500)
   priority = models.CharField(max_length= 500)
   deadline = models.CharField(max_length= 500)
   status = models.CharField(max_length= 500)
   assigned_members = models.CharField(max_length= 500)
   author = models.CharField(max_length= 500)
   tasks = models.CharField(max_length= 500)
   comments = models.CharField(max_length= 500)