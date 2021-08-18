//get values -- controller function
function getValue(){
    let userInput = document.getElementById("userInput");
    let tacoCat = tacoCat(usrString);
    isPalindrome(tacoCatRev);
}


//tacoCat -- logic function
function tacoCat(input){
    let tacoCatRev = [];
    for(i=input; i>= 0; i--){
        tacoCatRev.push(i);
    }
    return tacoCatRev;
}
//isPalindrome -- view function
function isPalindrome(tacoCatRev){
    let alert = document.getElementById("isPalindromeDisplay");
    if(tacoCatRev === input){
        alert.innerHTML = `${tacoCatRev} is a palindrome!`;
        alert.classList.add("alert-success");    
    } else {
        alert.innerHTML = `${tacoCatRev} is <strong>NOT</strong> a palindrome`;
    }

    
}