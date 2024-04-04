from django.views.generic import TemplateView
from rest_framework import permissions, viewsets
#from rest_framework.response import response

from .models import product
from product_manager.API.serializers import product_serializer 

class home_view(TemplateView):
    template_name = "mag_app/home.html"

class product_view(viewsets.ModelViewSet):
    queryset = product.objects.all()
    serializer_class = product_serializer
