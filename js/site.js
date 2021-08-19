//get values -- controller function
function getValue(){
    document.getElementById("isPalindromeDisplay").classList.add("invisible");
    
    let str = document.getElementById("userInput").value;
    let strRegex = str.replace(/[^a-zA-Z]/g, "");
    let strLowerCase = strRegex.toLowerCase();
    if(strLowerCase.value == ""){
        alert("Please enter a string");
    } else{
        let tacoCatRev = tacoCat(strLowerCase);
        isPalindrome(tacoCatRev, strLowerCase);
    }
    

}


//tacoCat -- logic function
function tacoCat(str){
    let tacoCatRev = [];
    for(i=str.length-1; i>= 0; i--){
        tacoCatRev += str[i];
    }
    return tacoCatRev;
}
//isPalindrome -- view function
function isPalindrome(tacoCatRev, str){
    let alert = document.getElementById("isPalindromeDisplay");
    alert.classList.remove("invisible", "alert-success", "alert-danger");
    alert.classList.add("show");
    if(tacoCatRev === str){
        alert.innerHTML = `${tacoCatRev} is a palindrome!`;
        
        alert.classList.add("alert-success");    
    } else {
        alert.innerHTML = `${tacoCatRev} is <strong>NOT</strong> a palindrome`;
        
        alert.classList.add("alert-danger");
    }

    
}