export function animateScrollTop(
	el: HTMLElement,
	targetTop: number,
	durationMs: number,
	complete: () => void = () => {}
) {
	const startScrollTop = el.scrollTop;
	const distance = targetTop - startScrollTop;
	const framesPerSecond = 50;
	const timeout = 1000 / framesPerSecond;
	const intervals = durationMs / timeout;
	const step = distance / intervals;
	let start = Date.now();
	const timer = setInterval(() => {
		const timePassed = Date.now() - start;
		if (timePassed >= durationMs) {
			clearInterval(timer);
			if (el.scrollTop !== targetTop) {
				el.scrollTop = targetTop;
			}
			complete();
		} else {
			el.scrollTop += step;
		}
	}, timeout);
}
