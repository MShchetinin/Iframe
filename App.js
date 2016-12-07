function App (){
	this.init();
}

//App.prototype = Object.create(Helper.prototype);
App.prototype = Object.create(Iframe.prototype);

App.prototype.init = function (){
	//new Slider ();
	//new Iframe ();
	console.log(this.createIframe());
	//console.log(this.setDates("2016-12-07 14:02:33", "eng"));
}



window.addEventListener ('DOMContentLoaded', function(){
	new App();
});