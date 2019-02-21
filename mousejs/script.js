(function () {
	document.onmousemove = handleMouseMove;

	function handleMouseMove(event) {
		var dot, eventDoc, doc, body, pageX, pageY;

		event = event || window.event; // IE-ism

		// If pageX/Y aren't available and clientX/Y are,
		// calculate pageX/Y - logic taken from jQuery.
		// (This is to support old IE)
		if (event.pageX == null && event.clientX != null) {
			eventDoc = (event.target && event.target.ownerDocument) || document;
			doc = eventDoc.documentElement;
			body = eventDoc.body;

			event.pageX = event.clientX +
				(doc && doc.scrollLeft || body && body.scrollLeft || 0) -
				(doc && doc.clientLeft || body && body.clientLeft || 0);
			event.pageY = event.clientY +
				(doc && doc.scrollTop || body && body.scrollTop || 0) -
				(doc && doc.clientTop || body && body.clientTop || 0);
		}
		var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		var xpercent = event.pageX / vw;
		var ypercent = event.pageY / vh;

		var xoffcenter = xpercent - 0.5;
		var yoffcenter = ypercent - 0.5;
		var scale = 500;
		document.getElementsByClassName("mousejs")[0].style.transform = "translate(" + xoffcenter * scale + "px, " + yoffcenter * scale + "px)";
	}
})();
