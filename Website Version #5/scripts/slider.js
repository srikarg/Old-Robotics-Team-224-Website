$(function() {
    var button = $('button.next');
    var images = $('ul.m_images');
    var firstPic = images.find('li:first-child');
    var current = firstPic;
	
    button.click(function() {
        current.fadeOut(function() {
            current = current.next();
            current = !current.html() ? firstPic : current;
            current.fadeIn();
        });
    });
});