// Enviar formulario (simulado)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por contactarme! Te responderé pronto.");
    this.reset();
});
