# Generated by Django 4.2.5 on 2023-10-10 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0002_rename_postalcode_shippingaddress_district"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="totalPrice",
            field=models.DecimalField(
                blank=True, decimal_places=2, max_digits=20, null=True
            ),
        ),
        migrations.AlterField(
            model_name="product",
            name="price",
            field=models.DecimalField(
                blank=True, decimal_places=2, max_digits=12, null=True
            ),
        ),
    ]
