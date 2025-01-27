function update_cookies() {
    text = '';
    texts = document.querySelectorAll('p');
    for (elem of texts) {
        text += elem.textContent + ',';
    }
    let cookies = 'text= ' + text + '; expires=Thu, 01 Jan 2026 00:00:00 GMT';
    document.cookie = cookies;
}

function get_cookies() {
    texts = document.cookie;
    art = document.querySelector('article');
    art.innerHTML = '\n';
    texts = texts.split(',');
    texts[0] = texts[0].replace('text=', '');
    for (text of texts) {
        art.innerHTML += '<p>' + text + '</p>\n';
    }
}

setTimeout(get_cookies, 0);
setInterval(update_cookies, 5000);