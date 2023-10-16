export function show(
	el: HTMLElement,
	display: CSSStyleDeclaration['display'] = 'block'
) {
	el.style.display = display;
	return el;
}
