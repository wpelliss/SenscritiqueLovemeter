window.onload = function () {
	if(window.location.hostname == "www.senscritique.com")
	{
		var Total = 1;
		var precision = 1;
		var Type = window.location.pathname.split("/")[1];
		if(typeof document.getElementsByClassName("pvi-scrating-value")[0] !== "undefined")
			var NoteGen = parseFloat(document.getElementsByClassName("pvi-scrating-value")[0].innerHTML);
		if(typeof document.getElementsByClassName("pvi-scrating-value")[1] !== "undefined")
			var NoteAmi = parseFloat(document.getElementsByClassName("pvi-scrating-value")[1].innerHTML);
		if(document.getElementsByTagName("time")[0].dateTime.substring(0,4))
			var Dat = document.getElementsByTagName("time")[0].dateTime.substring(0,4);
		if(Dat) precision+=3;
		if(NoteGen) precision+=3;
		if(NoteAmi) precision+=3;
		
		if (Type == "film"){
			if(Dat) {if(Dat > 2002) Total+=3; else if(Dat >= 2001) Total++;};
			if(NoteGen) {if(NoteGen > 6.2) Total+=3; else if(NoteGen >= 5.7) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.2) Total+=3; else if(NoteAmi >= 6.5) Total++;};	
		}
		if (Type == "serie"){
			if(Dat) {if(Dat > 2007) Total+=3; else if(Dat >= 2007) Total++;};
			if(NoteGen) {if(NoteGen > 7.0) Total+=3; else if(NoteGen >= 6.2) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.5) Total+=3; else if(NoteAmi >= 6.1) Total++;};	
		}
		if (Type == "jeuvideo"){
			if(Dat) {if(Dat > 2009) Total+=3; else if(Dat >= 2009) Total++;};
			if(NoteGen) {if(NoteGen > 7.0) Total+=3; else if(NoteGen >= 6.5) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.9) Total+=3; else if(NoteAmi >= 7.4) Total++;};	
		}
		if (Type == "livre"){
			if(Dat) {if(Dat < 1924) Total+=3; else if(Dat <= 1927) Total++;};
			if(NoteGen) {if(NoteGen < 7.6) Total+=3; else if(NoteGen <= 8.1) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.5) Total+=3; else if(NoteAmi >= 7.3) Total++;};	
		}
		if (Type == "bd"){
			if(Dat) {if(Dat > 1995) Total+=3; else if(Dat >= 1991) Total++;};
			if(NoteGen) {if(NoteGen > 6.8) Total+=3; else if(NoteGen >= 6.4) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.2) Total+=3; else if(NoteAmi >= 6.9) Total++;};	
		}
		if (Type == "album" || Type == "morceau"){
			if(Dat) {if(Dat > 2001) Total+=3; else if(Dat >= 1997) Total++;};
			if(NoteGen) {if(NoteGen < 7.5) Total+=3; else if(NoteGen <= 7.6) Total++;};
			if(NoteAmi) {if(NoteAmi > 7.2) Total+=3; else if(NoteAmi >= 6.9) Total++;};	
		}
		Total = Total / precision * 10;
		document.getElementsByClassName("pvi-scrating-value")[0].innerHTML = document.getElementsByClassName("pvi-scrating-value")[0].innerHTML + "<a style=\"color:#F53191\">  " + Total + "("+ --precision * 10 + "%)</a>";
	}
}