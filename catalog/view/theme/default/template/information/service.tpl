<?php echo $header; ?>

<div id="content" class="customer-service">

<div class="container">
    <div class="content-box">
        <div class="col-xs-4">
            <figure class="text-center">
                <img src="/image/delivery.png" alt="Заказы и доставка" />
            </figure>
            <h4 class="title text-center">Заказы и доставка</h4>
            <ul class="link">
                <li><a href="index.php?route=information/information&information_id=6">Информация о доставке</a></li>
                <li><a href="index.php?route=information/information&information_id=3">Отследить заказ</a></li>
            </ul>
        </div>
        <div class="col-xs-4">
            <figure class="text-center">
                <img src="/image/quality.png" alt="F.A.Q." />
            </figure>
            <h4 class="title text-center">Гарантия</h4>
            <ul class="link">
                <li><a href="index.php?route=information/information&information_id=5">F.A.Q.</a></li>
            </ul>
        </div>
        <div class="col-xs-4">
            <figure class="text-center">
                <img src="/image/support.png" alt="Связь с нами" />
            </figure>
            <h4 class="title text-center">Связь с нами</h4>
            <ul class="link">
                <li><a href="index.php?route=information/information&information_id=4">Контактная информация</a></li>
                <li class="order-form">
                    <span class="text-red">Заявка на товар</span>
                    <form id="order" action="index.php?route=mail/mail" method="POST">
                        <input class="form-control" type="text" name="brand" placeholder="Производитель" />
                        <input class="form-control" type="text" name="year" placeholder="Год" />
                        <input class="form-control" type="text" name="model" placeholder="Модель" />
                        <input class="form-control" type="text" name="name" placeholder="Имя" />
                        <input class="form-control" type="text" name="email" placeholder="E-mail" />
                        <input class="form-control" type="text" name="phone" placeholder="Телефон" />
                        <input type="hidden" name="subject" value="Заявка на товар" />
                        <textarea class="form-control" name="text" placeholder="Интересующие товары" ></textarea>
                        <button class="btn btn-submit" type="submit">Задать вопрос</button>
                    </form>
                </li>
                <li class="question-form">
                    <span class="text-red">Задать вопрос</span>
                    <form id="question" action="index.php?route=mail/mail" method="POST">
                        <input class="form-control" type="text" name="name" placeholder="Введите имя" />
                        <input class="form-control" type="text" name="email" placeholder="Введите e-mail" />
                        <input type="hidden" name="subject" value="Задать вопрос" />
                        <textarea class="form-control" name="text" placeholder="Задайте вопрос" ></textarea>
                        <button class="btn btn-submit" type="submit">Задать вопрос</button>
                    </form>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
        <div class="contacts">
            <div class="col-xs-6 column-left">
                <h4 class="title">Контакты</h4>
                +7 (800) 00-00-000<br/>
                +7 (800) 00-00-000<br/>
                e-mail: e-mail@email.com
            </div>
            <div class="col-xs-6 column-right text-right">
                Skype: ContactSkype<br/>
                trelo<br/>
                vk.com/group
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>

</div>

<?php echo $footer; ?>
