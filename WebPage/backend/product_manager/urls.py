from django.urls import path, include
from product_manager import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

#router = routers.DefaultRouter()
#router.register(r'product', product_view)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('auth/', obtain_auth_token),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    #path("", include(router.urls)),
    path('rest/', include('rest_framework.urls', namespace='rest_framework')),
    path('', views.ProductListCreateAPIView.as_view()),
    path('<int:pk>/', views.ProducDetailAPIView.as_view()), 
]