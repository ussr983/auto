<?php
class ControllerMailMail extends Controller {
  
    public function index(){
        $this->load->library('mail');
        $mail = new Mail();
        
        if (isset($this->request->post['brand'])) {
            $brand = $this->request->post['brand'];
        }
        if (isset($this->request->post['year'])) {
            $year = $this->request->post['year'];
        }
        if (isset($this->request->post['model'])) {
            $model = $this->request->post['model'];
        }
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
        $subject = $this->request->post['subject'];
        $date = date('l jS \of F Y h:i:s A');
        $mail->setSubject($this->request->post['subject']);
        
        switch ($this->request->post['subject']){
            case 'Обратный звонок':
                $html = '<b>Имя: </b>'. $name.'<br/>'; 
                $html .= '<b>Телефон: </b>'.$phone.'<br/>';
                $html .= '<b>Время запроса</b>: '.$date;
                break;
            case 'Задать вопрос':
                $html = '<b>Имя: </b>'. $name.'<br/>'; 
                $html .= '<b>Телефон: </b>'.$email.'<br/>';
                $html .= '<b>Время вопроса: </b>'.$date.'<br/>';
                $html .= '<b>Вопрос: </b>'.$text;
                $this->sendUser($subject, $name, $email);
                break;
            case 'Заявка на товар':
                $html = '<b>Имя: </b>'. $name.'<br/>'; 
                $html .= '<b>E-mail: </b>'.$email.'<br/>';
                $html .= '<b>Время вопроса: </b>'.$date.'<br/>';
                $html .= '<b>Марка авто: </b>'.$brand.'<br/>';
                $html .= '<b>Год: </b>'.$year.'<br/>';
                $html .= '<b>Модель: </b>'.$model.'<br/>';
                $html .= '<b>Вопрос: </b>'.$text;
                $this->sendUser($subject, $name, $email);
        }
        
        if (isset($email)) {
            $mail->setFrom($email);
        } else {
            $mail->setFrom($this->config->get('config_email'));
        }
        $mail->setSender($name);
        $mail->setTo($this->config->get('config_email'));
        $mail->setHtml($html);
        
        if (!$mail->send()) {
            echo json_encode("Письмо отправлено успешно"); 
            die; 
        } else {
            echo json_encode("При отправке писма ошибка"); 
            die;
        }
    }
    
    public function sendUser ($subject, $name, $email){
        
        if ($subject == 'Задать вопрос') {
            $html_client = '<b>Уважаємый, : </b>'. $name.'<br/>'; 
            $html_client .= '<b>Наши менеджеры в течении 18 минут ответят на Ваш вопрос.<br/>';
            $html_client .= '<b>Спасибо за обращения<br/>';
        } else if ($subject == 'Заявка на товар') {
            $html_client = '<b>Уважаємый, : </b>'. $name.'<br/>'; 
            $html_client .= '<b>Вы оставили заявку на товар.<br/>';
            $html_client .= '<b>Наши менеджеры в течении 18 минут связутся с Вами для уточнения деталей.<br/>';
            $html_client .= '<b>Спасибо за обращения<br/>';
        }
        
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: Auto'. $this->config->get('config_email') .''. "\r\n";
        mail($email, $subject, $html_client, $headers);       
    }
}
