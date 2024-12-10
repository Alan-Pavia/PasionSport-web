let items = [
    { Marca: 'Nike', Color: 'Rojo', Talle: '34' },
];

const itemForm = document.getElementById('itemForm');
//agarramos la primer fila [0] del array, después de obtener el elemento con id igual a "dataTable", la función getElementsByTagName() la utulizamos para seleccionar los elementos hijos que coinciden con el nombre de la etiqueta especificada. En este caso, estamos buscando elementos <tbody> dentro del elemento con id "dataTable". Una vez que tenemos los elementos usamos [0] para acceder al primer elemento de 'dataTable'.
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];


function addItem() {
    
    //agarramos los valores de los inputs
    const Marca = document.getElementById('marca').value;
    const Color = document.getElementById('color').value;
    const Talle = document.getElementById('talle').value;

    //Creamos un nuevo objeto y tiene las propiedades de marca, color y talle. 
    //Por ejemplo, si el campo de entrada con el id "marca" contiene el valor "Nike", el campo de entrada con el id "color" contiene el valor "Rojo" y el campo de entrada con el id "talle" contiene el valor "34", entonces el objeto newItems seria así:
    //Marca: 'Nike',
    //Color: 'Rojo',
    //Talle: '34'
    const newItems = {
        Marca: Marca,
        Color: Color,
        Talle: Talle
    };

    //agregamos los nuevos items al final del arry
    items.push(newItems);

    //reiniciamos el formulario
    itemForm.reset();

    //actualizamos la tabla
    updateTable();
}

function addMultipleItems() {
    const Marca = document.getElementById('marca').value;
    const Color = document.getElementById('color').value;
    const Talle = document.getElementById('talle').value;

    const newItems = {
        Marca: Marca,
        Color: Color,
        Talle: Talle
    };

    //se utiliza un bucle for para agregar tres copias de newItem al array items.
    for (let i = 0; i < 3; i++) {
        items.push(newItems);
    }

    itemForm.reset();

    updateTable();
}

function updateTable() {
    //vaciamos el contenido de la tabla
    dataTable.innerHTML = '';

    //iteramos sobre cada elemento del array
    //por cada elemento se crea una fila y se agregan celdas con los valores de las propiedades marca, color y talle, esto mediante la funcion insertRow e insertCell.
    items.forEach(function(item) {
        const row = dataTable.insertRow();

        const MarcaCell = row.insertCell();
        MarcaCell.textContent = item.Marca;

        const ColorCell = row.insertCell();
        ColorCell.textContent = item.Color;

        const TalleCell = row.insertCell();
        TalleCell.textContent = item.Talle;
    });
}

function clearTable() {
    //vaciamos la tabla y la actualizamos.
    items = [];

    updateTable();
}

window.addEventListener('DOMContentLoaded', function() {
    //utilizamos el evento DOMContentLoaded para asegurarnos de que el DOM se haya cargado completamente antes de ejecutar algunas funciones (addItem(), addMultipleItems(), updateTable(), clearTable(). Dentro de este evento, se asignan los manejadores de eventos a los botones del formulario y se llama a updateTable() para mostrar los elementos existentes en la tabla.)
    document.getElementById('addItemButton').addEventListener('click', addItem);
    document.getElementById('clearTableButton').addEventListener('click', clearTable);
    document.getElementById('addTresItemButton').addEventListener('click', addMultipleItems);

    updateTable();
});

//DOMContentLoaded no seria necesaria en este caso porque el código se encuentra al final del archivo y se ejecutará después de que todo el contenido HTML se haya cargado. Pero en caso de que fuese mas complejo el trabajo, en donde es posible que se necesite esperar a que ciertos elementos del DOM se carguen antes de ejecutar determinadas funciones creo que seria necesario.