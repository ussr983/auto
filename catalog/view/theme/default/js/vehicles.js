var vehicles = {
    Acura: {
        2015: ['ILX', 'MDX', 'RDX', 'RLX', 'TLX'],
        2014: ['ILX', 'MDX', 'RDX', 'RLX', 'TLX', 'TL'],
        2013: ['ILX', 'MDX', 'RDX', 'RLX', 'TSX', 'TL', 'RL', 'ZDX'],
    },
    Audi: {
        2015: ['A3/S3', 'A4/S4/RS4', 'A5/S5/RS5', 'A6/S6', 'A7'],
        2014: ['A4/S4/RS4', 'A5/S5/RS5', 'A6/S6', 'A7'],
        2013: ['A3/S3', 'A4/S4/RS4', 'A5/S5/RS5', 'A6/S6', 'A7'],
    },
    BMW: {
        2013: ['2-Series', '3-Series', '5-Series', '7-Series', 'I3'],
        2012: ['2-Series', '3-Series', '5-Series', '7-Series', 'I3'],
        2011: ['2-Series', '3-Series', '5-Series', '7-Series', 'I3'],
    }
};

$(document).ready(function() {
    var html = '<option>Выбор производителя</option>';
        btn = $('#form-searching-car .btn-submit');

    btn.attr('disabled', true);

    $.each(vehicles, function(i, value) {
        html += '<option value="' + i + '">' + i + '</option>';
    });

    $('select[name=brand]').html('').append(html);

    $('select[name=brand]').on('change', function() {
        var html = '<option>Выбор года</option>',
            brand = $('select[name=brand] option:selected').text();

        $.each(vehicles[brand], function(i, value) {
            html += '<option value="' + i + '">' + i + '</option>';
        });

        $('select[name=year]').html('').append(html);
    });

    $('select[name=year]').on('change', function() {
        var html = '<option>Выбор модели</option>',
            brand = $('select[name=brand] option:selected').text(),
            year = $('select[name=year] option:selected').text();

        $.each(vehicles[brand][year], function(i, value) {
            html += '<option value="' + value + '">' + value + '</option>';
        });

        $('select[name=model]').html('').append(html);
    });

    $('select[name=model]').on('change', function() {
        btn.attr('disabled', true);

        if($('select[name=model] option:selected').text() !== 'Выбор модели') {
            btn.attr('disabled', false);
        }
    });

    $('a, .btn-start').on('click', function(e) {
        var el = $(e.currentTarget),
            data = el.data('categoryid');

        if(data) {
            $('#form-searching-car input[name=category_id]').val(data);
        } else {
            $('#form-searching-car input[name=category_id]').val('');
        }
    });

});
