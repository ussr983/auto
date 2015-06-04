var vehicles = {
    Audi: {
        2015: ['Q3', 'Q5', 'Q7'],
        2014: ['Q3', 'Q5', 'Q7'],
        2013: ['Q3', 'Q5', 'Q7'],
        2012: ['Q3', 'Q5', 'Q7'],
        2011: ['Q3', 'Q5', 'Q7'],
        2010: ['Q5', 'Q7'],
        2009: ['Q5', 'Q7'],
        2008: ['Q5', 'Q7'],
        2007: ['Q7'],
        2006: ['Q7'],
    },
    Changan: {
        2015: ['CS35'],
        2014: ['CS35'],
        2013: ['CS35'],
        2012: ['CS35'],
    },
    Chery: {
        2015: ['FL', '5'],
        2014: ['FL', '5'],
        2013: ['FL'],
        2012: ['FL'],
        2011: ['FL'],
        2010: ['FL'],
    },
    Chevrolet: {
        2015: ['Captiva', 'Niva'],
        2014: ['Captiva', 'Niva'],
        2013: ['Captiva', 'Niva'],
        2012: ['Captiva', 'Niva'],
        2011: ['Captiva', 'Niva'],
        2010: ['Captiva', 'Niva'],
    },
    Citroen: {
        2015: ['C4 Aircross'],
        2014: ['C4 Aircross'],
        2013: ['C4 Aircross'],
        2012: ['C4 Aircross'],
    },
    Ford: {
        2015: ['Explorer', 'Kuga', 'Ranger'],
        2014: ['Explorer', 'Kuga', 'Ranger'],
        2013: ['Explorer', 'Kuga', 'Ranger'],
        2012: ['Explorer', 'Kuga', 'Ranger'],
        2011: ['Explorer', 'Ranger'],
    },
    Geely: {
        2015: ['Emgrand X7', 'MK Cross'],
        2014: ['Emgrand X7', 'MK Cross'],
        2013: ['Emgrand X7', 'MK Cross'],
        2012: ['MK Cross'],
        2011: ['MK Cross'],
        2010: ['MK Cross'],
    },
    GreatWall: {
        2015: ['H3', 'H5'],
        2014: ['H3', 'H5'],
        2013: ['H3', 'H5'],
        2012: ['H3', 'H5'],
        2011: ['H3', 'H5'],
        2010: ['H3', 'H5'],
    },
    GreatWall: {
        2015: ['H3', 'H5'],
        2014: ['H3', 'H5'],
        2013: ['H3', 'H5'],
        2012: ['H3', 'H5'],
        2011: ['H3', 'H5'],
        2010: ['H3', 'H5'],
    },
    Chery: {
        2015: ['CR-V'],
        2014: ['CR-V'],
        2013: ['CR-V'],
        2012: ['CR-V'],
        2011: ['CR-V'],
        2010: ['CR-V'],
        2009: ['CR-V'],
        2008: ['CR-V'],
        2007: ['CR-V'],
    },
    Hyundai: {
        2015: ['IX35', 'Grand Santa-Fe', 'Santa-Fe'],
        2014: ['IX35', 'Grand Santa-Fe', 'Santa-Fe'],
        2013: ['IX35', 'Grand Santa-Fe', 'Santa-Fe'],
        2012: ['IX35', 'Santa-Fe'],
        2011: ['IX35', 'Santa-Fe'],
        2010: ['IX35', 'Santa-Fe'],
        2009: ['Santa-Fe'],
        2008: ['Santa-Fe'],
        2007: ['Santa-Fe'],
        2006: ['Santa-Fe'],
    },
    Jeep: {
        2015: ['Compass', 'Grand Cherokee'],
        2014: ['Compass', 'Grand Cherokee'],
        2013: ['Compass', 'Grand Cherokee'],
        2012: ['Compass', 'Grand Cherokee'],
        2011: ['Compass', 'Grand Cherokee'],
        2010: ['Compass', 'Grand Cherokee'],
        2009: ['Compass'],
        2008: ['Compass'],	
    },
    Kia: {
        2015: ['Sportage', 'Sorento'],
        2014: ['Sportage', 'Sorento'],
        2013: ['Sportage', 'Sorento'],
        2012: ['Sportage', 'Sorento'],
        2011: ['Sportage', 'Sorento'],
        2010: ['Sportage', 'Sorento'],
        2009: ['Sorento'],      
    },
    Lada: {
        2015: ['4x4', 'Largus'],
        2014: ['4x4', 'Largus'],
        2013: ['4x4', 'Largus'],
        2012: ['4x4', 'Largus'],
        2011: ['4x4'],
        2010: ['4x4'],
        2009: ['4x4'],
        2008: ['4x4'],
        2007: ['4x4'],
        2006: ['4x4'],
        2005: ['4x4'],
        2004: ['4x4'],
        2003: ['4x4'],
        2002: ['4x4'],
        2001: ['4x4'],
        2000: ['4x4'],        
        1999: ['4x4'],
        1998: ['4x4'],
        1997: ['4x4'],
        1996: ['4x4'],
        1995: ['4x4'],
    },
    Lifan: {
        2015: ['X60'],
        2014: ['X60'],
        2013: ['X60'],
        2012: ['X60'],
        2011: ['X60'],
    },
    Mazda: {
        2015: ['CX5'],
        2014: ['CX5'],
        2013: ['CX5'],
        2012: ['CX5'],
        2011: ['CX5'],	    
    },
    Mitsubishi: {
        2015: ['ASX','Outlander','L200', 'Pajero IV', 'Pajero Sport'],
        2014: ['ASX','Outlander','L200', 'Pajero IV', 'Pajero Sport'],
        2013: ['ASX','Outlander','L200', 'Pajero IV', 'Pajero Sport'],
        2012: ['Outlander','L200', 'Pajero IV', 'Pajero Sport'],
        2011: ['L200', 'Pajero IV', 'Pajero Sport'],
        2010: ['L200', 'Pajero IV', 'Pajero Sport'],
        2009: ['L200', 'Pajero IV'],
        2008: ['L200', 'Pajero IV'],
        2007: ['L200', 'Pajero IV'],
        2006: ['L200', 'Pajero IV'],
    },
    Nissan: {
        2015: ['Juke 2WD','Juke 4WD','Murano','Navara', 'Pathfinder','Patrol','Terrano', 'Qashqai', 'X-Trail'],
        2014: ['Juke 2WD','Juke 4WD','Murano','Navara', 'Pathfinder','Patrol','Terrano', 'Qashqai', 'X-Trail'],
        2013: ['Juke 2WD','Juke 4WD','Murano','Navara', 'Pathfinder', 'Qashqai', 'X-Trail'],
        2012: ['Juke 2WD','Juke 4WD','Murano','Navara', 'Pathfinder', 'Qashqai', 'X-Trail'],
        2011: ['Juke 2WD','Juke 4WD','Murano','Navara', 'Pathfinder', 'Qashqai', 'X-Trail'],
        2010: ['Navara', 'Pathfinder', 'Qashqai'],
        2009: ['Navara', 'Pathfinder', 'Qashqai'],
        2008: ['Navara', 'Pathfinder', 'Qashqai'],
        2007: ['Navara', 'Pathfinder', 'Qashqai'],
        2006: ['Navara', 'Pathfinder', 'Qashqai'],
        2005: ['Navara', 'Pathfinder'],
    },
    Opel: {
        2015: ['Antara', 'Mokka'],
        2014: ['Antara', 'Mokka'],
        2013: ['Antara', 'Mokka'],
        2012: ['Antara', 'Mokka'],
        2011: ['Antara'],
        2010: ['Antara'],
        2009: ['Antara'],
        2008: ['Antara'],
        2007: ['Antara'],
    },
    Peugeot: {
        2015: ['4008'],
        2014: ['4008'],
        2013: ['4008'],
        2012: ['4008'],
    },
    Renault: {
        2015: ['Duster'],
        2014: ['Duster'],
        2013: ['Duster'],
        2012: ['Duster'],
	2011: ['Duster'],
    },
    Skoda: {
        2015: ['Yeti'],
        2014: ['Yeti'],
        2013: ['Yeti'],
        2012: ['Yeti'],
        2011: ['Yeti'],
        2010: ['Yeti'],
        2009: ['Yeti'],
    },
    SsangYong: {
        2015: ['Actyon','Actyon Sports','Kyron','Rexton'],
        2014: ['Actyon','Actyon Sports','Kyron','Rexton'],
        2013: ['Actyon','Actyon Sports','Kyron','Rexton'],
        2012: ['Actyon','Actyon Sports','Kyron','Rexton'],
        2011: ['Actyon','Kyron','Rexton'],
        2010: ['Actyon','Rexton'],
        2009: ['Rexton'],
        2008: ['Rexton'],
        2007: ['Rexton'],
    },
    Subaru: {
        2015: ['Forester','XV'],
        2014: ['Forester','XV'],
        2013: ['Forester','XV'],
        2012: ['Forester','XV'],
    },
    Suzuki: {
        2015: ['Grand Vitara','SX-4'],
        2014: ['Grand Vitara','SX-4'],
        2013: ['Grand Vitara'],
        2012: ['Grand Vitara'],
    },
    Toyota: {
        2015: ['Highlander','Hilux','Land Cruiser 150','Land Cruiser 200','RAV-4','Venza'],
        2014: ['Highlander','Hilux','Land Cruiser 150','Land Cruiser 200','RAV-4','Venza'],
        2013: ['Highlander','Hilux','Land Cruiser 150','Land Cruiser 200','RAV-4','Venza'],
        2012: ['Highlander','Hilux','Land Cruiser 150','Land Cruiser 200','RAV-4 5dr'],
        2011: ['Highlander','Hilux','Land Cruiser 150','Land Cruiser 200','RAV-4 5dr'],
        2010: ['Highlander','Land Cruiser 150','Land Cruiser 200','RAV-4 5dr'],
        2009: ['Highlander','Land Cruiser 200','RAV-4 5dr'],
        2008: ['Highlander','Land Cruiser 200','RAV-4 5dr'],
        2007: ['RAV-4 5dr'],
        2006: ['RAV-4 5dr'],	
    },
    Volkswagen: {
        2015: ['Amarok','Tiguan','Touareg'],
        2014: ['Amarok','Tiguan','Touareg'],
        2013: ['Amarok','Tiguan','Touareg'],
        2012: ['Amarok','Tiguan','Touareg'],
        2011: ['Amarok','Tiguan','Touareg'],
        2010: ['Amarok','Tiguan','Touareg'],
        2009: ['Tiguan'],
        2008: ['Tiguan'],
    },
    UAZ: {
        2015: ['Patriot'],
        2014: ['Patriot'],
        2013: ['Patriot'],
        2012: ['Patriot'],
        2011: ['Patriot'],
        2010: ['Patriot'],
        2009: ['Patriot'],
        2008: ['Patriot'],
        2007: ['Patriot'],
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
