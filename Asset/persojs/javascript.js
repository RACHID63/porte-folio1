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



// window.onload = function() {
//     var navbar = document.getElementById('navbar');
//     if (window.location.href.indexOf('index') > -1) {
//         navbar.style.background = 'blue';
//     } else if (window.location.href.indexOf('galerie') > -1) {
//         navbar.style.background = 'green';
//     }
// }
// window.onload = function() {
//     var navbar = document.getElementById('navbar');
//     if (window.location.href.indexOf('index') > -1) {
//         navbar.style.background = 'blue';
//     } else if (window.location.href.indexOf('galerie') > -1) {
//         navbar.style.background = 'green';
//     }
// }




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

$(function() {
    // Fonction pour effectuer la recherche
    function rechercherMotCle(motCle) {
        // Convertir le mot-clé en minuscules pour une recherche insensible à la casse
        var motCleMinuscules = motCle.toLowerCase();

        $(".image-container").hide(); // Masquer toutes les images

        // Parcourir tous les éléments .image-container
        $(".image-container").each(function() {
            var imageContainer = $(this);

            // Obtenir l'attribut alt et le convertir en minuscules
            var dataTitle = imageContainer.attr("alt").toLowerCase();

            // Vérifier si alt contient le mot-clé
            if (dataTitle.includes(motCleMinuscules)) {
                // Si oui, afficher l'élément
                imageContainer.show();
            }
        });
    }

    // Écouter l'événement de soumission du formulaire de recherche
    $("#myForm").on("submit", function(e) {
        e.preventDefault();
        var motCle = $("#myForm input[type='search']").val(); // Récupérer le mot-clé entré
        console.log(motCle);
        rechercherMotCle(motCle); // Appeler la fonction de recherche
    });
});


























