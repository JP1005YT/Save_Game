const player_ele = document.getElementById('player')
let player_status = {
    velocidade:1,
    posX:0,
    posY:0,
    isLeft:false,
    isRight:false,
    isTop:false,
    isBottom:false
}
setInterval(time => {
    AtualizaPlayer()
    Check()
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


function AtualizaPlayer(){
    player_ele.style.top = `${player_status.posY}px`
    player_ele.style.left = `${player_status.posX}px`
}

function Check(){
    if(player_status.isTop){
        player_status.posY -= player_status.velocidade
    }
    if(player_status.isLeft){
        player_status.posX -= player_status.velocidade
    }
    if(player_status.isRight){
        player_status.posX += player_status.velocidade
    }
    if(player_status.isBottom){
        player_status.posY += player_status.velocidade
    }
}