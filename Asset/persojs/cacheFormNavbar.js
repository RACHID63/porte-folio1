document.addEventListener('DOMContentLoaded', function() {
    // Vérifiez si la page actuelle est l'index
    if (window.location.pathname.includes('index.html')) {
        // Si oui, ajoutez la classe "cacheForme" à la form
        document.querySelector('.form-inline').classList.add('cacheForme');
    }
});
