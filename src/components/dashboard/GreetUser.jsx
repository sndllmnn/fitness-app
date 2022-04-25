/*const Username = () => {
    Username = window.prompt('Wie heißt du?', 'Gib hier deinen Namen ein!');
    Username = firstCapitalLetter+(Username.slice(1).toLowerCase());
    console.log(Username);
} */

const GreetUser = ({username}) => 
    <h1 className="h1 h1__dashboard text__dashboard">Hi {username}!</h1>


export default GreetUser; 