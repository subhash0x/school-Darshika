# Generated by Django 2.2.3 on 2020-01-11 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20200111_1258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
