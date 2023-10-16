const server = Bun.serve({
	port: 3000,
	fetch(request) {
		const url = new URL(request.url);
		console.debug("Request", url.pathname);
		if (url.pathname === "/") return new Response(`<html>
<head>
	<script type="module">
		import {
			animateScrollTop,
			elementExists,
			findElements,
			findHTMLElements,
			first,
			getData,
			getInnerHeight,
			getOffset,
			getOffsetParent,
			getOuterHeightWithMargin,
			getOuterWidthWithMargin,
			getPosition,
			isHTMLElement,
			isVisible,
			selectHTMLElement,
			setData,
			setInnerHeight,
			setOffset,
			show
		} from './index.js';
		globalThis.animateScrollTop = animateScrollTop;
		globalThis.first = first;
		globalThis.getInnerHeight = getInnerHeight;
		globalThis.getOffset = getOffset;
		globalThis.getOffsetParent = getOffsetParent;
		globalThis.isVisible = isVisible;
		globalThis.getOuterHeightWithMargin = getOuterHeightWithMargin;
		globalThis.getOuterWidthWithMargin = getOuterWidthWithMargin;
		globalThis.getPosition = getPosition;
		globalThis.setInnerHeight = setInnerHeight;
		globalThis.setOffset = setOffset;

		const el = first('#myId');
		const el2 = first('#myId2');
		const el3 = first('#child');

		console.debug('elementExists', elementExists(el));
		console.debug('elementExists', elementExists(first('#nonExistingId')));

		console.debug('findElements', findElements('#myId'));
		console.debug('findHTMLElements', findHTMLElements('#myId'));

		console.debug('first', el);
		console.debug('getData', getData(el, 'test'));
		console.debug('getInnerHeight', getInnerHeight(el, 'test'));
		console.debug('getOffset', getOffset(el, 'test'));
		console.debug('getOffsetParent', getOffsetParent(el, 'test'));
		console.debug('getOuterHeightWithMargin', getOuterHeightWithMargin(el, 'test'));
		console.debug('getOuterWidthWithMargin', getOuterWidthWithMargin(el, 'test'));
		console.debug('getPosition', getPosition(el, 'test'));
		console.debug('isHTMLElement', isHTMLElement(el, 'test'));

		console.debug('isVisible', isVisible(el));
		console.debug('isVisible', isVisible(el2));

		console.debug('selectHTMLElement', selectHTMLElement('#myId'));
		setData(el, 'test', 'changed');
		console.debug('after setData', getData(el, 'test'));

		setInnerHeight(el, '110px');

		setOffset(el3, {
			top: 100,
			left: 100,
		});

		show(el2);
		console.debug('isVisible', isVisible(el2));

		</script>
</head>
<body>
	<div
		data-test="test"
		id="myId"
		onClick="animateScrollTop(this, 1000, 500, function () { console.log('done'); })"
		style="height: 100px; margin: 100px; overflow: scroll; width: 100px;"
	>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	</div>

	<div
	id="myId2"
	style="display: none"
>display: none</div>

	<div id="parent" style="border:1px solid red; height: 500px; position: absolute; width: 500px;">
		position: absolute
		<div
			id="child"
			style="border:1px solid blue; height: 100%; position: relative; width: 100%;"
		>position: relative</div>
	</div>

	<div id="block" style="display:block">display:block</div>
	<div id="none" style="display:none">display:none</div>
	<div id="hidden" style="visibility:hidden">visibility:hidden</div>
	<div id="opacity" style="opacity: 0">opacity: 0</div>
</body>
</html>`, {
			headers: {
				"Content-Type": "text/html",
			},
		});
		if (url.pathname === "/index.js") {
			return new Response(Bun.file("./build/index.js"));
		}
		return new Response("404!");
	},
});

console.log(`Listening on localhost:${server.port}`);
