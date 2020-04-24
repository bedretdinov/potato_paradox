$(function() {

    eventer = function(event, ui) {

        h = $('.scene').height()
        w = $('.scene').width()
        p = h * w

        box_size = 52

        h_count = parseInt(h / box_size)
        w_count = parseInt(w / box_size)

        $('.scene .box').html('')

        $('.scene').height(h_count * box_size)
        $('.scene').width(w_count * box_size)

        var boxsis_count = h_count * w_count
        for (var i = 0; i < boxsis_count; i++) {
            var cls = ''
            if (i == 0) {
                cls = 'sms'
            }

            $('.scene .box').append($('<div>').addClass('element ' + cls))
        }

        ss = (1 / (boxsis_count * 0.01)).toFixed(2)
        ww = 100 - ss

        $('.info span').html(ss + '% cухой смеси ')
        $('.info2 span').html(ww + '% воды ')

    }


    resize = function(event, ui){

        h = $('.scene').height()
        w = $('.scene').width()
        p = h * w

        box_size = 52

        h_count = parseInt(h / box_size)
        w_count = parseInt(w / box_size)


        $('.info3').show()
        $('.info3 span').html(h_count + ' строк ; '+w_count+' колонок')

    }

    clean = function(event, ui){ $('.scene .box').html('') }

    $('.scene').resizable({
        create: eventer,
        stop: eventer,
        start: clean,
        resize: resize,
    });



})
