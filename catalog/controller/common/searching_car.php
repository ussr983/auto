<?php
class ControllerCommonSearchingCar extends Controller {
    public function index() {
        $this->load->model('catalog/searching_car');
        $this->load->model('tool/image');

        $this->load->language('product/product');

        $data = array();

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

        if ($results) {
            foreach ($results as $result) {
                if ($result['image']) {
                    $image = $this->model_tool_image->resize($result['image'], $this->config->get('config_image_related_width'), $this->config->get('config_image_related_height'));
                } else {
                    $image = $this->model_tool_image->resize('placeholder.png', $this->config->get('config_image_related_width'), $this->config->get('config_image_related_height'));
                }

                if (($this->config->get('config_customer_price') && $this->customer->isLogged()) || !$this->config->get('config_customer_price')) {
                    $price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')));
                } else {
                    $price = false;
                }

                $data['products'][] = array(
                    'product_id' => $result['product_id'],
                    'thumb' =>  $image,
                    'name' => $result['name'],
                    'description' => $result['description'],
                    'price' => $price
                );

                $data['button_cart'] = $this->language->get('button_cart');
                $data['minimum'] = 1;

                $data['column_left'] = $this->load->controller('common/column_left');
                $data['column_right'] = $this->load->controller('common/column_right');
                $data['content_top'] = $this->load->controller('common/content_top');
                $data['content_bottom'] = $this->load->controller('common/content_bottom');
                $data['footer'] = $this->load->controller('common/footer');
                $data['header'] = $this->load->controller('common/header');

                if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/product/searching_result.tpl')) {
                    $this->response->setOutput($this->load->view($this->config->get('config_template') . '/template/product/searching_result.tpl', $data));
                } else {
                    $this->response->setOutput($this->load->view('default/template/product/searching_result.tpl', $data));
                }
            }

        } else {
            $data['button_continue'] = $this->language->get('button_continue');

            $data['continue'] = $this->url->link('common/home');

            $this->response->addHeader($this->request->server['SERVER_PROTOCOL'] . ' 404 Not Found');

            $data['column_left'] = $this->load->controller('common/column_left');
            $data['column_right'] = $this->load->controller('common/column_right');
            $data['content_top'] = $this->load->controller('common/content_top');
            $data['content_bottom'] = $this->load->controller('common/content_bottom');
            $data['footer'] = $this->load->controller('common/footer');
            $data['header'] = $this->load->controller('common/header');

            if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/error/not_found.tpl')) {
                $this->response->setOutput($this->load->view($this->config->get('config_template') . '/template/error/not_found.tpl', $data));
            } else {
                $this->response->setOutput($this->load->view('default/template/error/not_found.tpl', $data));
            }
        }
    }
}