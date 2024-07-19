from django.contrib import admin
from .models import user_data, ideas, skill, contract, tracking, ProjectMaterial, HiredPerson


# Register your models here.
@admin.register(user_data)
class user_data_admin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(ideas)
class ideas_admin(admin.ModelAdmin):
    list_display = ('user', 'idea', 'description', 'req_amount', 'file')


@admin.register(skill)
class ideas_admin(admin.ModelAdmin):
    list_display = ('user', 'title', 'description', 'file')


@admin.register(contract)
class contract_admin(admin.ModelAdmin):
    list_display = ('idea', 'idea_title')


@admin.register(tracking)
class TrackingAdmin(admin.ModelAdmin):
    list_display = ['id', 'contract', 'product_name', 'progress', 'cost_description', 'cost', 'start_time', 'end_time',
                    'status']


@admin.register(ProjectMaterial)
class ProjectMaterialAdmin(admin.ModelAdmin):
    list_display = ['project', 'material_name', 'material_cost', 'buy_date']


@admin.register(HiredPerson)
class HiredPersonAdmin(admin.ModelAdmin):
    list_display = ['skilled_person', 'project', 'hired_date']
