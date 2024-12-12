FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django project files
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the Gunicorn port
EXPOSE 8000

# Start Gunicorn
CMD ["gunicorn", "receive.wsgi:application", "--bind", "0.0.0.0:8000"]