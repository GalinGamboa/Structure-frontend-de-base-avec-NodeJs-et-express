// Apeler express 

/*    Vous devriez utiliser require, 
      mais comme dans package.json j'incrémente
      "type": "module", je vais utiliser import
*/

import { log } from 'console';
import express from 'express';

// imports pour trover le répertoire absolu
import path from 'path'
import {dirname,join }from 'path';
import {fileURLToPath} from 'url';

// Créer l'application:
const app = express();



// Rechercher le répertoire absolu "__dirname"
const __dirname = dirname(fileURLToPath(import.meta.url)); 
console.log (__dirname);      // C:\Users\galin\OneDrive\Desktop\NodeJs_frontend_basic\src

/*
   également retrouver le répertoire absolu avec :
   const __dirname = path.resolve('src')
*/ 


// utilisation du dossier public
app.use(express.static(join(__dirname,'public')));

// EJS
// définir le moteur d'affichage sur ejs
app.set('view engine', 'ejs');
app.set ('views', join(__dirname,'views','pages'));

app.get('/',(req,res)=> res.render('home'));
app.get('/services',(req,res)=> res.render('services'));
app.get('/galery',(req,res)=> res.render('galery'));
app.get('/contact',(req,res)=> res.render('contact'));


// Écoutez le serveur:
const PORT = 3000;
app.listen(PORT, ()=>{
   console.log(`Le serveur est en écoute sur : http://localhost:${PORT}`);
});


