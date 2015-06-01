<?php echo $header; ?>

<div class="container">
    <div class="header">
        <div class="header-box">
            <div class="callback text-center">
                <div class="title"><i class="fa fa-phone"></i> 8 800 <small>XXX XX XX</small></div>
                <button class="btn btn-red" data-toggle="modal" data-target="#callback">Заказать звонок</button>
            </div>
            <div class="delivery">
                Бесплатная доставка в<br/><span class="text-red">г. Краматорск</span>
            </div>
            <div class="delivery-icon"></div>
            <div class="payment">
                Оплата <span class="text-red">при получении</span>
            </div>
            <div class="payment-icon"></div>
        </div>
        <div class="light"></div>
        <div class="btn-start" data-toggle="modal" data-target="#searching-car"></div>
    </div>
    <div class="categories">
    <?php $i = 1; ?>
    <?php foreach ($categories as $category) { ?>
        <div class="col-xs-6 category-item">
            <a data-categoryid="<?php echo $category['category_id']; ?>" data-toggle="modal" data-target="#searching-car">
                <img class="img-responsive" src="<?php echo $category['image']; ?>" alt="" />
                <?php if ($i % 2 == 1) { ?>
                    <div class="title title-left"><?php echo $category['name']; ?></div>
                <?php } else { ?>
                    <div class="title title-right"><?php echo $category['name']; ?></div>
                <?php } ?>
                <div class="price"><?php echo $category['description']; ?></div>
            </a>
        </div>
    <?php $i++; ?>
    <?php } ?>
        <div class="clearfix"></div>
    </div>
    <div class="about-us">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo amet, quibusdam laudantium magni officia mollitia sit enim reiciendis libero ad magnam, quia consequatur tempore optio nostrum maiores eaque rem consequuntur.
    </div>
</div>

<?php echo $footer; ?>