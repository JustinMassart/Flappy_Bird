const ground = {
    frame: {
        sx: 584,
        sy: 0,
        sw: 336,
        sh: 112,
        dx: 0,
        dy: 0,
        dw: 336,
        dh: 112,
    },
    speed: 3,
    maxOffset: 0,
    init(game: any) {
        this.game = game;
        this.maxOffset = this.frame.sw - this.game.canvas.width
        this.frame.dy = this.game.canvas.height - this.frame.sh;

    },
    update() {
        this.game.renderSpriteFrame(this.frame)
        this.frame.dx -= this.speed
        if (this.frame.dx <= -this.maxOffset) {
            this.frame.dx = 0;
        }
    }
}

export default ground