// PHP (process-form.php)

<?php
    // Vérifiez que la requête est de type POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Collecter et nettoyer les données de formulaire
        $nom = isset($_POST['nom']) ? htmlspecialchars($_POST['nom']) : "";
        $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "";
        $num = isset($_POST['num']) ? htmlspecialchars($_POST['num']) : "";
        $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : "";

        // Spécifier l'adresse e-mail du destinataire
        $emailDestinataire = "cantincontact@sitefacile.net";

        // Traiter les données (par exemple, enregistrer dans une base de données ou envoyer un email)
        // ...

        // Envoyer un email au destinataire
        $sujet = "Nouveau message de $nom";
        $contenu = "Nom: $nom\nEmail: $email\nTéléphone: $telephone\nMessage: $message";
        $headers = "From: $email";

        if(mail($emailDestinataire, $sujet, $contenu, $headers)) {
            echo "Message envoyé avec succès.";
        } else {
            echo "Erreur d'envoi de l'email.";
        }
    } else {
        echo "Méthode non autorisée.";
    }
?>
