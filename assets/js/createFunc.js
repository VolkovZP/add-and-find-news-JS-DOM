const body = document.querySelector('body');
/**
 * 
 * @param {string} type 
 * @param {object} param1 
 * @param  {...any} children 
 * @returns 
 */
function createElement(type, { className = [], handlers = {}, atributes = {} }, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...className);

    for (let [type, listener] of Object.entries(handlers)) {
        elem.addEventListener(type, listener);
    }
    for (let [name, value] of Object.entries(atributes)) {
        elem.setAttribute(name, value);
    }
    elem.append(...children);
    return elem;
}
/**
 * 
 * @param {object} item 
 * @returns {elemnt}
 */
function createArticleElement(item) {
    return createElement('article', { className: ['newsContainer'] },
        createElement('div', { className: ['articleHeaderContainer'] },
            createElement('h3', { className: ['articleTitle'] }, item['title']),
            createElement('span', { className: ['articleDate'] }, item['date'])
        ),
        createElement('p', { className: ['articleNews'] }, item['desription'])
    )
}