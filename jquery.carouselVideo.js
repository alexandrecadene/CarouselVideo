(function($)
{
	$.fn.carouselVideo=function(options)
	{

		var defauts =
		{
			"miniature" : "",
			"video" : ""
		}

		var parametres=$.extend(defauts, options);

		/*this.each(function()
		{

			alert(window.location.hostname);
			
			var video;
		    var titleVideo;
		    var txtVideo;

		    $('.tmpl.videoSmall a').click(function () {

		        video = $(this).data('id');
		        video = 'http://video.epita.fr/player-html5-' + video + '.html';
		        $('.videoBig iframe').attr('src', video);

		        titleVideo = $(this).parent().next().text();
		        $('.videoBig .txt h3').text(titleVideo);

		        textVideo = $(this).parent().next().next().children().clone();
		        console.log(textVideo);
		        $('.videoBig .txt .videoText').html(textVideo);

		    });

		});

		return this;*/
	}
			
			var video;
		    var titleVideo;
		    var txtVideo;
		    var url = window.location.hostname;
		    var urlVideo = url.replace(/www/i, "video");

		    $(parametres.miniature + ' a').click(function () {

		        video = $(this).data('id');
		        video = 'http://' + urlVideo + '/player-html5-' + video + '.html';
		        $(parametres.video + ' iframe').attr('src', video);

		        titleVideo = $(this).parent().next().text();
		        $(parametres.video + ' h3').text(titleVideo);

		        textVideo = $(this).parent().next().next().children().clone();
		        $(parametres.video + ' p').html(textVideo);

		    });
})(jQuery);