from django.db import models

class Place(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    distance = models.DecimalField(max_digits=5, decimal_places=2)
    comments = models.TextField()
    image =  models.URLField()

    def __str__(self):
        return self.name
