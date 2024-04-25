from rest_framework import serializers
from rest_framework.reverse import reverse
from product_manager.models import product

class ProductSerializer(serializers.ModelSerializer):
    category_data = serializers.SerializerMethodField(read_only=True)
    #Only work on model serializers
    url = serializers.HyperlinkedIdentityField(
            view_name='product-detail',
            lookup_field='pk'
    )
    class Meta:
        model = product
        fields = [
            'product_id',
            'url',
            'category_data',
            'description',
            'amount',
            'unit_price'
        ]

    def get_category_data(self, obj):
        return{
            'category': obj.category.category
        }
    
    def get_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("product-detail", kwargs={'pk': obj.pk}, request=request)