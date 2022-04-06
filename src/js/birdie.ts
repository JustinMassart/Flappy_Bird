import ground from './ground';

const birdie = {
    frames: [
        {
            sx: 6,
            sy: 982,
        },
        {
            sx: 62,
            sy: 982,
        },
        {
            sx: 118,
            sy: 982,
        }
    ],
    width: 34,
    height: 24,
    x: 0,
    y: 0,
    maxAnimationStep: 3,
    fallSpeed: 0,
    maxFallSpeed: 7,
    init(game: any) {
        this.game = game
        this.y = (this.game.canvas.height - ground.frame.sh) / 2
        this.x = this.width

    },
    update() {
        this.render()
    },

    render() {
        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.y)
        this.game.ctx.rotate(0)
        this.game.renderSpriteFrame({
            sx: this.frames[0].sx,
            sy: this.frames[0].sy,
            sw: this.width,
            sh: this.height,
            dx: -this.width / 2,
            dy: -this.height / 2,
            dw: this.width,
            dh: this.height,
        })
        this.game.ctx.restore()
    }
}

export default birdie