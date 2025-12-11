const cards = document.querySelectorAll('.skin-card');

cards.forEach(function(card) {
    const btn = card.querySelector('.toggle-btn');
    const desc = card.querySelector('.skin-desc');

    btn.addEventListener('click', function() {
        desc.classList.toggle('hidden');

        if (desc.classList.contains('hidden')) {
            btn.textContent = 'About skin';
        } else {
            btn.textContent = 'Hide about';
        }
    });

});

const form = document.getElementById('skinForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const skin1 = document.getElementById('skin1').value;
    const skin2 = document.getElementById('skin2').value;
    const skin3 = document.getElementById('skin3').value;
    const skin4 = document.getElementById('skin4').value;
    const skin5 = document.getElementById('skin5').value;

    console.log('Значение skin1:', skin1);
    console.log('Значение skin2:', skin2);

    const message = `Favorite skins: ${skin1}, ${skin2}, ${skin3}, ${skin4}, ${skin5}`;
    const TELEGRAM_BOT_TOKEN = '8112068479:AAGSam_RktQjQRdXjyt372kx8bY2h-WkmbM';
    const TELEGRAM_CHAT_ID = '896956437';
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    console.log('Итоговое сообщение:', message);
    console.log('Тип message:', typeof message);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('✅ Скины успешно отправлены в Telegram!');
            form.reset();
        } else {
            alert('❌ Ошибка отправки. Проверьте токен и Chat ID.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('❌ Ошибка сети. Проверьте подключение к интернету.');
    });
});