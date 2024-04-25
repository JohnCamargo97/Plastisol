from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register
from .models import product


@register(product)
class ProductIndex(AlgoliaIndex):
    fields = [
        #'category',
        'product_id',
        'description'
    ]