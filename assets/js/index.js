'use strict';

body.append(createHeader(), createSection(data), createBtnAddNews());


function createHeader() {
    const header = createElement('header', { className: ['header'] },
        createElement('div', { className: ['headerContainer'] },
            createElement('h3', { className: ['headerTitle'] }, 'FreshNews'),
            createElement('form', {},
                createElement('input', {
                    className: ['headerSearch'],
                    atributes: {
                        'name': 'search',
                        'type': 'text',
                        'placeholder': 'Search an article',
                    },
                    handlers: {
                        'keyup': findTitleNews,
                    }
                })
            )
        )
    )
    return header
}

function createSection() {
    const section = createElement('section', {}, ...createArtice());
    return section;
}

function createArtice() {
    return data.map(item => createArticleElement(item))
}

function createBtnAddNews() {
    return createElement('div', { className: ['containerAddBtnForm'] },
        createElement('button', { className: ['addBtnForm', 'fas', 'fa-plus-circle'], handlers: { 'click': addFormNews } }))
}

function addFormNews() {
    document.querySelector('.containerAddBtnForm').remove()
    const addForm = createElement('form', { className: ['addNews'] },
        createElement('div', { className: ['addNewsContainer'] },
            createElement('input', { className: ['myTitle'], atributes: { 'placeholder': 'post title', 'type': 'text' } }),
            createElement('textarea', { className: ['myDesription'], atributes: { 'placeholder': 'post content...', 'cols': '30', 'rows': '10' } },)
        ),
        createElement('button', { className: ['btn', 'publish'], handlers: { 'click': addNews } }, 'publish'),
        createElement('button', { className: ['btn', 'cancel'] }, 'cancel'),

    )
    document.querySelector('section').prepend(addForm)
    return addForm;
}

function addNews(e) {
    e.preventDefault();
    const { target: { form } } = e
    const newNewsTitle = form.querySelector('.myTitle').value;
    const newNewsDesription = form.querySelector('.myDesription').value;
    const newDate = new Date().toLocaleDateString();

    const arr = {
        title: newNewsTitle,
        date: newDate,
        desription: newNewsDesription,
    }

    data.push(arr)

    if (!newNewsDesription || !newNewsTitle) return false
    document.querySelector('section').append(createArticleElement(arr))
    form.remove();
    body.append(createBtnAddNews())
}

function findTitleNews({ target: { value } }) {
    const article = document.querySelectorAll('.newsContainer');
    for (let art of article) {
        art.remove()
    }
    data.filter(item => {
        if (item['title'].toLowerCase().includes(value.toLowerCase())) data.filter(item => { if (item['title'].toLowerCase().includes(value.toLowerCase())) document.querySelector('section').append(createArticleElement(item)) })
}
