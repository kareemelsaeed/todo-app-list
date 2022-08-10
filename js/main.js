let myInput , myBtn ;

myInput = document.querySelector('input');
myBtn = document.querySelector('button')

myInput.addEventListener('input',()=>{
  // console.log(myInput.value.length);
  if (myInput.value.length > 5) {
    myBtn.style.opacity = 1 ;
  } else {
    myBtn.style.opacity = .5 ;
  }
})


myBtn.addEventListener('click',()=>{
  let myOl = document.querySelector('ol');
  let myElement = document.createElement("li");
  let myName = document.createTextNode(myInput.value);
  let myI = document.createElement("i");
  myI.setAttribute("class", "fa-solid fa-circle-minus")
  // console.log(myI);

  if (myInput.value.length > 5) {
    myElement.appendChild(myName);
    myElement.appendChild(myI)
    myOl.appendChild(myElement);
    myI.addEventListener("click",()=>{
        myOl.removeChild(myElement)
    })
    myInput.value = '';
    myBtn.style.opacity = .5 ;
  } 



})