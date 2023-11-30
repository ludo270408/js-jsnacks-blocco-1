//1. Esercizio della frutta 
//Chiamiamo l'array frigorifero(contiene la frutta)
let fridge =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];
//Notiamo la pesca sul tavolo
let peach = 'pesca';
//Mettiamo la pesca nel frigorifero
fridge.push(peach);

//Controllo se ho il cocomero in frigo per fare i cocktail
for(let i=0; i<fridge.length; i++){
    //é il cocomero? si/no
    if(fridge[i]=='cocomero'){
        console.log('Trovato! Devo solo preparare il cocktail.');
    }
    else{
        console.log('Oh no, devo uscire a comprare il cocomero!');
    }
}

//2. Genera array a piacere con numeri randomici

//Chiedi all'utente la grandezza dell'array

let user_choice=prompt('Da quanti elementi è composto l\'array?')

//Riempiamolo con numeri casuali
let array=[];
 for(let i=0; i<user_choice; i++){
    //Genero il numero
    let numero=math.floor(math.random()*100+1);
    //Metto il numero nell'array
    array.push(numero);
 }
 //Mostra tutti i numeri
 console.log(array);

 //Stampa gli ultimi 5 elementi
 array.reverse();
 for(let i=0; i<5; i++){
    console.log(array[i]);
 }

