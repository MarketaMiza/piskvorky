let currentPlayer = 'circle';

const btnElm1 = document.querySelector('td:nth-child(1)');
const btnElm2 = document.querySelector('td:nth-child(2)');
const btnElm3 = document.querySelector('td:nth-child(3)');
const btnElm4 = document.querySelector('td:nth-child(4)');
const btnElm5 = document.querySelector('td:nth-child(5)');
const btnElm6 = document.querySelector('td:nth-child(6)');
const btnElm7 = document.querySelector('td:nth-child(7)');
const btnElm8 = document.querySelector('td:nth-child(8)');
const btnElm9 = document.querySelector('td:nth-child(9)');
const btnElm10 = document.querySelector('td:nth-child(10)');

const player = document.querySelector('#player')
const change = (event) => {

    if(currentPlayer === 'circle') {
        event.target.classList.add('board__field--circle')
        currentPlayer = 'cross'
        player.className = 'board__nav--circle'

    } else if (currentPlayer === 'cross') {
        event.target.classList.add('board__field--cross') 
        currentPlayer = 'circle'
        player.className = 'board__nav--cross'
    }
    event.target.disabled = true;

}

btnElm1.addEventListener('click', change)
btnElm2.addEventListener('click', change)
btnElm3.addEventListener('click', change)
btnElm4.addEventListener('click', change)
btnElm5.addEventListener('click', change)
btnElm6.addEventListener('click', change)
btnElm7.addEventListener('click', change)
btnElm8.addEventListener('click', change)
btnElm9.addEventListener('click', change)
btnElm10.addEventListener('click', change)

const restart = document.querySelector('.blue')
restart.addEventListener('click', (event) => {
    if (!confirm('opravdu chces  zacit znovu?')) {
        event.preventDefault()
    }
})