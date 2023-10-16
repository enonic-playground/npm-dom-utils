export function isHTMLElement(el: unknown): el is HTMLElement {
    if (!['object', 'function'].includes(typeof HTMLElement)) {
        throw new Error('Your browser does not support HTMLElement. Please use a newer browser.');
    }
    return el instanceof HTMLElement;
}
