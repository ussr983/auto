<?php
class ControllerCommonSearchingCar extends Controller {
    public function index() {
        $this->load->model('catalog/searching_car');

        if (isset($this->request->post['brand'])) {
            $brand = $this->request->post['brand'];
        }

        if (isset($this->request->post['year'])) {
            $yaer = $this->request->post['year'];
        }

        if (isset($this->request->post['model'])) {
            $model = $this->request->post['model'];
        }

        if (isset($this->request->post['category_id'])) {
            $category_id = $this->request->post['category_id'];
        }

        $results = $this->model_catalog_searching_car->getProducts($brand, $yaer, $model, $category_id);

        var_dump($results);
    }
}