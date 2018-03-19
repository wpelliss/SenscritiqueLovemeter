window.onload = function () {
	if(window.location.hostname == "www.senscritique.com")
	{
		alert(window.location.pathname.split("/")[1]);
		if(typeof document.getElementsByClassName("pvi-scrating-value")[0] !== "undefined")
			var Note = parseFloat(document.getElementsByClassName("pvi-scrating-value")[0].innerHTML);
		else
			var Note = "?";
		if(Note != "?")
		{
			if (Note <= 6.0143)
				Note = 1;
			else if (Note <= 6.1556)
				Note = 1 + (Note - 6.0143) / (6.1556 - 6.0143);
			else if (Note <= 6.2269)
				Note = 2 + (Note - 6.1556) / (6.2269 - 6.1556);
			else if (Note <= 6.4381)
				Note = 3 + (Note - 6.2269) / (6.4381 - 6.2269);
			else if (Note <= 6.5877)
				Note = 4 + (Note - 6.4381) / (6.5877 - 6.4381);
			else if (Note <= 6.7868)
				Note = 5 + (Note - 6.5877) / (6.7868 - 6.5877);
			else if (Note <= 7.0294)
				Note = 6 + (Note - 6.7868) / (7.0294 - 6.7868);
			else if (Note <= 7.3737)
				Note = 7 + (Note - 7.0294) / (7.3737 - 7.0294);
			else if (Note <= 7.6597)
				Note = 8 + (Note - 7.3737) / (7.6597 - 7.3737);
			else if (Note <= 7.7000)
				Note = 9 + (Note - 7.6597) / (7.7000 - 7.6597);
			else
				Note = 10;
		}
		
		if(typeof document.getElementsByClassName("pvi-scrating-value")[1] !== "undefined" && Note != "?")
		{
			var Note2 = parseFloat(document.getElementsByClassName("pvi-scrating-value")[1].innerHTML);
			if (Note2 <= 6.6167)
				Note2 = 1;
			else if (Note2 <= 6.8731)
				Note2 = 1 + (Note2 - 6.6167) / (6.8731 - 6.6167);
			else if (Note2 <= 7.0950)
				Note2 = 2 + (Note2 - 6.8731) / (7.0950 - 6.8731);
			else if (Note2 <= 7.2824)
				Note2 = 3 + (Note2 - 7.0950) / (7.2824 - 7.0950);
			else if (Note2 <= 7.4353)
				Note2 = 4 + (Note2 - 7.2824) / (7.4353 - 7.2824);
			else if (Note2 <= 7.6302)
				Note2 = 5 + (Note2 - 7.4353) / (7.6302 - 7.4353);
			else if (Note2 <= 7.8917)
				Note2 = 6 + (Note2 - 7.6302) / (7.8917 - 7.6302);
			else if (Note2 <= 8.2291)
				Note2 = 7 + (Note2 - 7.8917) / (8.2291 - 7.8917);
			else if (Note2 <= 8.6523)
				Note2 = 8 + (Note2 - 8.2291) / (8.6523 - 8.2291);
			else if (Note2 <= 8.9947)
				Note2 = 9 + (Note2 - 8.6523) / (8.9947 - 8.6523);
			else
				Note2 = 10;
			var Note = (Note + Note2) / 2
		}
		if(Note != "?")
		{
			var Note = Math.round(Note * 10) / 10;
			document.getElementsByClassName("pvi-scrating-value")[0].innerHTML = document.getElementsByClassName("pvi-scrating-value")[0].innerHTML + "<a style=\"color:#F53191\">  " + Note + "</a>";
		}
	}
}