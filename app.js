function problemOne(event) {

const target = event.target;

target.parentNode.removeChild(target);

}

let elementOne = document.querySelector('#remove-me')

elementOne.addEventListener('click', problemOne);

// reference the elment "#remove-me" and add an eventlistener for the click event:
// your code here:

function problemTwo(event) {
  const target = event.target;
  // your code here:
  if(target.classList.contains("child")){
  target.parentNode.removeChild(target);}

}
// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here
let elementTwo = document.querySelector('#remove-my-children')

elementTwo.addEventListener('click', problemTwo);
/* ---------------------------------------- */

function problemThree(event) {

  const target = event.target;
  // your code here
  if(target.children.length === 0){
  target.parentNode.removeChild(target);}
}

// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
// your code here:
let elementThree = document.querySelector('#remove-my-children-then-me')

elementThree.addEventListener('click', problemThree);
/* ---------------------------------------- */

function problemFour(event) {

  const target = event.target;
  // your code here
  var div = document.createElement('div');
div.textContent = "Child class!";
div.setAttribute('class', 'child');
target.appendChild(div);
}

// reference the elment "#add-children" and add an eventlistener for the click event:
// your code here:
let elementFour = document.querySelector('#add-children')

elementFour.addEventListener('click', problemFour);

/* ---------------------------------------- */

function problemFive(event) {

  const target = event.target;
  // your code here
target.parentNode.appendChild(target)
}

// reference the elment "#to-the-back" and add an eventlistener for the mouseup event:
// your code here:
let elementFive = document.querySelector('#to-the-back');

elementFive.addEventListener('click', problemFive);
/* ---------------------------------------- */

function problemSix(event) {

  const target = event.target;
  // your code here
  if(target.classList.contains("child")){
  target.innerHTML++;}
}

// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:
let elementSix = document.querySelector('#increment-child');

elementSix.addEventListener('click', problemSix);
/* ---------------------------------------- */

function problemSeven(event) {

  const target = event.target;
  // your code here
if (event.shiftKey == true) {
  target.innerHTML--;
}
else {target.innerHTML++;}

}

// reference the elment "#increment-decrement" and add an eventlistener for the click event:
// your code here:
let elementSeven = document.querySelector('#increment-decrement');

elementSeven.addEventListener('click', problemSeven);
/* ---------------------------------------- */

function problemEight(event) {

 const target = event.target;
  // your code here
copy.textContent = target.value;
}

// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:
let elementEight = document.querySelector("#echo-user-input");
const copy = document.querySelector(".user-input-copy");
elementEight.addEventListener('keyup', problemEight);
/* ---------------------------------------- */

function problemNine(event) {

event.preventDefault();
  const target = event.target;
  // your code here

  clipboardData = event.clipboardData || window.clipboardData;
     pastedData = clipboardData.getData('Text');
let arr = [...pastedData];
pastedData = arr.reverse().join("");
target.value = pastedData;

}

// reference the elment "#paste-place" and add an eventlistener for the paste event:
// your code here:
let elementNine = document.querySelector("#paste-place");
elementNine.addEventListener('paste', problemNine);
/* ---------------------------------------- */

function problemTen(event) {
  const target = event.target;
  // your code here
  if (hide.style.display === "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
}

// reference the elment "#show-hide" and add an eventlistener for the change event:
// your code here:
let elementTen = document.querySelector("#show-hide");
const hide = document.querySelector(".target-element");
elementTen.addEventListener('change', problemTen);
/* ---------------------------------------- */

function problemEleven(event) {

  event.preventDefault();

  const target = event.target;
  // your code here

  emailEleven.textContent = "Email: " + target[0].value;

  passwordEleven.textContent = "Password: " + target[1].value;


}

// your code here
let parentEleven = document.querySelector("#prevent-submit");
let elementEleven = parentEleven.querySelector("form");
let emailEleven = parentEleven.querySelector("span.user-email");
let passwordEleven = parentEleven.querySelector("span.user-password");

elementEleven.addEventListener('submit', problemEleven);
/* ---------------------------------------- */
function problemTwelve (event) {
  event.preventDefault();

  const target = event.target;
    // your code here
    alert("Name: " + target[0].value + " Address: " + target[1].value + " Phone Number: " + target[2].value);
    target.reset();
    }

// your code here

let twelve = document.querySelector("#target-for-form-template");
const form = document.createElement("form");


let name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "Name");
    name.setAttribute("placeholder", "Name");

var address = document.createElement("input");
      address.setAttribute("type", "text");
      address.setAttribute("name", "address");
      address.setAttribute("placeholder", "Address");

var phone = document.createElement("input");
     phone.setAttribute("type", "text");
     phone.setAttribute("name", "phone");
     phone.setAttribute("placeholder", "Phone Number");

     var s = document.createElement("input");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");
                var br = document.createElement("br");

                form.appendChild(name);
form.appendChild(br.cloneNode());
                form.appendChild(address);
form.appendChild(br.cloneNode());
                form.appendChild(phone);
form.appendChild(br.cloneNode());

                form.appendChild(s);
              twelve.appendChild(form);
form.addEventListener('submit', problemTwelve);
