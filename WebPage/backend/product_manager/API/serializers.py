from rest_framework import serializers
from product_manager.models import product

class product_serializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = "__all__"