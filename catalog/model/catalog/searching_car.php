<?php
class ModelCatalogSearchingCar extends Model {
    public function getAttributes($attributes_id) {
        $query = $this->db->query("SELECT * FROM `". DB_PREFIX ."attribute` a LEFT JOIN `". DB_PREFIX ."attribute_description` ad ON (a.attribute_id = ad.attribute_id) WHERE a.attribute_group_id = " . $attributes_id);

        return $query->rows;
    }
}