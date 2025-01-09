from django.db import models
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Messages(models.Model):
    full_name = models.CharField(max_length=70)
    email = models.EmailField(max_length=70)
    # tel_number = PhoneNumberField(blank=True, null=True)
    your_message = models.TextField()
    date  = models.DateTimeField(auto_now_add=True)


    def  __str__(self):
        return self.full_name