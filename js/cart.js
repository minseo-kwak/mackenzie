$(function(){
    $('.cart-menu img').click(function(){
        location.href = 'detail.html'
    });
    //수량 증감
    $('.cart-input button').click(function(){
        var input = $(this).parent().find('input');
        var inputV = parseInt(input.val());
        var inputMin = parseInt(input.attr('data-min'));
        var inputMax = parseInt(input.attr('data-max'));

        var down = $(this).hasClass('down');

        if (down) {
            inputV <= inputMin ? (inputV = inputMin) : inputV--;
        } else {
            inputV >= inputMax ? (inputV = inputMax) : inputV++;
        }
        $(this).parent().find('input').val(inputV);
    });

    //cart 목록에서 삭제하기
    $('.btn-delete').click(function (){
        $(this).parents('li').remove();
    });

    //고객평 more
    $('.order-btn button').click(function(){
        alert('서비스를 준비 중입니다.');
    });
})