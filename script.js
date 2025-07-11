// game flow module pattern
const gameFlow =(function () {
    const container = document.querySelector('.container')
    const one = document.querySelector('.one')
    const two = document.querySelector('.two')
    const three = document.querySelector('.three')
    const four = document.querySelector('.four')
    const five = document.querySelector('.five')
    const six = document.querySelector('.six')
    const seven = document.querySelector('.seven')
    const eight = document.querySelector('.eight')
    const nine = document.querySelector('.nine')

    // switch player
    let currentPlayer = 'x'

    // assign x or o to square when its clicked
    const x = 'x'
    const o = 'o'

    // game board handler
    let gameBoard = [one, two, three, four, five, six, seven, eight, nine]

    gameBoard = gameBoard.map(square => {
        square.addEventListener('click', () => {
            if (document.querySelector('.gameover-pop') === null) {
                if (square.textContent === '' && gameFlow.currentPlayer === 'x') {
                    square.innerHTML += x
                    gameFlow.currentPlayer = 'o'
                    console.log(square, x, 'clicked')
                }else if (square.textContent === '' && gameFlow.currentPlayer === 'o') {
                    square.innerHTML += o
                    gameFlow.currentPlayer = 'x'
                    console.log(square, o, 'clicked')
                }
            }
        
            // decide
            if ((one.innerHTML === x && two.innerHTML === x && three.innerHTML === x)
                || (four.innerHTML === x && five.innerHTML === x && six.innerHTML === x)
                || (three.innerHTML === x && six.innerHTML === x && nine.innerHTML === x)
                || (seven.innerHTML === x && eight.innerHTML === x && nine.innerHTML === x)
                || (one.innerHTML === x && four.innerHTML === x && seven.innerHTML === x) 
                || (one.innerHTML === x && five.innerHTML === x && nine.innerHTML === x) 
                || (three.innerHTML === x && five.innerHTML === x && seven.innerHTML === x)
                || (two.innerHTML === x && five.innerHTML === x && eight.innerHTML === x)) {
                    console.log('playerX win')

                    if(document.querySelector('.gameover-pop') === null) {
                        let d = document.createElement('div')
                        d.classList.add('gameover-pop')
    
                        let p = document.createElement('p')
                        if(document.querySelector('.display-x').textContent === ''){
                            p.textContent = 'PlayerX wins!'
                        }else {
                            p.textContent = `${document.querySelector('.display-x').textContent} wins!`
                        }
                        
                        let childD = document.createElement('div')
                        let newGameBtn = document.createElement('button')
                        newGameBtn.classList.add('new-game')
                        newGameBtn.setAttribute('onclick', 'btn.newGame()')
                        newGameBtn.textContent = 'New Game'
    
                        let againBtn = document.createElement('button')
                        againBtn.classList.add('again')
                        againBtn.setAttribute('onclick', 'btn.again(this, event)')
                        againBtn.textContent = 'Again'
    
                        childD.appendChild(newGameBtn)
                        childD.appendChild(againBtn)
    
                        d.appendChild(p)
                        d.appendChild(childD)
    
                        container.appendChild(d)
                    }
            }else if ((one.innerHTML === o && two.innerHTML === o && three.innerHTML === o)
                || (four.innerHTML === o && five.innerHTML === o && six.innerHTML === o)
                || (three.innerHTML === o && six.innerHTML === o && nine.innerHTML === o)
                || (seven.innerHTML === o && eight.innerHTML === o && nine.innerHTML === o)
                || (one.innerHTML === o && four.innerHTML === o && seven.innerHTML === o)
                || (one.innerHTML === o && five.innerHTML === o && nine.innerHTML === o)
                || (three.innerHTML === o && five.innerHTML === o && seven.innerHTML === o)
                || (two.innerHTML === o && five.innerHTML === o && eight.innerHTML === o)) {
                    console.log('playerO win')

                    if(document.querySelector('.gameover-pop') === null) {
                        
                        let d = document.createElement('div')
                        d.classList.add('gameover-pop')
    
                        let p = document.createElement('p')
                        if(document.querySelector('.display-o').textContent === ''){
                            p.textContent = 'PlayerO wins!'
                        }else {
                            p.textContent = `${document.querySelector('.display-o').textContent} wins!`
                        }
                        
                        
                        let childD = document.createElement('div')
                        let newGameBtn = document.createElement('button')
                        newGameBtn.classList.add('new-game')
                        newGameBtn.setAttribute('onclick', 'btn.newGame()')
                        newGameBtn.textContent = 'New Game'
    
                        let againBtn = document.createElement('button')
                        againBtn.classList.add('again')
                        againBtn.setAttribute('onclick', 'btn.again(this, event)')
                        againBtn.textContent = 'Again'
    
                        childD.appendChild(newGameBtn)
                        childD.appendChild(againBtn)
    
                        d.appendChild(p)
                        d.appendChild(childD)
    
                        container.appendChild(d)
                    }
            }else if ((one.innerHTML === x || one.innerHTML === o) 
                && (two.innerHTML === x || two.innerHTML === o)
                && (three.innerHTML === x || three.innerHTML === o)
                && (four.innerHTML === x || four.innerHTML === o)
                && (five.innerHTML === x || five.innerHTML === o)
                && (six.innerHTML === x || six.innerHTML === o)
                && (seven.innerHTML === x || seven.innerHTML === o)
                && (eight.innerHTML === x || eight.innerHTML === o)
                && (nine.innerHTML === x || nine.innerHTML === o)) {
                    console.log('tie')
                    if(document.querySelector('.gameover-pop') === null) {
                        
                        let d = document.createElement('div')
                        d.classList.add('gameover-pop')
    
                        let p = document.createElement('p')
                        p.textContent = 'TIE!'
                        
                        let childD = document.createElement('div')
                        let newGameBtn = document.createElement('button')
                        newGameBtn.classList.add('new-game')
                        newGameBtn.setAttribute('onclick', 'btn.newGame()')
                        newGameBtn.textContent = 'New Game'
    
                        let againBtn = document.createElement('button')
                        againBtn.classList.add('again')
                        againBtn.setAttribute('onclick', 'btn.again(this, event)')
                        againBtn.textContent = 'Again'
    
                        childD.appendChild(newGameBtn)
                        childD.appendChild(againBtn)
    
                        d.appendChild(p)
                        d.appendChild(childD)
    
                        container.appendChild(d)
                    }
            }
        })
        return square
    })

    return { container,
        gameBoard, 
        currentPlayer,
        x,
        o, }
})();

