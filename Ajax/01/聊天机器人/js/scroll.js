$(function () {
    var $main = $('.main');
    var $list = $('.talk_list');
    var $drager = $('.drager');
    var $mainh = $main.outerHeight(false);
    var $listh = $list.outerHeight(false);

    var $rate = $mainh / $listh;
    var $dragh = $mainh * $rate;
    var $top = 0;
    
})