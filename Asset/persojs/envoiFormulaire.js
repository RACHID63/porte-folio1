// formulaire envoi message

document.addEventListener("DOMContentLoaded", function() {
  $('form').on('submit', function(event) {
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
          type: 'POST',
          url: 'process-form.php',
          data: formData,
          success: function(response) {
              // Afficher le message de réponse
              alert(response);
          },
          error: function() {
              // Gérer l'erreur
              alert("Une erreur s'est produite");
          }
      });
  });
});


