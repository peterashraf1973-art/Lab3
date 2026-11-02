let cartQuantity = 0
function ShowQuantity(){
    document.getElementById("Displaying").textContent = cartQuantity;
}

function plus1(){
    cartQuantity += 1;
    document.getElementById("Displaying").textContent = cartQuantity;

}

function plus2(){
    cartQuantity += 2
    document.getElementById("Displaying").textContent = cartQuantity;

}

function plus3(){
    cartQuantity += 3;
    document.getElementById("Displaying").textContent = cartQuantity;

}

function ResetCart(){
    cartQuantity = 0;
    document.getElementById("Displaying").textContent = cartQuantity;

}

document.getElementById("ShowQuantity").addEventListener('click',ShowQuantity);
document.getElementById("+1").addEventListener('click',plus1)
document.getElementById("+2").addEventListener('click',plus2)
document.getElementById("+3").addEventListener('click',plus3)
document.getElementById("Reset cart").addEventListener('click',ResetCart)

