# Generated by Django 4.0.4 on 2022-05-11 20:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0008_remove_projects_tasks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='selectedProjectId',
        ),
        migrations.AddField(
            model_name='tasks',
            name='projects',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='projects.projects'),
        ),
    ]