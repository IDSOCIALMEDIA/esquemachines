// Temporizador Regressivo
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + " : " + seconds;

        if (--timer < 0) {
            timer = duration; // Reinicia o timer quando chega a 0
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 4 + 23, // 4 minutos e 23 segundos
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
    
    // Rotação de nomes na notificação
    const names = ["Carla Oliveira", "João Silva", "Ana Souza", "Pedro Santos", "Mariana Costa", "Rafaela Silva", "Joana Souza", "Josefa Santos", "Maria Costa"];
    const notifElem = document.querySelector("#notification strong");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % names.length;
        notifElem.textContent = names[index];
        
        // Simples animação de piscar para chamar atenção
        const badge = document.getElementById('notification');
        badge.style.transform = "translateX(-50%) scale(1.05)";
        setTimeout(() => badge.style.transform = "translateX(-50%) scale(1)", 200);
        
    }, 5000); // Muda o nome a cada 5 segundos
};
