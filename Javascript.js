// Inicializar o carrossel do Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que o carrossel workCarousel esteja funcionando
    const workCarousel = document.getElementById('workCarousel');
    
    if (workCarousel) {
        // Inicializar com Bootstrap
        const carousel = new bootstrap.Carousel(workCarousel, {
            interval: 5000, // Troca automática a cada 5 segundos
            ride: 'carousel',
            pause: 'hover', // Pausa ao passar o mouse
            wrap: true // Volta ao início após o último slide
        });
        
        console.log('Carrossel inicializado com sucesso!');
    }
});


