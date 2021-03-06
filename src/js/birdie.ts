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
    maxAnimationStep: 0,
    animationStep: 0,
    counterInterval: 0,
    maxInterval: 5,
    fallSpeed: 0,
    maxFallSpeed: 7,
    init(game: any) {
        this.game = game
        this.y = (this.game.canvas.height - ground.frame.sh) / 2
        this.x = this.width
        this.maxAnimationStep = this.frames.length - 1
    },
    update() {
        if (this.game.hasStarted) {
            if (this.fallSpeed < this.maxFallSpeed) {
                this.fallSpeed += this.game.gravity
            }
            this.y += this.fallSpeed
            this.checkGroundCollision()
            this.checkTubesCollision()
        }
        this.render()
    },

    render() {
        this.counterInterval++
        if (!(this.counterInterval % this.maxInterval)) {
            this.counterInterval = 0
            this.animationStep = (this.animationStep < this.maxAnimationStep) ? this.animationStep + 1 : 0
        }
        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.y)
        this.game.ctx.rotate(this.fallSpeed / this.maxFallSpeed)
        this.game.renderSpriteFrame({
            sx: this.frames[this.animationStep].sx,
            sy: this.frames[this.animationStep].sy,
            sw: this.width,
            sh: this.height,
            dx: -this.width / 2,
            dy: -this.height / 2,
            dw: this.width,
            dh: this.height,
        })
        this.game.ctx.restore()
    },

    goUp() {
        this.fallSpeed = -this.maxFallSpeed * 1.2
    },

    checkGroundCollision() {
        if (this.y + this.height / 2 > ground.frame.dy) {
            this.y = ground.frame.dy - this.height / 2
            this.fallSpeed = -this.maxFallSpeed
        }
    },

    checkTubesCollision() {
        this.game.tubePairs.forEach((tubePair: { x: number; width: number; height: number; yTop: number; yBottom: number;}) => {
            if ((this.x + this.width / 2) > tubePair.x && (this.x - this.width / 2) < tubePair.x + tubePair.width) {
                if ((this.y - this.height / 2) < tubePair.yTop + tubePair.height || (this.y + this.height / 2) > tubePair.yBottom) {
                    this.game.cancelAnimation()
                }
            }
        })
    },
}

export default birdie