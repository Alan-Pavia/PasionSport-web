//Funcion para a parecer el boton del menu responsive.
function toggleMenu(){
    let btnMenu = document.querySelector('.btn_menu');
    let menu = document.querySelector('.menu_items');

    //Aquí se utiliza el método toggle() de la propiedad classList del elemento btnMenu. Este método agrega la clase CSS 'active' al elemento si no la tiene, y la elimina si ya la tiene. Esto permite alternar entre la apariencia activa e inactiva del botón del menú.

    btnMenu.classList.toggle('active');

    //Similar al paso anterior, esta línea agrega o quita la clase CSS 'show' al elemento menu, lo que hace que el menú se muestre o se oculte.

    menu.classList.toggle('show');

    //esta condicion sirve para saber si se debe cambiar el icono de barras del menu de navegacion en mobile por un 'X' cuando este no este activo.
    if(btnMenu.classList.contains('active')){
        btnMenu.innerHTML = 'x';
    } else{
        btnMenu.innerHTML='<i class="fa-solid fa-bars"></i>';
    }
}

//En resumen, el uso de btnMenu.classList.toggle('active') y menu.classList.toggle('show') hace que sea fácil cambiar cómo se ve el botón y si el menú es visible o no cuando el usuario interactúa. Al agregar o quitar las clases adecuadas, podemos tener un control más interesante y atractivo del menú, haciendo que se adapte a la página web.