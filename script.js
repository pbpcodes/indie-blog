
const selectElement = (element) => document.querySelector(element);

selectElement(element, '.menu-icons').addEventListener('click', () =>{
    selectElement(element, 'nav').classList.toggle(token, 'active');
});
