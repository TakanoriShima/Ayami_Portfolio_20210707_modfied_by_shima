/* global $ */
$(function(){
    // リンクがクリックされた時
    $('a').on('click', function(){
        // クリックされたaタグを特定
        const href = $(this).attr('href');
        const goal = $(href);
        const offset = goal.offset();
        const goal_top = offset.top - 100;
        $('html').animate({scrollTop: goal_top}, 1000, 'swing');
    });
});