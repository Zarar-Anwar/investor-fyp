from django.db import models
from django.contrib.auth.models import User


class user_data(models.Model):
    is_admin = models.BooleanField(default=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='userdata')
    name = models.CharField(max_length=50)
    email = models.EmailField()
    category = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    date = models.DateField(auto_now=False, auto_now_add=False)
    gender = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    description = models.TextField()


class ideas(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    idea = models.CharField(max_length=50)
    description = models.TextField()
    req_amount = models.IntegerField()
    terms_conditions = models.TextField()
    file = models.FileField(upload_to='idea_file/', null=True)


class skill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()
    file = models.FileField(upload_to='skill_file/')


class contract(models.Model):
    idea = models.OneToOneField(ideas, on_delete=models.CASCADE)
    idea_title = models.TextField()
    terms_conditions = models.TextField()


class ContractUser(models.Model):
    contract = models.ForeignKey(contract, on_delete=models.CASCADE)
    investor = models.ForeignKey(User, related_name='investor_contracts', on_delete=models.CASCADE)
    entrepreneur = models.ForeignKey(User, related_name='entrepreneur_contracts', on_delete=models.CASCADE)


class tracking(models.Model):
    contract = models.ForeignKey(contract, on_delete=models.CASCADE, related_name='tracking_records')
    product_name = models.CharField(max_length=50)
    progress = models.TextField()
    cost_description = models.TextField()


class pfp(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pfp = models.ImageField(upload_to='pfp/')
