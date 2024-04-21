from django.db import models

class product(models.Model):
    product_id = models.CharField(max_length=5, unique=True)
    category = models.CharField(max_length=15, default="")
    description = models.CharField(max_length=50)
    amount = models.IntegerField(default=0)
    unit_price = models.DecimalField(max_digits=7, decimal_places=2, default=0)