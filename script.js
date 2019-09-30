// this functions creates a multipage functionality
function openModule(page) {
		var modules = ['home', 'about', 'scores', 'other'];
		modules.forEach(hideModules);
			function hideModules(value){
				x = document.getElementById(value);
				x.style.display = "none";
			}
		var module = document.getElementById(page);
		module.style.display = "block";
}

// creates clickable card for square or rectangular video modules
function makeCard(aspect, title, vimeo) {
	var html = '<div class="container_' + aspect + '">' +
		'<a href="' + vimeo + '" target="_blank">' +
		'<img class="image" src="' + title + '-' + aspect + '.png">' +
		'<div class="overlay"><div class="text">' + title + '</div></div></a></div>';	
	return html;
}

// creates flexible html container
function miscHtml(html) {
	var code = '<div class="home">' + html + '</div>';
	return code;
}
