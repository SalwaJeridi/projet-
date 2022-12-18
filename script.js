//console.log(document)
 

//Zoom image
 var smallimg=document.getElementsByClassName('small')

var options = {
    width: 300,
    zoomWidth: 700,
    offset: { vertical: 0, horizontal: 10 },
  };
  new ImageZoom(document.getElementById("img-container"), options);
  


//Back-To-Top-Button
  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

// shopping cart
var btnplus=document.getElementsByClassName('plus')
var btnmin=document.getElementsByClassName('minus')
const checkboxs = document.querySelectorAll(".check");



for ( var i=0 ; i< btnplus.length ; i++)
{btnplus[i]. addEventListener ("click",increment )
checkboxs[i].addEventListener("click", total);
btnmin[i]. addEventListener ("click",reduction )
}

  // Price= Quantity*Unit Price

function increment (e) {
  const btn = e.target;
  const divElt = btn.parentElement;
   var quentityTag = divElt.querySelector("p");
   var quentityValue = Number(quentityTag.innerHTML);
   quentityValue++;
   quentityTag.innerHTML = quentityValue;
    const trElt = divElt.parentElement.parentElement;
    const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
    var priceTag = trElt.querySelector(".price");
    var priceValue = Number(priceTag.innerHTML);
    priceValue = unitePriceValue * quentityValue;
    priceTag.innerHTML = priceValue;
    console.log(priceValue)
  
  }


    // total= add to+ Price

function total(e) {
    const checkBox = e.target;
    const trElt = checkBox.parentElement.parentElement;
    const priceValue = Number(trElt.querySelector(".price").innerHTML);
    var totalTag = document.getElementById("total");
    var totalValue = Number(totalTag.innerHTML);
  const btnplus= checkBox.parentElement.parentElement.querySelector (".plus");
  if (checkBox.checked===true) {
      totalValue+=priceValue
      totalTag.innerHTML=totalValue
      btnplus.setAttribute("disabled",true) }
  else{
      totalValue-=priceValue
totalTag.innerHTML=totalValue
btnplus.removeAttribute("disabled") }
 }
  // Price= Quantity*Unit Price

 function reduction (e) {
const btn = e.target;
const divElt = btn.parentElement;
 var quentityTag = divElt.querySelector("p");
 var quentityValue = Number(quentityTag.innerHTML);
 if(quentityValue>0){

     quentityValue--;
    }
 quentityTag.innerHTML = quentityValue;
  const trElt = divElt.parentElement.parentElement;
  const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
  var priceTag = trElt.querySelector(".price");
  var priceValue = Number(priceTag.innerHTML);
  priceValue = unitePriceValue * quentityValue;
  priceTag.innerHTML = priceValue;
  const btnmin= checkBox.parentElement.parentElement.querySelector (".minus");

}


    // payment form



const form = document.querySelector('form');
const completePaymentButton = document.querySelector('button#complete-payment');

form.addEventListener('submit', handleFormSubmission);                       

function handleFormSubmission(event) {
  event.preventDefault();
  validate();
  form.reportValidity();
  if (form.checkValidity() === false) {
  } else {
    completePaymentButton.textContent = 'Making payment...';
    completePaymentButton.disabled = 'true';
    alert('Made payment!');
    completePaymentButton.textContent = 'Payment complete!';
  }
}

