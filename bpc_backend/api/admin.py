from django.contrib import admin
from .models import user_data, ideas, skill, contract, tracking


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
