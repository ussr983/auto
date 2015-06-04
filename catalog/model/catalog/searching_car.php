<?php
class ModelCatalogSearchingCar extends Model {
    public function getProducts($brand, $year, $model, $category_id = NULL) {
        if (empty($category_id)) {
            $sql = "SELECT DISTINCT p.*, pd1.* FROM `" . DB_PREFIX . "product` p LEFT JOIN `" . DB_PREFIX . "product_description` pd1 ON (pd1.product_id = p.product_id) LEFT JOIN `" . DB_PREFIX . "product_attribute` pa1 ON (pa1.product_id = p.product_id) JOIN `" . DB_PREFIX . "attribute_description` ad1 ON (pa1.attribute_id = ad1.attribute_id AND ad1.name = 'Марка') LEFT JOIN `" . DB_PREFIX . "product_attribute` pa2 ON (pa2.product_id = p.product_id) JOIN `" . DB_PREFIX . "attribute_description` ad2 ON (pa2.attribute_id = ad2.attribute_id AND ad2.name = 'Год') LEFT JOIN `" . DB_PREFIX . "product_attribute` pa3 ON (pa3.product_id = p.product_id) JOIN `" . DB_PREFIX . "attribute_description` ad3 ON (pa3.attribute_id = ad3.attribute_id AND ad3.name = 'Модель') WHERE pa1.text LIKE '%" . $brand . "%' AND pa2.text LIKE '%" . $year . "%' AND pa3.text LIKE '%" . $model . "%'";
        } else {
            $sql = "SELECT DISTINCT p.*, pd1.* FROM `" . DB_PREFIX . "product` p LEFT JOIN `" . DB_PREFIX . "product_description` pd1 ON (pd1.product_id = p.product_id) LEFT JOIN `" . DB_PREFIX . "product_to_category` pc1 ON (pc1.product_id = p.product_id) LEFT JOIN `" . DB_PREFIX . "product_attribute` pa1 ON (pa1.product_id = p.product_id) JOIN `" . DB_PREFIX . "attribute_description` ad1 ON (pa1.attribute_id = ad1.attribute_id AND ad1.name = 'Марка') LEFT JOIN `" . DB_PREFIX . "product_attribute` pa2 ON (pa2.product_id = p.product_id) JOIN `" . DB_PREFIX . "attribute_description` ad2 ON (pa2.attribute_id = ad2.attribute_id AND ad2.name = 'Год') LEFT JOIN `" . DB_PREFIX . "product_attribute` pa3 ON (pa3.product_id = p.product_id) JOIN `" . DB_PREFIX . "attribute_description` ad3 ON (pa3.attribute_id = ad3.attribute_id AND ad3.name = 'Модель') WHERE pc1.category_id = '" . $category_id . "' AND pa1.text LIKE '%" . $brand . "%' AND pa2.text LIKE '%" . $year . "%' AND pa3.text LIKE '%" . $model . "%'";
        }

        $query = $this->db->query($sql);

        return $query->rows;
    }
}
