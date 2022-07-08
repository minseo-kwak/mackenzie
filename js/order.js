$(function(){
    //메뉴 탭하여 원하는 섹션 보기
    $()

    //카트에 추가
    $('.order-menulist li .txt-box .btn-add').click(function(){
        $(this).toggleClass('added')
    });

    //검색창
    $('.btn-search').click(function(){
        $('.popup-search').fadeIn();
    });
    $('.popup-search').click(function(evt){
        var box = $(evt.target).hasClass('popup-search');
        if(box){
            $('.popup-search').fadeOut();
        }
    });

    $('.popup-search').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
    });
   });