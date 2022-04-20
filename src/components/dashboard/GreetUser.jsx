/* HOW TO import strechtingCaricature from "./stretchingCaricature.png'; */

const Username = () => {
    Username = window.prompt('Wie heißt du?', 'Gib hier deinen Namen ein!');
    Username = firstCapitalLetter+(Username.slice(1).toLowerCase());
    console.log(Username);
}

const GreetUser = (Username) => {
    <h1 className="h1 h1--dashboard text--dashboard">Hi Username!</h1>
}


/* ???? WANN? */