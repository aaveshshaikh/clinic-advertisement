let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);
function inputMsg(){
    let name = prompt('Enter timing of  consultion');
    namasteBtn.textContent = 'consultation is booked at ' + name;
}