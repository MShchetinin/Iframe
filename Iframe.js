function Iframe (){
	
}

Iframe.prototype.createIframe = function (){
	var getIframe = document.querySelector('.val-iframe-streams');
	//console.log ('Переменная getIframe: ' + getIframe);
	var attribute = getIframe.getAttribute('data-src');
	//console.log ('Переменная attribute: ' + attribute);
	var srcIframe = attribute.split (',');
	//console.log (srcIframe[0]);
	var str = '<div class="val-outer-frame">' +
					'<span class="val-ico-online">' +
						'<i>Online</i>' +
					'</span>' +
					'<iframe width="100%" height="270px"></iframe>' +
			  '</div>';
	getIframe.insertAdjacentHTML ('beforeEnd', str);
	getIframe.insertAdjacentHTML ('beforeEnd', str);
	var iframe = document.querySelectorAll('iframe');
	iframe[0].classList.add ('first');
	iframe[1].classList.add ('second');
	//console.log (iframe2);
	var first = document.querySelector('.first');
	var second = document.querySelector('.second');
	first.setAttribute('src', srcIframe[0]);
	second.setAttribute('src', srcIframe[1]);
}