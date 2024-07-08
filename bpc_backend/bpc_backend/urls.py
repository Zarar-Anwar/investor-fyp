"""
URL configuration for bpc_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', views.signup),
    path('login/', views.login),
    # send patch or delete request accordingly
    path('admin_edit-delete_all_records_by_category/<int:id>/', views.admin_control),
    path('admin_get_all_records_by_category/<str:category>/', views.admin_control),
    path('post_idea/<int:id>/', views.idea),
    path('get_idea/<int:id>/', views.idea),
    path('get_idea_by_id/<int:id>/', views.single_idea),
    path('get_all_idea/', views.idea),
    path('get_user_by_id/<int:id>/', views.get_user_by_id),
    path('update_idea/<int:id>/', views.idea),
    path('post_gig/<int:id>/', views.skills),
    path('get_gig/<int:id>/', views.skills),
    path('get_all_gig/', views.skills),
    path('get_gig_by_id/<int:id>/', views.single_gig),
    path('update_gig/<int:id>/', views.skills),
    path('post_contract/', views.post_contract),
    path('inv_done_contracts/<int:id>/', views.inv_done_contracts),
    path('ent_done_contracts/<int:id>/', views.ent_done_contracts),
    path('all_done_contracts/', views.inv_done_contracts),
    path('post_tracking_record/', views.tracking_record),
    path('get_tracking_record/<int:id>/', views.tracking_record),
    path('dashboard_data/<int:id>/<str:category>/', views.record_count),
    path('post_pfp/', views.profile_pfp),
    path('get_pfp/<int:id>/', views.profile_pfp),
    path('delete_record/<int:id>/<str:record>/', views.record_delete),
    # category == 'admin','investor','entrepreneur','skilled'

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)