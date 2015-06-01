<?php
class ControllerMailMail extends Controller {
  
    public function index(){
        $this->load->library('mail');
        $mail = new Mail();
        
        if (isset($this->request->post['name'])) {
            $name = $this->request->post['name'];
        }
        if (isset($this->request->post['phone'])) {
            $phone = $this->request->post['phone'];
        }
        if (isset($this->request->post['email'])) {
            $email = $this->request->post['email'];
        }
        if (isset($this->request->post['text'])) {
            $text = $this->request->post['text'];
        }

        $date = date('l jS \of F Y h:i:s A');

        if (isset($phone)) {
            $mail->setSubject('Обратный звонок');
            $html = '<b>Имя: </b>'. $name.'<br/>'; 
            $html .= '<b>Телефон: </b>'.$phone.'<br/>';
            $html .= '<b>Время запроса</b>: '.$date;
        } else if (isset($mail)) {
            $mail->setSubject('Задать вопрос');
            $html = '<b>Имя: </b>'. $name.'<br/>'; 
            $html .= '<b>Телефон: </b>'.$email.'<br/>';
            $html .= '<b>Время вопроса: </b>'.$date.'<br/>';
            $html .= '<b>Вопрос: </b>'.$text;
        }
        
        if (isset($email)) {
            $mail->setFrom($email);
        } else {
            $mail->setFrom('ussr983@gmail.com');
        }
        $mail->setSender($name);
//        $mail->setTo($this->config->get('config_email'));
        $mail->setTo('ussr983@gmail.com');
        $mail->setHtml($html);
        
        if (!$mail->send()) {
            echo json_encode("Письмо отправлено успешно"); 
            die; 
        } else {
            echo json_encode("При отправке писма ошибка"); 
            die;
        }
    }
}
