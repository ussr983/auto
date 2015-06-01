<?php
class ModelVehiclesVehicles extends Model{
    
    public function getProducts($brand, $year, $model) {
        $query = $this->db->query("");
        return $query->rows;
    }
}

