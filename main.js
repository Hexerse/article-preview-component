const buttonId = document.getElementById('shareButton');
const buttonIdReturn = document.getElementById('shareButton2');
const  footerQuery = document.querySelector('.hidden');
const phoneQuery = document.querySelector('.popup');

footerQuery.classList.add('off');

buttonId.addEventListener('click',() => {
    const check = footerQuery.classList.contains('off')
    const checkPhone = phoneQuery.classList.contains('off')

    if (check){
        footerQuery.classList.remove('off');
    } else {footerQuery.classList.add('off')
        ;}
    
    
    if (checkPhone){
        phoneQuery.classList.remove('off');
    } else {phoneQuery.classList.add('off')
        ;}
})

buttonIdReturn.addEventListener('click',() => {
    footerQuery.classList.add('off');
})
