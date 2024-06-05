let daysForms = document.getElementById("daysForms");
let numOfDays = document.getElementById("numOfDays");

numOfDays.addEventListener("input", () => {
  let days = parseInt(numOfDays.value);
  if (!isNaN(days) && days >= 1 && days <= 7) {
    daysForms.innerHTML = "";
    for (let i = 0; i < numOfDays.value; i++) {
      daysForms.innerHTML += `
      <div class="conta p30 gap10">
      <h3>اليوم ${i + 1}</h3>
      <div class="twoForms w800">
        <div class="form">
          <div class="row">
            <div class="input">
              <span> العنوان :</span>
              <input type="text" placeholder=" العنوان ">
            </div>
            <div class="input">
              <span> المسافة :</span>
              <input type="number" placeholder=" المسافة ">
            </div>
          </div>
          <div class="row">
            <div class="input">
              <span> المرور ب.... </span>
              <input type="text" placeholder=" مكان 1 , مكان 2 , ....">
            </div>
            <div class="input">
              <span> مكان الاقامة :</span>
              <input type="number" placeholder=" مكان الاقامة ">
            </div>
          </div>
          <div class="input">
            <span> وصف اليوم :</span>
            <textarea name="" id="" placeholder="وصف اليوم"></textarea>
          </div>
        </div>
      </div>
    </div>
      `;
    }
  }else{
    numOfDays.value="";
    daysForms.innerHTML = "";
  }
});


let addBtns = document.querySelectorAll('.addBtn .btn');

addBtns.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.parentElement.nextElementSibling.innerHTML += 
    `
    <div class="input">
              <div class="select">
                <input type="text" placeholder=" اكتب هنا">
                <i class="fa-regular fa-xmark-circle"></i>
              </div>
            </div>
    `
    delInput();
  })
})
function delInput(){
  let del = document.querySelectorAll('.select .fa-xmark-circle');
  del.forEach((e)=>{
    e.addEventListener('click',()=>{
      e.parentElement.parentElement.remove();
    })
  })
}
delInput();