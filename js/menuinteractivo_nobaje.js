function showContent(contentId) {
    // Ocultar todos los contenidos de las pestañas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Mostrar el contenido correspondiente a la pestaña clicada
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}