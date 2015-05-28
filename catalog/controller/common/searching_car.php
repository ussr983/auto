<?php
class ControllerCommonSearchingCar extends Controller {
    public function index() {

        $this->load->model('catalog/searching_car');

        if (isset($this->request->post['make'])) {
            $make = $this->request->post['make'];
        }

        if (isset($this->request->post['year'])) {
            $yaer = $this->request->post['year'];
        }

        if (isset($this->request->post['model'])) {
            $model = $this->request->post['model'];
        }

        if (isset($make)) {
            $result = $this->model_catalog_searching_car->getAttributes($make);

            if ($result) {

                foreach ($result as $make) {
                    $data['make'][] = array(
                        'name' => $make['name']
                    );
                }

                echo json_encode($data['make']);
            }
        }

        if (isset($year)) {
            $result = $this->model_catalog_searching_car->getAttributes($year);

            if ($result) {

                foreach ($result as $yaer) {
                    $data['yaer'][] = array(
                        'name' => $year['name']
                    );
                }

                var_dump($year);

                echo json_encode($data['yaer']);
            }
        }
    }
}