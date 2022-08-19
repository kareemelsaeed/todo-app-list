

let myBtn = document.querySelector('.btn');
console.log(myBtn.innerHTML);
myBtn.addEventListener('click',()=>{
  if (myBtn.innerHTML == 'Show Imgs') {
    myBtn.innerHTML = 'Hide Imgs';

      fetch('https://jsonplaceholder.typicode.com/photos')
        .then( res => res.json())
        .then( data =>{
        // console.log(data.thumbnailUrl);
        data.forEach(element => {
        // console.log(element.thumbnailUrl);
        let myRow = document.querySelector('.row')
        let myDive = document.createElement('div');
        myDive.setAttribute('class' , 'col-lg-3 col-md-6 col-sm-12 imgStyle text-center')
        let myImg = document.createElement('img');
        myImg.setAttribute('src' , element.thumbnailUrl);
        myDive.appendChild(myImg);
        myRow.appendChild(myDive)

        });
      })
  }else {
    myBtn.innerHTML = 'Show Imgs';
    let myRow = document.querySelector('.row')
    myRow.innerHTML = ''
  }
})