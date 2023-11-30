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