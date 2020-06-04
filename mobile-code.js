$(function(){
    var menuop = false
	$('#mbl-menu a').click(function(){
		if (!$(this).hasClass('active')){
		    $('#side-menu').addClass('active');
		    $('body').addClass('activate');
			/*$('#page-cvr').addClass('active');*/
			$('#page').addClass('active');
			$(this).addClass('active');
			menuop = true;
		}
	});
	$('#page').click(function(){
	    if (!menuop){
            $('body').removeClass('activate');
    	    $('#side-menu').removeClass('active');
    		$('#page').removeClass('active');
    		$('#mbl-menu a').removeClass('active');
	    }
	    menuop = false;
    });
	$('.opener').click(function(){
		if ($('.contact-box').hasClass('active')){
			$('.contact-box').removeClass('active');
		} else {
			$('.contact-box').addClass('active');
		}
	});
	$('.has-child .side-arrow').click(function(){
		if ($('.sub-menu').hasClass('expand')){
			$('.sub-menu').removeClass('expand');
			$(this).addClass('fa-caret-right');
			$(this).removeClass('fa-caret-down');
		} else {
			$('.sub-menu').addClass('expand');
			$(this).addClass('fa-caret-down');
			$(this).removeClass('fa-caret-right');
		}
	});
});
function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}
