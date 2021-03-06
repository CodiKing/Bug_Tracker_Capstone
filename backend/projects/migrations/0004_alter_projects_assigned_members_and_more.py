# Generated by Django 4.0.4 on 2022-05-09 21:30

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('projects', '0003_projects_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='assigned_members',
            field=models.ManyToManyField(blank=True, default=None, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='projects',
            name='deadline',
            field=models.DateField(),
        ),
    ]
