function pixelToVH(value) {
    return (100 * value) / window.innerHeight;
}

function pixelToVW(value) {
    return (100 * value) / window.innerWidth;
}

function pixelToEms(value) {
	return (pxInput/baseInput).toFixed(2);
}

function vhToPixel(value) {
    return (window.innerHeight * value) / 100;
}

function vwToPixel(value) {
    return ((window.innerWidth * value) / 100);
}

function vhToEms(value) {
	return pixelToEms(vhToPixel(vhToPixel));
}