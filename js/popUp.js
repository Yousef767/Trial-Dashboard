let showPopUp = document.querySelectorAll('#show-popUp');
let popUp = document.getElementById('popUp');
let closeBtn = document.querySelectorAll('#close');

showPopUp.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp.style.display='flex';
  });
})


closeBtn.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp.style.display='none';
  });
})
