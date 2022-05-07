const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");

btn.addEventListener("click", palindrome);

function palindrome(){
    const word = document.querySelector(".input-text").value;
    const string = word.toLowerCase().replace(/\W|_/g, '');
    const check = string.split('').reverse().join('');
  
    if (string === check) {      
        result.innerHTML = "&nbsp" + word + "&nbsp";
        result1.innerHTML = " is a Palindrome.";
        result.style.color = "white";
        result1.style.color = "black";
        result.style.backgroundColor = "#50C878"
    } else {
        result.innerHTML = "&nbsp" + word + "&nbsp";
        result1.innerHTML = " is not a Palindrome.";
        result.style.color = "white";
        result1.style.color = "black";
        result.style.backgroundColor = "#F42828"
    }
  };