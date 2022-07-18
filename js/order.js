$(function(){
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

    //디테일 필터
    var $grid = $('.order-menulist').isotope({
    layoutMode: 'fitRows',
    fitRows: {
        gutter: 20
      }
    });

    $('.detail-filter ul li').click(function(e){
        e.preventDefault();
        $('.detail-filter ul li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    

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