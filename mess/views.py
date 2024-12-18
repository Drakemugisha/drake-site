from django.shortcuts import render, redirect
from .form import MessageForm
from django.contrib import messages
# Create your views here.
def  index(request):
    form = MessageForm()

    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'message has been sent successfull, we will contact you soon')
            form = MessageForm()

    context = {'form': form}
    return render(request, 'index.html', context)