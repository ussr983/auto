<?php echo $header; ?>

<?php echo $column_left; ?>
  <?php if ($column_left && $column_right) { ?>
  <?php $class = 'col-sm-6'; ?>
  <?php } elseif ($column_left || $column_right) { ?>
  <?php $class = 'col-sm-9'; ?>
  <?php } else { ?>
  <?php $class = 'col-sm-12'; ?>
  <?php } ?>
    <div id="product" class="<?php echo $class; ?>"><?php echo $content_top; ?>
      <div class="container">
        <div class="content-box">
          <?php if ($products) { ?>
            <?php foreach ($products as $product) { ?>
                <div class="col-xs-6 products">
                  <img src="<?php echo $product['thumb']; ?>" />
                  <table class="product-description">
                    <tr>
                      <td><h1><?php echo $product['name']; ?></h1></td>
                      <td class="text-red"><?php echo $product['price']; ?></td>
                    </tr>
                    <tr>
                      <td colspan="2"><?php echo $product['description']; ?></div>
                    </tr>
                    <tr>
                    <td colspan="2">
                      <input type="text" name="quantity" value="1" size="2" id="input-quantity" class="form-control">
                      <input type="hidden" name="product_id" value="<?php echo $product['product_id']; ?>">
                      <button type="button" id="button-cart" class="btn btn-primary btn-lg btn-block"><?php echo $button_cart; ?></button>
                    </td>
                    </tr>
                  </table>
                </div>
            <?php } ?>
          <?php } ?>
          <div class="clearfix"></div>
        </div>
        <?php echo $content_bottom; ?>
      </div>
    </div>
  <?php echo $column_right; ?>

<?php echo $footer; ?>
<script type="text/javascript"><!--
$('#button-cart').on('click', function() {
  $.ajax({
    url: 'index.php?route=checkout/cart/add',
    type: 'post',
    data: $('#product input[type="hidden"]'),
    dataType: 'json',
    beforeSend: function() {
      $('#button-cart').button('loading');
    },
    complete: function() {
      $('#button-cart').button('reset');
    },
    success: function(json) {
      $('.alert, .text-danger').remove();
      $('.form-group').removeClass('has-error');

      if (json['error']) {
        if (json['error']['option']) {
          for (i in json['error']['option']) {
            var element = $('#input-option' + i.replace('_', '-'));

            if (element.parent().hasClass('input-group')) {
              element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
            } else {
              element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
            }
          }
        }

        if (json['error']['recurring']) {
          $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
        }

        // Highlight any found errors
        $('.text-danger').parent().addClass('has-error');
      }

      if (json['success']) {
        $('.breadcrumb').after('<div class="alert alert-success">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

        $('#cart > button').html('<i class="fa fa-shopping-cart"></i> ' + json['total']);

        $('html, body').animate({ scrollTop: 0 }, 'slow');

        $('#cart > ul').load('index.php?route=common/cart/info ul li');
      }
    }
  });
});
//--></script>