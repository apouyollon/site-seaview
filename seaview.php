<?php
// Récupérer les données du formulaire
$nomSociete = $_POST['nomSociete'];
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$description = $_POST['description'];
$pieceJointe = $_FILES['pieceJointe'];

// Connexion à la base de données MySQL (ex. via PDO)
try {
    $pdo = new PDO('mysql:host=localhost;dbname=Seaview', 'nom_utilisateur', 'mot_de_passe');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Préparez la requête d'insertion des données dans la table correspondante
    $stmt = $pdo->prepare('INSERT INTO Devis(nomSociete, prenom, nom, telephone, email, description, nomFichier, fichier) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    
    // Lecture du fichier
    $nomFichier = $pieceJointe['name'];
    $fichier = file_get_contents($pieceJointe['tmp_name']);

    // Exécutez la requête avec les valeurs du formulaire et le fichier
    $stmt->bindParam(1, $nomSociete);
    $stmt->bindParam(2, $prenom);
    $stmt->bindParam(3, $nom);
    $stmt->bindParam(4, $telephone);
    $stmt->bindParam(5, $email);
    $stmt->bindParam(6, $description);
    $stmt->bindParam(7, $nomFichier);
    $stmt->bindParam(8, $fichier, PDO::PARAM_LOB);
    $stmt->execute();

    // Répondre au client avec un statut de succès
    http_response_code(200);
    echo json_encode(array("message" => "Données ajoutées avec succès à la base de données"));
} catch(PDOException $e) {
    // En cas d'erreur, répondre avec un code d'erreur
    http_response_code(500);
    echo json_encode(array("message" => "Erreur lors de l'ajout des données : " . $e->getMessage()));
}
?>
