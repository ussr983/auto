function getURLVar(key) {
	var value = [];

	var query = String(document.location).split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}

$(document).ready(function() {
	// Adding the clear Fix
	cols1 = $('#column-right, #column-left').length;

	if (cols1 == 2) {
		$('#content .product-layout:nth-child(2n+2)').after('<div class="clearfix visible-md visible-sm"></div>');
	} else if (cols1 == 1) {
		$('#content .product-layout:nth-child(3n+3)').after('<div class="clearfix visible-lg"></div>');
	} else {
		$('#content .product-layout:nth-child(4n+4)').after('<div class="clearfix"></div>');
	}

    //Hidden empty cart
    var elText = $.trim($('.cart a').text());

    if (elText == 'Ваша корзина пуста!') {
        $('.cart').css('display', 'none');
    }

	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();

		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});

	// Currency
	$('#currency .currency-select').on('click', function(e) {
		e.preventDefault();

		$('#currency input[name=\'code\']').attr('value', $(this).attr('name'));

		$('#currency').submit();
	});

	// Language
	$('#language a').on('click', function(e) {
		e.preventDefault();

		$('#language input[name=\'code\']').attr('value', $(this).attr('href'));

		$('#language').submit();
	});

	/* Search */
	$('#search input[name=\'search\']').parent().find('button').on('click', function() {
		url = $('base').attr('href') + 'index.php?route=product/search';

		var value = $('header input[name=\'search\']').val();

		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}

		location = url;
	});

	$('#search input[name=\'search\']').on('keydown', function(e) {
		if (e.keyCode == 13) {
			$('header input[name=\'search\']').parent().find('button').trigger('click');
		}
	});

	// Menu
	$('#menu .dropdown-menu').each(function() {
		var menu = $('#menu').offset();
		var dropdown = $(this).parent().offset();

		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

		if (i > 0) {
			$(this).css('margin-left', '-' + (i + 5) + 'px');
		}
	});

	// Product List
	$('#list-view').click(function() {
		$('#content .product-layout > .clearfix').remove();

		//$('#content .product-layout').attr('class', 'product-layout product-list col-xs-12');
		$('#content .row > .product-layout').attr('class', 'product-layout product-list col-xs-12');

		localStorage.setItem('display', 'list');
	});

	// Product Grid
	$('#grid-view').click(function() {
		$('#content .product-layout > .clearfix').remove();

		// What a shame bootstrap does not take into account dynamically loaded columns
		cols = $('#column-right, #column-left').length;

		if (cols == 2) {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
		} else if (cols == 1) {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		} else {
			$('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
		}

		 localStorage.setItem('display', 'grid');
	});

	if (localStorage.getItem('display') == 'list') {
		$('#list-view').trigger('click');
	} else {
		$('#grid-view').trigger('click');
	}

	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});

	//Splash light
	$('.btn-start').mouseenter(function() {
		$('.light').fadeIn();
	}).mouseleave(function() {
		$('.light').fadeOut();
	});

    // Searchig car
    $.ajax({
    	type: "POST",
    	url: "?route=common/searching_car",
    	data: { make: "7"},
    	cache: false,
    	dataType: 'json',
    	success: function(data) {
    		var $html;

    		for (var i = 0; i < data.length; i++) {
    			$html += '<option value="' +  data[i]['name'] + '">' + data[i]['name'] + '</option>';
    		}

    		$('#searching-car select[name=make]').append($html);
    	}
    });

    $("#searching-car select[name=make]").on("mouseup", function() {
        var string = $(this).val();

        if (string !== 'Выбор производителя') {
        	getYear(string);
        }
    });

    function getYear(string) {
    	$.ajax({
    		type: "POST",
    		url: "?route=common/searching_car",
    		data: { year: "8" },
    		cache: false,
    		dataType: 'json',
    		success: function(data) {
    			var $html;

	    		for (var i = 0; i < data.length; i++) {
	    			$html += '<option value="' +  data[i]['name'] + '">' + data[i]['name'] + '</option>';
	    		}

	    		$('#searching-car select[name=year]').append($html);
    		}
    	});
    }
    $('#form-callback').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            phone:{
                required: true,
                minlength: 5,
                maxlength: 14,
            },
        },
        messages:{
            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символо - 16",
            },
            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 5 символа",
                maxlength: "Пароль должен быть максимум 14 символов",
            },
        }
    });
    
    $('#question').validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },  
            email:{
                required: true,
                email: true,
            },
            text:{
                required: true,
                minlength: 20,
                maxlength: 500,
            },
        },
        messages:{
            name:{
               required: "Это поле обязательно для заполнения",
               minlength: "Имя должно быть минимум 2 символа",
               maxlength: "Максимальное число символо - 16",
            },  
            email:{
               required: "Это поле обязательно для заполнения",
               email:    "Поле e-mail должно быть правильного формата",
            },
            text:{
               required: "Это поле обязательно для заполнения",
               minlength: "Вопрос должен быть минимум 20 символа",
               maxlength: "Вопрос должен быть максимум 500 символов",
            },
        }
    });
    
    $('#order').validate({
        rules:{
            brand:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            year:{
                required: true,
                digits: true,
                minlength: 4,
                maxlength: 4,
            },
            model:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,
            },
            phone:{
                required: true,
                minlength: 5,
                maxlength: 14,
            },
            text:{
                required: true,
                minlength: 20,
                maxlength: 500,
            },
        },
        messages:{
            brand:{
               required: "Это поле обязательно для заполнения",
               minlength: "Бренд должен быть минимум 2 символа",
               maxlength: "Бренд должен быть максимум 16 символов",
            },
            year:{
               required: "Это поле обязательно для заполнения",
               digits:  "Поле должно содержать только цыфры",
               minlength: "Год должен содержать 4 цифры",
               maxlength: "Год должен содержать 4 цифры",
            },
            model:{
               required: "Это поле обязательно для заполнения",
               minlength: "Модель должна быть минимум 2 символа",
               maxlength: "Модель должна быть максимум 16 символов",
            },
            name:{
               required: "Это поле обязательно для заполнения",
               minlength: "Имя должно быть минимум 2 символа",
               maxlength: "Максимальное число символо - 16",
            },
            email:{
                required: "Это поле обязательно для заполнения",
                email:    "Поле e-mail должно быть правильного формата",
            },
            phone:{
               required: "Это поле обязательно для заполнения",
               minlength: "Телефон должен быть минимум 5 символов",
               maxlength: "Телефон должен быть максимум 14 символов",
            },
            text:{
                required: "Это поле обязательно для заполнения",
                minlength: "Вопрос должен быть минимум 20 символа",
                maxlength: "Вопрос должен быть максимум 500 символов",
            },
        }
    });
    
    $('#order').on('submit', function(e) {
        e.preventDefault();
        
        if($(this).valid()) {
            var form = $(this),
                method = $(this).attr('method'),
                action = $(this).attr('action'),
                data = $(this).serialize();
                
            mail(form, method, action, data);
        }
        
        return;
    });
    
    $('#question').on('submit', function(e) {
        e.preventDefault();
        
        if($(this).valid()) {
            var form = $(this),
                method = $(this).attr('method'),
                action = $(this).attr('action'),
                data = $(this).serialize();
                
            mail(form, method, action, data);
        }
        
        return;
    });
    
    $('#form-callback').on('submit', function(e) {
        e.preventDefault();
        
        if($(this).valid()) {
            var form = $(this),
                method = $(this).attr('method'),
                action = $(this).attr('action'),
                data = $(this).serialize();
                
            mail(form, method, action, data);
        }
        
        return;
    });
  
    /**
     * send mail
     */
    function mail(form, method, action, data) {
        $.ajax({
            type:   method,
            url:    action,
            data:   data,
            dataType: 'json',
            beforeSend: function(data) {
                form.find('button[type=submit]').attr('disabled', true);
            },
            success: function(data) {
                form.html(data);
            },
            afterSend: function(data) {
                form.find('button[type=submit]').attr('disabled', false);
            }
        })
    }
});

