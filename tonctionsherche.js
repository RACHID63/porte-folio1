// galerie.js  recherche images mots-clés

document.addEventListener('DOMContentLoaded', function() {
    fetch('Asset/layout/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            fetch('Asset/layout/footer.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('footer').innerHTML = data;
                    document.getElementById('myForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                        var keyword = document.getElementById('mySearch').value.toLowerCase();
                        var galleries = document.getElementsByClassName('gallery');
                        for (var i = 0; i < galleries.length; i++) {
                            galleries[i].style.display = 'none';
                        }
                        document.getElementById('all-gallery-button').classList.add('active');
                        var allGallery = document.getElementById('all-gallery');
                        allGallery.innerHTML = '';
                        var anchors = document.querySelectorAll('a[data-title]');
                        for (var i = 0; i < anchors.length; i++) {
                            var title = anchors[i].getAttribute('data-title').toLowerCase();
                            if (title.includes(keyword)) {
                                var clone = anchors[i].cloneNode(true);
                                clone.style.display = 'block';
                                var img = clone.querySelector('.img-fluid');
                                img.style.maxWidth = '30%';
                                allGallery.appendChild(clone);
                            }
                        }
                        allGallery.style.display = 'block';
                    });
                });
        });
});
