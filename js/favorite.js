$(function(){
    //카트에 추가
    $('.order-menulist li .txt-box .btn-add').click(function(){
        $(this).toggleClass('added')
    });

    //메뉴 탭하여 원하는 섹션 보기
    $('#menu-filter ul li').click(function(e){
        e.preventDefault();
        var activeTab = $(this).attr('data-tab');
        $('#menu-filter ul li').removeClass('active');
        $('.tabcont').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');

        $('.detail-filter ul li:nth-child(1)').trigger('click').addClass('active');
    });
});