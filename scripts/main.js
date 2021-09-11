const btn = document.querySelector('.hamburguer-icon');
const menu = document.querySelector('.menu_mobile');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
});
function fechaMenu(){
    document.querySelector('#fecha').addEventListener('click', () => {
        btn.classList.remove('active');
        menu.classList.remove('active');
    });
}
fechaMenu();

function scroll(){
    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
       link.addEventListener('click', e => {
          e.preventDefault();

          btn.classList.remove('active');
          menu.classList.remove('active');
          setTimeout(() => {
            
            let target_id = e.target.getAttribute('href');
            let target = document.querySelector(`${target_id}`);
            window.scrollTo({
                top: `${target.offsetTop}`,
                behavior: 'smooth',
                left: 0
            });
          }, 200);
          
       });
    });
}
scroll();