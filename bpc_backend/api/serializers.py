from rest_framework import serializers
from .models import user_data, ideas, skill, contract, ContractUser, tracking, pfp
from django.contrib.auth.models import User


class user_data_serializer(serializers.ModelSerializer):
    class Meta:
        model = user_data
        fields = ['user', 'name', 'email', 'category', 'phone', 'date', 'gender', 'address', 'description', 'is_admin']


class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']


class login_serializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class IdeasSerializer(serializers.ModelSerializer):
    class Meta:
        model = ideas
        fields = ['id', 'user', 'idea', 'description', 'req_amount', 'terms_conditions', 'file']


class SkillSerializer(serializers.ModelSerializer):
    user = user_serializer()

    class Meta:
        model = skill
        fields = ['id', 'user', 'title', 'description', 'file']


class ContractSerializer(serializers.ModelSerializer):
    idea = IdeasSerializer()  # Use the nested serializer here

    class Meta:
        model = contract
        fields = ['id', 'idea', 'idea_title', 'terms_conditions']


class contarctuser(serializers.ModelSerializer):
    class Meta:
        model = ContractUser
        fields = ['id', 'contract', 'entrepreneur', 'investor']


class TrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = tracking
        fields = ['id', 'contract', 'product_name', 'progress', 'cost_description']


class PfpSerializer(serializers.ModelSerializer):
    class Meta:
        model = pfp
        fields = ['user', 'pfp']
