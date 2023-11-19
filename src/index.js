// Apeler express 

/*    Vous devriez utiliser require, 
      mais comme dans package.json j'incrémente
      "type": "module", je vais utiliser import
*/

import express from 'express';

// Créer l'application:
const app = express();


// Écoutez le serveur:
const PORT = 3000;
app.listen(PORT, ()=>{
   console.log(`Le serveur est en écoute sur : http://localhost:${PORT}`)
})


