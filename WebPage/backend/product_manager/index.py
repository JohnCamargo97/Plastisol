from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register
from .models import product


@register(product)
class ProductIndex(AlgoliaIndex):
    fields = [
        
        'product_id',
        'description'
    ]
    tags = 'get_category_tags'
    
    settings = {
        "hitsPerPage": 15
    }