// btns module pattern
const btn = (function () {
    // play btn
    const newGame = () => {
        if (document.querySelector('.gameover-pop') !== null) {
            document.querySelector('.gameover-pop').remove()
            console.log('newGame-gameoverpop clicked')
        }

        console.log('newGame clicked')
        document.querySelector('.one').innerHTML = ''
        document.querySelector('.two').innerHTML = ''
        document.querySelector('.three').innerHTML = ''
        document.querySelector('.four').innerHTML = ''
        document.querySelector('.five').innerHTML = ''
        document.querySelector('.six').innerHTML = ''
        document.querySelector('.seven').innerHTML = ''
        document.querySelector('.eight').innerHTML = ''
        document.querySelector('.nine').innerHTML = ''

        document.querySelector('.display-x').innerHTML = ''
        document.querySelector('.display-o').innerHTML = ''

        let f = document.createElement("form")
        f.setAttribute('action', '')
        f.setAttribute('id', 'player-form')

        let d1 = document.createElement('div')
        let l1 = document.createElement('label')
        l1.setAttribute('for', 'player-x')
        l1.textContent = 'PlayerX'
        let i1 = document.createElement('input')
        i1.setAttribute('type', 'text')
        i1.setAttribute('id', 'player-x')
        i1.setAttribute('name', 'player-x')  
        d1.appendChild(l1)
        d1.appendChild(i1)

        let d2 = document.createElement('div')
        let l2 = document.createElement('label')
        l2.setAttribute('for', 'player-o')
        l2.textContent = 'PlayerO'
        let i2 = document.createElement('input')
        i2.setAttribute('type', 'text')
        i2.setAttribute('id', 'player-o')
        i2.setAttribute('name', 'player-o')  
        d2.appendChild(l2)
        d2.appendChild(i2)

        let b = document.createElement('button')
        b.setAttribute('type', 'submit')
        b.setAttribute('form', 'player-form')
        b.setAttribute('onclick', 'btn.letsGo(this, event)')
        b.textContent = "Let's go"
        f.appendChild(d1)
        f.appendChild(d2)
        f.appendChild(b)

        gameFlow.container.appendChild(f)
    }

    // letsGo btn
    const letsGo = (element, event) => {
        event.preventDefault()

        const displayX = document.querySelector('.display-x')
        const displayO = document.querySelector('.display-o')
        const getPlayerX = document.querySelector('input[name="player-x"]')
        const getPlayerO = document.querySelector('input[name="player-o"]')
        
        const playerX = createPlayer(getPlayerX.value)
        const playerO = createPlayer(getPlayerO.value)

        if(getPlayerX.value === '') {
            displayX.innerHTML = 'PlayerX'
        }else {
            displayX.innerHTML = `PlayerX: ${playerX.playerName}`
        }
        if(getPlayerO.value === '') {
            displayO.innerHTML = 'PlayerO'
        }else {
            displayO.innerHTML = `PlayerO: ${playerO.playerName}`
        }

        console.log(displayX, displayO)

        console.log(element.parentNode)
        element.parentNode.remove()
    }


    // restart btn
    const restart = () => {
        document.querySelector('.one').innerHTML = ''
        document.querySelector('.two').innerHTML = ''
        document.querySelector('.three').innerHTML = ''
        document.querySelector('.four').innerHTML = ''
        document.querySelector('.five').innerHTML = ''
        document.querySelector('.six').innerHTML = ''
        document.querySelector('.seven').innerHTML = ''
        document.querySelector('.eight').innerHTML = ''
        document.querySelector('.nine').innerHTML = ''

        console.log('restart clicked')
    }

    // again btn
    const again = (element, e) => {
        document.querySelector('.one').textContent = ''
        document.querySelector('.two').textContent = ''
        document.querySelector('.three').textContent = ''
        document.querySelector('.four').textContent = ''
        document.querySelector('.five').textContent = ''
        document.querySelector('.six').textContent = ''
        document.querySelector('.seven').textContent = ''
        document.querySelector('.eight').textContent = ''
        document.querySelector('.nine').textContent = ''

        console.log('again clicked')

        element.parentNode.parentNode.remove()
    }

    return {newGame, letsGo, restart, again,}
})()

// create player factory function
function createPlayer(player) {
    const playerName = player
    
    return { playerName }
}