const game_screen = document.getElementById('game')
const player_ele = document.getElementById('player')
let player_status = {
    score:0,
    velocidade:5,
    posX:0,
    posY:0,
    isLeft:false,
    isRight:false,
    isTop:false,
    isBottom:false
}
let spawner = true
setInterval(time => {
    AtualizaPlayer()
    Check()
    SpawnEnemy()
},10)

addEventListener("keydown",tecla => {
    console.log(tecla.key)
    switch (tecla.key) {
        case "ArrowUp":
            player_status.isTop = true
            break;
        case "ArrowDown":
            player_status.isBottom = true
            break;
        case "ArrowLeft":
            player_status.isLeft = true
            break;
        case "ArrowRight":
            player_status.isRight = true
            break;
        default:
            break;
    }
})
addEventListener("keyup",tecla => {
    console.log(tecla.key)
    switch (tecla.key) {
        case "ArrowUp":
            player_status.isTop = false
            break;
        case "ArrowDown":
            player_status.isBottom = false
            break;
        case "ArrowLeft":
            player_status.isLeft = false
            break;
        case "ArrowRight":
            player_status.isRight = false
            break;
        default:
            break;
    }
})

function SpawnEnemy(){
    if(spawner=== true){
        let enemy = document.createElement('div')
        enemy.setAttribute("id","inimigo")
        enemy.style.top = Math.random() * game_screen.clientHeight + "px"
        enemy.style.left = Math.random() * game_screen.clientWidth + "px"
        game_screen.appendChild(enemy)
        spawner = false
    }
}

function AtualizaPlayer(){
    // document.querySelector('h1').innerHTML = `Pontos:${player_status.score}`
    player_ele.style.top = `${player_status.posY}px`
    player_ele.style.left = `${player_status.posX}px`
    console.log(`X=${player_status.posX} - Y=${player_status.posY}`)
}

function Check(){
    if(player_status.isTop){
        if(player_status.posY > 0){
            player_status.posY -= player_status.velocidade
        }
    }
    if(player_status.isLeft){
        if(player_status.posX > 0){
            player_status.posX -= player_status.velocidade
        }
    }
    if(player_status.isRight){
        if(player_status.posX < game_screen.clientWidth - 50){
            player_status.posX += player_status.velocidade
        }
    }
    if(player_status.isBottom){
        if(player_status.posY < game_screen.clientHeight - 50){
        player_status.posY += player_status.velocidade
        }
    }
}