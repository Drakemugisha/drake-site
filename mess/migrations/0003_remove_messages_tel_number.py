# Generated by Django 5.1.3 on 2025-01-09 18:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mess', '0002_messages_tel_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='messages',
            name='tel_number',
        ),
    ]
