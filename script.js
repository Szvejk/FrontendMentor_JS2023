const next = document.querySelector(".nextStep");
const back = document.querySelector(".backStep");
const input = document.querySelectorAll("#emailAdress");
const select = document.querySelector(".select");
const wrapper = document.querySelector(".wrapper");

next.addEventListener('click', () =>{
if(input === '') {
    alert('bug');

}else{
select.classList.remove('none');
wrapper.style.display ='none';
}

});