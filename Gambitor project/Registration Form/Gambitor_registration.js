document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);  
    window.location.href = 'GambitoR_reg2.html'; 
});
