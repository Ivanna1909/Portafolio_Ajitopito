// Selección de elementos
const buttons = document.querySelectorAll('.nav__galery--one a');
const images = document.querySelectorAll('.galery__img--all .img');
const title = document.querySelector('.title__all');

// Función para manejar el filtro por categoría
function filterImages(category, buttonText) {
    images.forEach((img) => {
        if (category === 'all' || img.classList.contains(category)) {
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.display = 'block';
                img.style.opacity = '1';
            }, 300);
        } else {
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.display = 'none';
            }, 300);
        }
    });

    // Cambiar el título según la categoría
    title.textContent = buttonText;

    // Actualizar estilos del botón seleccionado
    buttons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector(`#${category}`).classList.add('active');
}

// Añadir eventos a los botones
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const category = button.id;
        const buttonText = button.textContent;
        if (category === 'all') {
            // Si es el botón "Mis trabajos", mostrar todo
            filterImages('all', 'TODOS');
        } else {
            // Filtrar por categoría
            filterImages(category, buttonText);
        }
    });
});

// Estado inicial: mostrar todas las imágenes
window.addEventListener('DOMContentLoaded', () => {
    filterImages('all', 'TODOS');
});
