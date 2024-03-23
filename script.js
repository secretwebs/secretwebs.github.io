documento.querySelector('h1').addEventListener('click', () => {
    document.body.style.background = 'white';
});
window.onload = function() {
    var container = document.getElementById('container-de-publicaciones');
    var posts = Array.prototype.slice.call(container.getElementsByClassName('post'));

    posts.sort(function(a, b) {
        return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
    });

    posts.forEach(function(post) {
        container.appendChild(post);
    });
};
