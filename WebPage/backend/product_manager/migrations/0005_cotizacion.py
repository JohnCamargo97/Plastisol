# Generated by Django 5.0.4 on 2024-05-15 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_manager', '0004_product_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='cotizacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=100)),
                ('identification', models.CharField(max_length=30)),
                ('description', models.SlugField()),
            ],
        ),
    ]
