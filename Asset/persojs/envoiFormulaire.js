// formulaire envoi message

(document).on("submit", "#contact_form", function(e) {
    e.preventDefault();
  
    // Get the form data
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val()
    };
  
    // Send the form data to the server
    $.ajax({
      url: "send_email.php",
      type: "POST",
      data: formData,
      success: function(response) {
        // Display a success message
        alert("Your message has been sent successfully!");
      },
      error: function(error) {
        // Display an error message
        alert("An error occurred while sending your message.");
      }
    });
  });

