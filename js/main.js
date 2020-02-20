// ● Chiedi all’utente la sua email,

// 1- controlla che sia nella lista di chi può accedere,
// 2- stampa un messaggio appropriato

var emailToTheParty = ["MarySwell@gmail.com", "FujiwaraTakeshi@gmail.com", "MarcoLombardi@gmail.com", "AdelmioSabatini@gmail.com"];
var guest = prompt ("Enter Name");

console.log(emailToTheParty);
console.log(guest);

for (var i = 0; i < emailToTheParty.length; i++) {
    if (guest == emailToTheParty[i]) {
        console.log("Welcome here!");
    }
    if else {
        console.log("You're not a guest");
    }
}


// ● Gioco dei dadi, chi fa di più vince.
// Questo gioco di dadi vede come giocatori utente e macchina.


var primo numero = Math.floor(Math.random() * 6) + 1;
var secondo numero = Math.floor(Math.random() * 6) + 1;
console.log(primo numero);
console.log(secondo numero);

if (primo numero > secondo numero) {
    console.log("Vince player1");
}
else if (primo numero < secondo numero) {
    console.log("Vince player2");
}
else {
console.log("Parità!!!");    
}
