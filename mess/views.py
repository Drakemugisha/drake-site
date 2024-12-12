from django.shortcuts import render, redirect
from .form import MessageForm

# Create your views here.
def  index(request):
    form = MessageForm()

    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')

    context = {'form': form}
    return render(request, 'index.html', context)