/* NAV-JS.JS DOCUMENT */
$(window).scroll(function()
{
	if ($(document).scrollTop() > 50)
	{
		$('nav').addClass('shrink');
		$('hr').css('display','none');
	}
	else
	{
		$('nav').removeClass('shrink');
		$('hr').css('display','block');
	}
}); 