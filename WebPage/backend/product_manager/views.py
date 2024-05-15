from rest_framework import generics, permissions, authentication
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import product, cotizacion
from product_manager.API.serializers import ProductSerializer, CotizacionSerializer
from .authentication import TokenAuthentication
from .API import client_search
#class home_view(TemplateView):
#    template_name = "mag_app/home.html"


#class product_view(viewsets.ModelViewSet):
#    queryset = product.objects.all()
#    serializer_class = ProductSerializer

class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['product_id','category']


class ProducDetailAPIView(generics.RetrieveAPIView):
    queryset = product.objects.all()
    serializer_class = ProductSerializer
    #lookup_field = 'pk'

class ProductSearchAPIView(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('q')
        tags = request.GET.get('tag')
        if not query:
            return Response('', status=400)
        results = client_search.perform_search(query, tags=tags)
        return Response(results)
    
class CotizacionCreateAPIView(generics.CreateAPIView):
    serializer_class = CotizacionSerializer
    
