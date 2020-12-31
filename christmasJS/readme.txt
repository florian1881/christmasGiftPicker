//   _____        __                           _   _                 
//  |_   _|      / _|                         | | (_)                
//    | |  _ __ | |_ ___  _ __ _ __ ___   __ _| |_ _  ___  _ __  ___ 
//    | | | '_ \|  _/ _ \| '__| '_ ` _ \ / _` | __| |/ _ \| '_ \/ __|
//   _| |_| | | | || (_) | |  | | | | | | (_| | |_| | (_) | | | \__ \
//  |_____|_| |_|_| \___/|_|  |_| |_| |_|\__,_|\__|_|\___/|_| |_|___/
//
//     __  __ __  ____   ____   _____ ______  ___ ___   ____   _____    
//    /  ]|  |  ||    \ |    | / ___/|      ||   |   | /    | / ___/    
//   /  / |  |  ||  D  ) |  | (   \_ |      || _   _ ||  o  |(   \_     
//  /  /  |  _  ||    /  |  |  \__  ||_|  |_||  \_/  ||     | \__  |    
// /   \_ |  |  ||    \  |  |  /  \ |  |  |  |   |   ||  _  | /  \ |    
// \     ||  |  ||  .  \ |  |  \    |  |  |  |   |   ||  |  | \    |    
//  \____||__|__||__|\_||____|  \___|  |__|  |___|___||__|__|  \___|    
//  
//    ____  ____  _____  ______ 
//  /    ||    ||     ||      |
// |   __| |  | |   __||      |
// |  |  | |  | |  |_  |_|  |_|
// |  |_ | |  | |   _]   |  |  
// |     | |  | |  |     |  |  
// |___,_||____||__|     |__|  
//
//  ____   ____     __  __  _    ___  ____  
// |    \ |    |   /  ]|  |/ ]  /  _]|    \ 
// |  o  ) |  |   /  / |  ' /  /  [_ |  D  )
// |   _/  |  |  /  /  |    \ |    _]|    / 
// |  |    |  | /   \_ |     \|   [_ |    \ 
// |  |    |  | \     ||  .  ||     ||  .  \
// |__|   |____| \____||__|\_||_____||__|\_|
//
/*
*
* User put all participant in one array 
* Array is shuffled
* participant[i] gift to participant[i+1]
* last participant gift to the first participant

//   _______ ____    _____   ____    _      _____  _____ _______ 
//  |__   __/ __ \  |  __ \ / __ \  | |    |_   _|/ ____|__   __|
//     | | | |  | | | |  | | |  | | | |      | | | (___    | |   
//     | | | |  | | | |  | | |  | | | |      | |  \___ \   | |   
//     | | | |__| | | |__| | |__| | | |____ _| |_ ____) |  | |   
//     |_|  \____/  |_____/ \____/  |______|_____|_____/   |_|   


// passer sous vue JS
// integrer tailwind css 
// Donner le choix à l'utilisateur
// aficher ses choix 
// Ne pas autoriser les choix multiples (ex : "florian" et "florian" est refusé, "Florian" et "FLORIAN" aussi )
// Proposer une manière de supprimer le choix à l'utilisateur
// Créer un bouton pour générer les paires offreurs / receveurs

//*************** V2 ****************/

// ajouter la saisie d'email  
// refuser les doublons d'emails dans un même salon mais pas dans l'appli compléte
// proposer d'imprimer la page ? de la sauvegarder ? de l'envoyer par mails aux participants ? 
// stocker les données en BDD 
// ajouter un système de salon pour qu'un utilisateur ne sont pas obligé d'inscrire tout le monde : 
// exemple chrimasgift/12345 pour le salon 12345
// Bloquer l'accès à certains salon avec un mot de passe (généré automatiquement ou choisit par l'utilisateur)
// Hasher / saler le mot de passe et sauver le mot de passe en base de données (comment stocker la clef de hash et le sel)