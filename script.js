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

let user_choice=prompt('Da quanti elementi è composto l\'array?');

//Riempiamolo con numeri casuali
let array=[];
 for(let i=0; i<user_choice; i++){
    //Genero il numero
    let numero=Math.floor(Math.random()*100+1);
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



//3. Due array diversi che arrivano ad avere lo stesso numero

let user_choice_one=prompt('Da quanti elementi è composto il primo array?');
let user_choice_two=prompt('Da quanti elementi è composto il secondo array?')

//Riempiamolo con numeri casuali
let array_one=[];
 for(let i=0; i<user_choice_one; i++){
    //Genero il numero
    let numero=Math.floor(Math.random()*100+1);
    //Metto il numero nell'array
    array_one.push(numero);
 }
 //Mostra tutti i numeri
 console.log(array_one);

 //Riempiamolo con numeri casuali
let array_two=[];
 for(let i=0; i<user_choice_two; i++){
    //Genero il numero
    let numero=Math.floor(Math.random()*100+1);
    //Metto il numero nell'array
    array_two.push(numero);
 }
 //Mostra tutti i numeri
 console.log(array_two);

 //Confronta i due array

 if(user_choice_one = user_choice_two){
    console.log('I due array sono già uguali:)')
 }
 else if(user_choice_one<user_choice_two){
    for(let i=user_choice; i<user_choice_two; i++){
        //Genero il numero
        let numero=math.floor(math.random()*100+1);
        //Metto il numero nell'array
        array_one.push(numero);
     }
     //Mostra tutti i numeri
     console.log(array_one);
     console.log('Ora sono uguali!');
 }
 else{
    for(let i=user_choice_two; i<user_choice_one; i++){
        //Genero il numero
        let numero=math.floor(math.random()*100+1);
        //Metto il numero nell'array
        array_two.push(numero);
     }
     //Mostra tutti i numeri
     console.log(array_two);
     console.log('Ora sono uguali!');
 }


