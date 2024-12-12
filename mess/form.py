from django.forms import ModelForm
from .models import Messages

class MessageForm(ModelForm):
    class Meta:
        model = Messages
        fields = '__all__'