// Cart add remove functions
var cart = {
	'add': function(product_id, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				$('.alert, .text-danger').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					// Need to set timeout otherwise it wont update the total
					setTimeout(function () {
						$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
					}, 100);

					$('html, body').animate({ scrollTop: 0 }, 'slow');

					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			}
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			}
		});
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			}
		});
	}
}

var voucher = {
	'add': function() {

	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			}
		});
	}
}

var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				}

				if (json['info']) {
					$('#content').parent().before('<div class="alert alert-info"><i class="fa fa-info-circle"></i> ' + json['info'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				}

				$('#wishlist-total').html(json['total']);

				$('html, body').animate({ scrollTop: 0 }, 'slow');
			}
		});
	},
	'remove': function() {

	}
}

var compare = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();

				if (json['success']) {
					$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					$('#compare-total').html(json['total']);

					$('html, body').animate({ scrollTop: 0 }, 'slow');
				}
			}
		});
	},
	'remove': function() {

	}
}

/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
	e.preventDefault();

	$('#modal-agree').remove();

	var element = this;

	$.ajax({
		url: $(element).attr('href'),
		type: 'get',
		dataType: 'html',
		success: function(data) {
			html  = '<div id="modal-agree" class="modal">';
			html += '  <div class="modal-dialog">';
			html += '    <div class="modal-content">';
			html += '      <div class="modal-header">';
			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
			html += '      </div>';
			html += '      <div class="modal-body">' + data + '</div>';
			html += '    </div';
			html += '  </div>';
			html += '</div>';

			$('body').append(html);

			$('#modal-agree').modal('show');
		}
	});    
});

