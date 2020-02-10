const link = document.querySelector('a');

link.textContent = 'my page facebook';
link.href = 'https://www.facebook.com/ihor.muliar.13';

const sect = document.querySelector('section');
const para = document.createElement ('p');
sect.appendChild(para)
para.textContent = 'We hope you enjoyed the ride.';

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));





const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

$('.click-me').click( () => $('img').toggle(3000) )

const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.val = eval(display.val);
}