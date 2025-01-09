from django.shortcuts import render, redirect
from .form import MessageForm
from django.contrib import messages
from django.core.mail import send_mail

def index(request):
    form = MessageForm()

    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            # Get the cleaned data
            name = form.cleaned_data['full_name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['your_message']

            # Save the form data
            form.save()

            # Send email to recipient
            send_mail(
                subject=f"New Message from {name}",
                message=message,
                from_email=email,
                recipient_list=['drakemugisha6@gmail.com'],
            )

            # Send email to user
            send_mail(
                subject="Thank you for contacting us!",
                message="We have received your message and will get back to you soon.",
                from_email='drakemugisha6@gmail.com',
                recipient_list=[email],
            )

            # Display a success message
            messages.success(request, 'Message has been sent successfully, we will contact you soon')

            # Redirect to the same page
            return redirect('success')

    context = {'form': form}
    return render(request, 'index.html', context)

def success(request):
    return render(request, 'success.html')