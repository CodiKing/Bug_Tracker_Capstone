# Generated by Django 4.0.4 on 2022-05-09 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_alter_projects_assigned_members_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='deadline',
            field=models.DateField(blank=True, null=True),
        ),
    ]
