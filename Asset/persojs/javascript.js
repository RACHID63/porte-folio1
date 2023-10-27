// import $ from 'node_modules/jquery/jquery.min.js';

$(function(){
    $('#navbar').load('Asset/layout/navbar.html');
    $('#footer').load('Asset/layout/footer.html');
});


$(window).on('load', function () {
    var hash = window.location.hash.slice(1); // Utilisez slice au lieu de substr
    if (hash) {
        // Utilisez trigger('click') au lieu de click()
        $('.gallery-button[data-gallery="' + hash + '"]').trigger('click');
    }

    $('.gallery-button').on('click', function (event) {
        event.stopPropagation();
        var gallery = $(this).data('gallery');
        $('.gallery').hide();
        $('#' + gallery + '-gallery').show();
    });
    
    $('.gallery-button').on('click', function(event){
        event.stopPropagation();
        $('.gallery-button').removeClass('btn-active');
        $(this).addClass('btn-active');
    });
    
});

// cloner toutes les images 
// Sélectionnez le bouton 'Toutes les images'
let allButton = document.querySelector('button[data-gallery="all"]');

// Ajoutez un écouteur d'événements au bouton 'Tout'
allButton.addEventListener('click', function() {
    // Sélectionnez la galerie 'Tout'
    let allGallery = document.querySelector('#all-gallery');
    
    // Videz la galerie 'Tout'
    allGallery.innerHTML = '';
    
    // Sélectionnez toutes les images de toutes les galeries
    let allImages = document.querySelectorAll('.image-container');
    
    // Dupliquez chaque image et ajoutez-la à la galerie 'Tout'
    allImages.forEach(function(image) {
        let clonedImage = image.cloneNode(true);
        allGallery.appendChild(clonedImage);
    });
});


// Sélectionnez l'élément qui contient l'animation moveLeft
// var bannerImg = document.querySelector('.banner_img');

// // Ajoutez un auditeur d'événements pour l'événement d'animation 'animationend'
// bannerImg.addEventListener('animationend', function(event) {
//     // Vérifiez si l'animation qui s'est terminée est 'moveLeft'
//     if (event.animationName === 'moveLeft') {
//         // L'animation moveLeft s'est terminée, ajoutez la classe carousel-control-next
//         var carouselControlNext = document.querySelector('.carousel-control-next');
//         element.classList.add('apparaisse');
//         element.classList.add('apparaisse').style.display = 'bloc';
//     }
// });


// galerie.js
$(function(){
    $('#navbar').load('Asset/layout/navbar.html', function(){
        // Le contenu de la navbar a été chargé
        $('#footer').load('Asset/layout/footer.html', function(){
            // Le contenu du footer a été chargé

            // Votre script jQuery pour la recherche de mots-clés
            $('#myForm').submit(function(e){
                e.preventDefault(); 
                var keyword = $('#mySearch').val().toLowerCase(); 

                $('a[data-title]').each(function(){
                    var title = $(this).data('title').toLowerCase(); 

                    if(title.includes(keyword)){
                        $(this).show(); 
                    } else {
                        $(this).hide(); 
                    }
                });
            });

            // Autres scripts ou actions que vous souhaitez ajouter

        });
    });
});





























