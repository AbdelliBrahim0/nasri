function handleSubmit(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire
    // Vous pouvez ajouter ici le code pour traiter les données du formulaire si nécessaire
    document.getElementById('feedbackForm').reset(); // Réinitialise le formulaire
    alert("votre message est bien reçu");
}