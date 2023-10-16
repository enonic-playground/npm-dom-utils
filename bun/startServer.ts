const server = Bun.serve({
	port: 3000,
	fetch(request) {
		const url = new URL(request.url);
		console.debug("Request", url.pathname);
		if (url.pathname === "/") return new Response(`<html>
<head>
	<script type="module">
		import {animateScrollTop} from './index.js';
		globalThis.animateScrollTop = animateScrollTop;
	</script>
</head>
<body>
	<div
		id="myId" onClick="animateScrollTop(this, 1000, 500, function () { console.log('done'); })"
		style="border:1px solid red; width: 100px; height: 100px; overflow: scroll;"
	>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
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
