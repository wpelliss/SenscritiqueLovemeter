window.onload = function () {
	if(window.location.hostname == "www.senscritique.com")
	{
		var url = window.location.pathname.split("/");
		
		if (url.length == 4)
		{			
			var trueParam = [
				"ratingCount",		// Nombre d'avis
				"datePublished",	// Date de publication
				"ratingValue",		// Note générale
				"genre"				// Genres de l'oeuvre
			]
			
			var list = [];
			
			var x = document.getElementsByTagName("META");
			var txt = "";
			var i;
			for (i = 0; i < x.length; i++) {
				if (x[i].getAttribute("itemprop") != undefined
					&& trueParam.indexOf(x[i].getAttribute("itemprop")) >= 0)
					list.push({ itemprop: x[i].getAttribute("itemprop"), values: x[i].content});
			}
			var x = document.getElementsByTagName("SPAN");
			var txt = "";
			var i;
			for (i = 0; i < x.length; i++) {
				if (x[i].getAttribute("itemprop") != undefined
					&& trueParam.indexOf(x[i].getAttribute("itemprop")) >= 0)
					list.push({ itemprop: x[i].getAttribute("itemprop"), values: x[i].innerHTML});
			}
			console.log(list);
		}
		else if (url.length == 5)
		{
			var list = [];
			
			var x = document.getElementsByTagName("META");
			var txt = "";
			var i;
			for (i = 0; i < x.length; i++) {
				if (x[i].getAttribute("itemprop") != undefined
					&& trueParam.indexOf(x[i].getAttribute("itemprop")) >= 0)
					list.push({ itemprop: x[i].getAttribute("itemprop"), values: x[i].content});
			}
			var x = document.getElementsByTagName("SPAN");
			var txt = "";
			var i;
			for (i = 0; i < x.length; i++) {
				if (x[i].getAttribute("itemprop") != undefined
					&& trueParam.indexOf(x[i].getAttribute("itemprop")) >= 0)
					list.push({ itemprop: x[i].getAttribute("itemprop"), values: x[i].innerHTML});
			}
			console.log(list);
		}
	}
}

function postToDb(url)
{
	var cat = url[1];
	var name = url[2];
	var id = url[3];
	var url = "";
	var req = new XMLHttpRequest();
	req.addEventListener('readystatechange', function (evt) {});
	var finalUrl = "https://pellissard.com/testDB.php?cat=" + cat + "&name=" + name + "&id=" + id + "";
	req.open('GET', finalUrl, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.send('url=' + encodeURIComponent(finalUrl));
}