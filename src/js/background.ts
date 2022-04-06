const background = {
    frame: {
        sx: 0,
        sy: 0,
        sw: 0,
        sh: 0,
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0,
    },
    init(game: any) {
        this.game = game;
    },
    update() {
        this.game.renderSpriteFrame(this.frame)
        this.frame.dw = this.game.canvas.width
        this.frame.dh = this.game.canvas.height
        this.frame.sw = this.game.canvas.width
        this.frame.sh = this.game.canvas.height
    }
}

export default background