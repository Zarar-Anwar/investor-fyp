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
    investor = models.ForeignKey(User, related_name='investor_contracts', on_delete=models.CASCADE)
    entrepreneur = models.ForeignKey(User, related_name='entrepreneur_contracts', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class tracking(models.Model):
    STATUS_CHOICES = (
        ('upcoming', 'Upcoming'),
        ('progress', 'In Progress'),
        ('complete', 'Complete'),
    )

    contract = models.ForeignKey(contract, on_delete=models.CASCADE, related_name='tracking_records')
    product_name = models.CharField(max_length=50)
    progress = models.TextField()
    cost_description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    cost = models.IntegerField()
    start_time = models.DateField()
    end_time = models.DateField()

    def __str__(self):
        return f"Tracking - {self.product_name} ({self.get_status_display()})"


class pfp(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pfp = models.ImageField(upload_to='pfp/')


class HiredPerson(models.Model):
    skilled_person = models.ForeignKey(skill, on_delete=models.CASCADE)
    project = models.ForeignKey(tracking, on_delete=models.CASCADE)
    hired_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.skilled_person} hired for {self.project} on {self.hired_date}"


class ProjectMaterial(models.Model):
    project = models.ForeignKey(tracking, on_delete=models.CASCADE)
    material_name = models.CharField(max_length=200)
    material_cost = models.IntegerField()
    buy_date = models.DateField(auto_now=True)

    def __str__(self):
        return f"Material name is: {self.material_name}"
