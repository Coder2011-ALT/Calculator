function calculate() {
	var area = Number(
		document.getElementById("length").value *
			document.getElementById("length").value
	);
	var perimeter = Number(document.getElementById("length").value * 4);
	document.getElementById("Perimeter").innerHTML = perimeter;
	document.getElementById("Area").innerHTML = area;
}
