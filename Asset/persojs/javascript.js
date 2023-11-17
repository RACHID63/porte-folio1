
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

// galerie.js  recherche images mots-clés
$(function(){
    $('#navbar').load('Asset/layout/navbar.html', function(){
        // Le contenu de la navbar a été chargé
        $('#footer').load('Asset/layout/footer.html', function(){
            // Le contenu du footer a été chargé

            // Votre script jQuery pour la recherche de mots-clés
            $(document).on('submit', '#myForm', function(e){
                e.preventDefault(); 
                var keyword = $('#mySearch').val().toLowerCase(); 

                // Cache toutes les galeries
                $('.gallery').hide();

                // Active le bouton "all-gallery"
                $('#all-gallery-button').addClass('active');

                // Vide la galerie "all-gallery"
                $('#all-gallery').empty();

                $('a[data-title]').each(function(){
                    var title = $(this).data('title').toLowerCase(); 

                    if(title.includes(keyword)){
                        // Clone l'élément, modifie son CSS, et l'ajoute à "all-gallery"
                        var clone = $(this).clone().show();
                        clone.find('.img-fluid').css('max-width', '30%');
                        $('#all-gallery').append(clone);
                    }
                });

                // Affiche "all-gallery"
                $('#all-gallery').show();
            });

        });
    });
});

// affichage à partir du menu
$(function() {
    $('.gallery-button').on('click', function(event) {
        event.stopPropagation();
        var gallery = $(this).data('gallery');
        $('.gallery').hide();
        $('#' + gallery + '-gallery').show();

        $('.gallery-button').removeClass('btn-active');
        $(this).addClass('btn-active');
    });

    // Utilisez un élément parent pour attacher l'événement click
    $(document).on('click', '.dropdown-item', function (event) {
        event.stopPropagation();
        var gallery = $(this).closest('li').data('gallery');
        $('.gallery').hide();
        $('#' + gallery + '-gallery').show();
    });

    // De même pour cet événement click
    $(document).on('click', '.dropdown-item', function(event){
        event.stopPropagation();
        $('.dropdown-item').closest('li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
});

// Sélectionner tous les liens dans le navbar
var links = $(".navbar-nav li a");

// Ajouter un événement click sur chaque lien
links.on("click", function() {
  // Enlever la classe active aux autres liens
  links.removeClass("active");
  // Ajouter la classe active au lien cliqué
  $(this).addClass("active");
});

// bouton clignotant 3dgalerie

$(function(){
    setInterval(function(){
        $('#dGallery a.btn').toggleClass('btn-primary btn-danger');
    }, 2000); // Change la couleur toutes les secondes
});






// $(function(){
//     var isPrimary = true;
//     setInterval(function(){
//         if(isPrimary){
//             $('#dGallery .btn').removeClass('btn-primary').addClass('btn-danger');
//         } else {
//             $('#dGallery .btn').removeClass('btn-danger').addClass('btn-primary');
//         }
//         isPrimary = !isPrimary;
//     }, 2000); // Change la couleur toutes les secondes
// });
































