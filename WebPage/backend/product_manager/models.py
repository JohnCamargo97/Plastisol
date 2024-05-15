from django.db import models

class category(models.Model):
    category = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.category}"

class product(models.Model):
    product_id = models.CharField(max_length=5, unique=True)
    category = models.ForeignKey(category, on_delete=models.SET_NULL, null=True)
    description = models.CharField(max_length=50)
    amount = models.IntegerField(default=0)
    unit_price = models.DecimalField(max_digits=7, decimal_places=2, default=0)

    def __str__(self):
        return f"{self.category} - {self.description}"
    
    def get_category_tags(self):
        return [self.category]

class cotizacion(models.Model):
    author = models.CharField(max_length=50)
    identification = models.CharField(max_length=30)
    description = models.TextField()

    def __str__(self):
        return self.author
    