function handleResize(){
    const c = document.getElementById("gameCanvas");
    const ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth*0.5;
    ctx.canvas.height = window.innerHeight*0.5;
}

function drawStage(){
    const c = document.getElementById("gameCanvas");
    const ctx = c.getContext("2d");
    width  = c.width;
    height = c.height;

    ctx.beginPath();
    ctx.rect(0, 0, 150, 100);
    ctx.stroke();

}

function game(gameRunning){
    drawStage();
    while(gameRunning){

    }

    //context.clearRect(0, 0, canvas.width, canvas.height);

}