// Autocomplete */
(function($) {
	$.fn.autocomplete = function(option) {
		return this.each(function() {
			this.timer = null;
			this.items = new Array();

			$.extend(this, option);

			$(this).attr('autocomplete', 'off');

			// Focus
			$(this).on('focus', function() {
				this.request();
			});

			// Blur
			$(this).on('blur', function() {
				setTimeout(function(object) {
					object.hide();
				}, 200, this);
			});

			// Keydown
			$(this).on('keydown', function(event) {
				switch(event.keyCode) {
					case 27: // escape
						this.hide();
						break;
					default:
						this.request();
						break;
				}
			});

			// Click
			this.click = function(event) {
				event.preventDefault();

				value = $(event.target).parent().attr('data-value');

				if (value && this.items[value]) {
					this.select(this.items[value]);
				}
			}

			// Show
			this.show = function() {
				var pos = $(this).position();

				$(this).siblings('ul.dropdown-menu').css({
					top: pos.top + $(this).outerHeight(),
					left: pos.left
				});

				$(this).siblings('ul.dropdown-menu').show();
			}

			// Hide
			this.hide = function() {
				$(this).siblings('ul.dropdown-menu').hide();
			}

			// Request
			this.request = function() {
				clearTimeout(this.timer);

				this.timer = setTimeout(function(object) {
					object.source($(object).val(), $.proxy(object.response, object));
				}, 200, this);
			}

			// Response
			this.response = function(json) {
				html = '';

				if (json.length) {
					for (i = 0; i < json.length; i++) {
						this.items[json[i]['value']] = json[i];
					}

					for (i = 0; i < json.length; i++) {
						if (!json[i]['category']) {
							html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
						}
					}

					// Get all the ones with a categories
					var category = new Array();

					for (i = 0; i < json.length; i++) {
						if (json[i]['category']) {
							if (!category[json[i]['category']]) {
								category[json[i]['category']] = new Array();
								category[json[i]['category']]['name'] = json[i]['category'];
								category[json[i]['category']]['item'] = new Array();
							}

							category[json[i]['category']]['item'].push(json[i]);
						}
					}

					for (i in category) {
						html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

						for (j = 0; j < category[i]['item'].length; j++) {
							html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
						}
					}
				}

				if (html) {
					this.show();
				} else {
					this.hide();
				}

				$(this).siblings('ul.dropdown-menu').html(html);
			}

			$(this).after('<ul class="dropdown-menu"></ul>');
			$(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));

		});
	}
})(window.jQuery);