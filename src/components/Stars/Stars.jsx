import './Stars.css';
function pop (e) {
    let amount = 30;
    switch (e.target.dataset.type) {
        case 'shadow':
        // case 'line': 
        amount = 60;
        break;
    }
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = e.target.getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 30; i++) {
            createParticle(x, y, e.target.dataset.type);
        }
        } else {
        for (let i = 0; i < amount; i++) {
            createParticle(e.clientX, e.clientY, e.target.dataset.type);
        }
    }
}
 
function createParticle (x, y, type) {

    const particle = document.createElement('particle');
    
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    switch (type) {
        case 'square':
        particle.style.background = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет квадратов
        particle.style.border = '1px solid white'; // Бордюр квадратов
        break;

        case 'symbol':
        particle.innerHTML = ['&#9884;','&#9731;','&#10084;','&#10052;','&#10054;','&#9733;','&#9787;'][Math.floor(Math.random() * 7)]; // Символы
        particle.style.color = `hsl(${Math.random() * 50 + 200}, 70%, 60%)`; // Цвет символов
        particle.style.fontSize = `${Math.random() * 24 + 10}px`; // Размер символов
        width = height = 'auto';
        break;

        case 'logo':
        particle.style.backgroundImage = 'url(https://i.pinimg.com/originals/e7/1f/30/e71f308b002d939844704b799a00c90c.jpg)';
        break;

        case 'shadow':
        var color = `hsl(${Math.random() * 50 + 200}, 70%, 50%)`; // Цвет 
        particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`; // Тень
        particle.style.background = color;
        particle.style.borderRadius = '50%'; // Радиус
        width = height = Math.random() * 5 + 4; // Размеры
        break;
    }
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }
        ], {
        duration: Math.random() * 1000 + 5000, // Продолжительность всех эффектов
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    }); 
    animation.onfinish = removeParticle;
}
function removeParticle (e) {
    e.srcElement.effect.target.remove();
}
if (document.body.animate) {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
}


const Card = () => {
  return (
    <div>
        <button data-type="square">Кнопка</button>
        <button data-type="symbol">Кнопка</button>
        <button data-type="logo">Кнопка</button>
        <button data-type="shadow">Кнопка</button>
    </div> 
  );
};

export default Card;