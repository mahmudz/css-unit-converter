var emsInput = $('ems').val();
var test = document.getElementById("px").value;
var pixels = "px";
var ems = "em";
var points = "pt";
var percent = "%";


function convert(){
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	var vwInput = document.getElementById("vw").value;
	var vhInput = document.getElementById("vh").value;

	if (pxInput !== "") {
		
		emsInput = pxInput/baseInput;
		var roundEms = emsInput.toFixed(2);
		document.getElementById("ems").value = roundEms;

		ptInput = pxInput*0.75;
		var roundPts = ptInput.toFixed(0);
		document.getElementById("pts").value = roundPts;

		var perVal = emsInput*100;
		var perValEms = perVal.toFixed(0);
		document.getElementById("perc").value = perValEms;

		document.getElementById("pc").value = convertUnit('px', 'pc', pxInput);
		document.getElementById("vw").value = pixelToVW(pxInput);
		document.getElementById("vh").value = pixelToVH(pxInput);

		pxInput = emsInput*16;

		$('#preview').css("font-size", pxInput);
		color();

	} else {
		reset();
	}
}

function convertEm(){
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	if (emInput !== "") {
		pxInput = emInput*baseInput;
		newPxVal = pxInput.toFixed(0);
		document.getElementById("px").value = newPxVal;

		var perVal = emInput*100;
		var perValEms = perVal.toFixed(0);
		document.getElementById("perc").value = perValEms;

		ptInput = emInput*12;
		var roundPts = ptInput.toFixed(0);
		document.getElementById("pts").value = roundPts;

		document.getElementById("pc").value = convertUnit('em', 'pc', emInput);
		document.getElementById("vw").value = pixelToVW(convertUnit('em', 'px', emInput));
		document.getElementById("vh").value = pixelToVH(convertUnit('em', 'px', emInput));

		$('#preview').css("font-size", pxInput);
		color();

	} else {
		reset();
	}
}

function convertPt(){
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	if (ptInput !== "") {

		pxInput = ptInput/0.75;
		newPxVal = pxInput.toFixed(0);
		document.getElementById("px").value = newPxVal;

		emInput = ptInput/12;
		var roundEms = emInput.toFixed(2);
		document.getElementById("ems").value = roundEms;

		var perVal = ptInput*8.333;
		var perValEms = perVal.toFixed(0);
		document.getElementById("perc").value = perValEms;

		document.getElementById("pc").value = convertUnit('pt', 'pc', ptInput);
		document.getElementById("vw").value = pixelToVW(convertUnit('pt', 'px', ptInput));
		document.getElementById("vh").value = pixelToVH(convertUnit('pt', 'px', ptInput));


		$('#preview').css("font-size", pxInput);
		color();

	} else {
		reset();
	}
}

function convertPer(){
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	if (perInput !== "") {
		
		pxInput = perInput/6.25;
		document.getElementById("px").value = pxInput;

		emInput = perInput/100;
		var roundEms = emInput.toFixed(2);
		document.getElementById("ems").value = roundEms;

		ptInput = perInput/8.333;
		var roundPts = ptInput.toFixed(0);
		document.getElementById("pts").value = roundPts;

		document.getElementById("pc").value = convertUnit('%', 'pc', perInput);
		document.getElementById("vw").value = pixelToVW(convertUnit('%', 'px', perInput));
		document.getElementById("vh").value = pixelToVH(convertUnit('%', 'px', perInput));


		$('#preview').css("font-size", pxInput);
		color();

	} else {
		reset();
	}
}

function reset(){
	document.getElementById("px").value = "";
	document.getElementById("px").style.color = "#ccc";
	document.getElementById("ems").value = "";
	document.getElementById("ems").style.color = "#ccc";
	document.getElementById("pts").value = "";
	document.getElementById("pts").style.color = "#ccc";
	document.getElementById("perc").value = "";
	document.getElementById("perc").style.color = "#ccc";
	document.getElementById("pc").value = "";
	document.getElementById("pc").style.color = "#ccc";
	document.getElementById("vw").value = "";
	document.getElementById("vw").style.color = "#ccc";
	document.getElementById("vh").value = "";
	document.getElementById("vh").style.color = "#ccc";
	$('#preview').css("font-size", "16");
}

function color(){
	document.getElementById("px").style.color = "#47D0BD";
	document.getElementById("ems").style.color = "#47D0BD";
	document.getElementById("pts").style.color = "#47D0BD";
	document.getElementById("perc").style.color = "#47D0BD";
	document.getElementById("pc").style.color = "#47D0BD";
	document.getElementById("vw").style.color = "#47D0BD";
	document.getElementById("vh").style.color = "#47D0BD";
}


function convertVw() {
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	var vwInput = document.getElementById("vw").value;
	var vhInput = document.getElementById("vh").value;

	if (vwInput !== "") {
		document.getElementById("px").value = vwToPixel(vwInput);
		document.getElementById("ems").value = convertUnit('px', 'em', vwToPixel(vwInput));
		document.getElementById("pts").value = convertUnit('px', 'pt', vwToPixel(vwInput));
		document.getElementById("perc").value = convertUnit('px', '%', vwToPixel(vwInput));
		document.getElementById("pc").value = convertUnit('px', 'pc', vwToPixel(vwInput));
		document.getElementById("vh").value = pixelToVH(vwToPixel(vwInput));

		$('#preview').css("font-size", vwToPixel(vwInput));
		color();
	}else{
		reset();
	}
}

function convertVh() {
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	var vwInput = document.getElementById("vw").value;
	var vhInput = document.getElementById("vh").value;

	if (vhInput !== "") {
		document.getElementById("px").value = vhToPixel(vhInput);
		document.getElementById("ems").value = convertUnit('px', 'em', vhToPixel(vhInput));
		document.getElementById("pts").value = convertUnit('px', 'pt', vhToPixel(vhInput));
		document.getElementById("perc").value = convertUnit('px', '%', vhToPixel(vhInput));
		document.getElementById("pc").value = convertUnit('px', 'pc', vhToPixel(vhInput));
		document.getElementById("vw").value = pixelToVW(vhToPixel(vhInput));

		$('#preview').css("font-size", vhToPixel(vhInput));
		color();
	}else{
		reset();
	}
}

function convertPc() {
	var ptInput = document.getElementById("pts").value;
	var pxInput = document.getElementById("px").value;
	var emInput = document.getElementById("ems").value;
	var perInput = document.getElementById("perc").value;
	var baseInput = document.getElementById("base").value;

	var vwInput = document.getElementById("vw").value;
	var vhInput = document.getElementById("vh").value;
	var pcInput = document.getElementById("pc").value;

	if (pcInput !== "") {
		document.getElementById("px").value = convertUnit('pc', 'px', pcInput);
		document.getElementById("perc").value = convertUnit('pc', '%', pcInput);
		document.getElementById("pts").value = convertUnit('pc', 'pt', pcInput);
		document.getElementById("ems").value = convertUnit('pc', 'em', pcInput);
		document.getElementById("vw").value = pixelToVW(convertUnit('pc', 'px', pcInput));
		document.getElementById("vh").value = pixelToVH(convertUnit('pc', 'px', pcInput));

		$('#preview').css("font-size", convertUnit('pc', 'px', pcInput));
		color();
	}else{
		reset();
	}
}

