from rest_framework import generics, permissions, authentication
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
    authentication_classes = [
        authentication.SessionAuthentication, 
        TokenAuthentication
    ]
    permission_classes = [permissions.IsAuthenticated]

class ProducDetailAPIView(generics.RetrieveAPIView):
    queryset = product.objects.all()
    serializer_class = ProductSerializer
    #lookup_field = 'pk'