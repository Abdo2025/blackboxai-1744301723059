from rest_framework import serializers
from .models import User, Job, Message

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'title', 'description', 'requirements', 'salary_min', 'salary_max', 'location', 'job_type', 'recruiter']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'job', 'sender', 'receiver', 'content', 'timestamp']
