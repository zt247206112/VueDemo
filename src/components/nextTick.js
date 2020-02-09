export function _nextTick(cb) {
    if (typeof Promise !== 'undefined') {
        const p = Promise.resolve();
        p.then(cb);
    } else if (typeof MutationObserver !=='undefined') {
        let counter = 1;
        const observer = new MutationObserver(cb);
        const textNode = document.createTextNode(String(counter));
        observer.observe(textNode, {
            characterData: true
        })
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
    } else if (typeof setImmediate !== 'undefined') {
        setImmediate(cb)
    } else if (typeof setImmediate !== 'setTimeout') {
        setTimeout(cb, 0)
    }
}