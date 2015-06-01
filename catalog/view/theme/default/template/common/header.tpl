<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1200">
    <title><?php echo $title; ?></title>
    <base href="<?php echo $base; ?>" />
    <?php if ($description) { ?>
        <meta name="description" content="<?php echo $description; ?>" />
    <?php } ?>
    <?php if ($keywords) { ?>
        <meta name="keywords" content= "<?php echo $keywords; ?>" />
    <?php } ?>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php if ($icon) { ?>
        <link href="<?php echo $icon; ?>" rel="icon" />
    <?php } ?>
    <?php foreach ($links as $link) { ?>
        <link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
    <?php } ?>
    <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css" />
    <link href="catalog/view/theme/default/css/bootstrap.min.css" rel="stylesheet">
    <link href="catalog/view/theme/default/css/font-awesome.min.css" rel="stylesheet">
    <link href="catalog/view/theme/default/css/style.css" rel="stylesheet">
    <?php foreach ($styles as $style) { ?>
        <link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>" media="<?php echo $style['media']; ?>" />
    <?php } ?>
    <script src="catalog/view/theme/default/js/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="catalog/view/theme/default/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="catalog/view/theme/default/js/jquery.validate.min.js" type="text/javascript"></script>
    <script src="catalog/view/theme/default/js/common.js" type="text/javascript"></script>
    <script src="catalog/view/theme/default/js/vehicles.js" type="text/javascript"></script>
    <?php foreach ($scripts as $script) { ?>
        <script src="<?php echo $script; ?>" type="text/javascript"></script>
    <?php } ?>
    <?php echo $google_analytics; ?>
</head>
<body class="<?php echo $class; ?>">
    <div class="page">
        <div class="nav">
            <div class="container">
                <div class="row">
                    <div class="col-xs-4 logo">
                        <a href="/"><img src="image/catalog/logo.png" alt="an-tech"></a>
                    </div>
                    <div class="col-xs-8 top-menu">
                        <ul class="top-nav">
                            <li>
                                <a>Каталог продукции</a>
                                <ul class="dropdown-menu">
                                <?php foreach ($categories as $category) { ?>
                                    <li>
                                        <a href="#" data-categoryid="<?php echo $category['category_id']; ?>" data-toggle="modal" data-target="#searching-car"><?php echo $category['name']; ?></a>
                                    </li>
                                <?php } ?>
                                </ul>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#searching-car">Подбор по автомобилю</a>
                            </li>
                            <li>
                                <a href="index.php?route=information/service">Обслуживание клиентов</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>