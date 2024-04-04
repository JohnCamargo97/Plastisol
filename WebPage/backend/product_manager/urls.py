from django.urls import path, include
from product_manager.views import home_view, product_view
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'product', product_view)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path('API/', include('rest_framework.urls', namespace='rest_framework')),
]