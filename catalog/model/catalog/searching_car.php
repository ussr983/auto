<?php
class ModelCatalogSearchingCar extends Model {
    public function getAttributes($attributes_id) {
        $query = $this->db->query("SELECT * FROM `". DB_PREFIX ."attribute` a LEFT JOIN `". DB_PREFIX ."attribute_description` ad ON (a.attribute_id = ad.attribute_id) WHERE a.attribute_group_id = " . $attributes_id);

        return $query->rows;
    }

    public function getProducts($brand, $yaer, $model, $category_id = '' ) {
        $query = $this->db->query("SELECT * FROM `". DB_PREFIX ."product` p LEFT JOIN `". DB_PREFIX ."product_description` pd ON (p.product_id = pd.product_id) LEFT JOIN `". DB_PREFIX ."product_attribute` pa ON (p.product_id = pa.product_id) LEFT JOIN `". DB_PREFIX ."attribute_description` ad ON (pa.attribute_id = ad.attribute_id) WHERE (ad.name LIKE '%". $brand ."%' AND ad.name LIKE '%". $yaer ."%' AND ad.name LIKE '%". $model ."%')");

        return $query->rows;
    }
}