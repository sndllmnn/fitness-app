function AskForUsername () {
    const Username = prompt("Wie heißt du?");
    Username = firstCapitalLetter+(Username.slice(1).toLowerCase());
    console.log(Username);
};

function GreetUser () {
    <h1>Hi Name!</h1>
    /*return <img src={strechtingCaricature} alt="caricature of a Black woman doing stretching" />; */
}

export default GreetUser;