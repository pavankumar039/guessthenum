var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function () {
    var guess=parseInt(document.getElementById('guessinput').value);
    attempts++;
    if(guess===randomNumber){
        displayMessage("congratulations! you  guessed the number in "+attempts+"attempt");
        document.getElementById('btn').disabled=true;
    }
    else if(guess<randomNumber){
        displayMessage("too low try a high number.");

    }else{
        displayMessage("too high try a lower number");
    }
    
});
function displayMessage(Message){
    document.getElementById('msg').textContent=Message;
}