$(function(){
    //prev
    $('.btn-prev').click(function(){
      history.back();
    });

    //fav
    $('.btn-fav').click(function(){
        $(this).toggleClass('favchk')
    });

    //add
    $('.btn-add').click(function(){
        $(this).toggleClass('addchk');
        $('.innertext').text($('.innertext').text() == 'ADD' ? '✓' : 'ADD'); 
    });

    //syrup, topping
    $('.btn-more').click(function(){
        $(this).parent().siblings('.opt-list').slideToggle(300);
        $(this).toggleClass('btn-more-after');
    });

    $("input[type=radio]").click(function() {
        var previousValue = $(this).data('storedValue');
        //라디오버튼 토글
        if (previousValue) {
          $(this).prop('checked', !previousValue);
          $(this).data('storedValue', !previousValue);
        } 
        else{
          $(this).data('storedValue', true);
          $("input[type=radio]:not(:checked)").data("storedValue", false);
        }
      });

    //상세영양정보
    $('.btn-more-2').click(function(){
        $('.nutrition-info').fadeIn();
    });
    $('.nutrition-info').click(function(evt){
        var box = $(evt.target).hasClass('nutrition-info');
        if(box){
            $('.nutrition-info').fadeOut();
        }
    });

    $('.nutrition-info').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
    });

    //추천메뉴 add
    $('.menulist li .txt-box .btn-add').click(function(){
        $(this).toggleClass('added')
    });
   });