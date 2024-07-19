# Generated by Django 5.0.7 on 2024-07-18 06:45

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ideas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idea', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('req_amount', models.IntegerField()),
                ('terms_conditions', models.TextField()),
                ('file', models.FileField(null=True, upload_to='idea_file/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='contract',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idea_title', models.TextField()),
                ('terms_conditions', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('entrepreneur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entrepreneur_contracts', to=settings.AUTH_USER_MODEL)),
                ('investor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='investor_contracts', to=settings.AUTH_USER_MODEL)),
                ('idea', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.ideas')),
            ],
        ),
        migrations.CreateModel(
            name='pfp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pfp', models.ImageField(upload_to='pfp/')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('file', models.FileField(upload_to='skill_file/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='tracking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=50)),
                ('progress', models.TextField()),
                ('cost_description', models.TextField()),
                ('status', models.CharField(choices=[('upcoming', 'Upcoming'), ('progress', 'In Progress'), ('complete', 'Complete')], default='upcoming', max_length=20)),
                ('cost', models.IntegerField()),
                ('start_time', models.DateField()),
                ('end_time', models.DateField()),
                ('contract', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tracking_records', to='api.contract')),
            ],
        ),
        migrations.CreateModel(
            name='user_data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_admin', models.BooleanField(default=False)),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('category', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=50)),
                ('date', models.DateField()),
                ('gender', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userdata', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
