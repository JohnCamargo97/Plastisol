from rest_framework import generics, permissions, authentication
from django_filters.rest_framework import DjangoFilterBackend
from .models import product
from product_manager.API.serializers import ProductSerializer 
from .authentication import TokenAuthentication

#class home_view(TemplateView):
#    template_name = "mag_app/home.html"


#class product_view(viewsets.ModelViewSet):
#    queryset = product.objects.all()
#    serializer_class = ProductSerializer


class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'product_id']


class ProducDetailAPIView(generics.RetrieveAPIView):
    queryset = product.objects.all()
    serializer_class = ProductSerializer
    #lookup_field = 'pk'