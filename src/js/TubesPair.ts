export default class TubesPair {
    x: number;
    game: any;
    speed: number;
    yTop: number;
    yBottom: number;
    width: number;
    height: number;
    tubeTopFrame: { sx: number; sy: number; sw: number; sh: number; dx: number; dy: number; dw: number; dh: number; };
    tubeBottomFrame: { sx: number; sy: number; sw: number; sh: number; dx: number; dy: number; dw: number; dh: number; };
    spaceBetweenTubes: number;
    minSpaceBetweenTubes: number;
    maxSpaceBetweenTubes: number;

    constructor(game: any) {
        this.game = game
        this.x = this.game.canvas.width;
        this.minSpaceBetweenTubes = 90
        this.maxSpaceBetweenTubes = 120
        this.spaceBetweenTubes = Math.floor(this.minSpaceBetweenTubes + Math.random() * (this.maxSpaceBetweenTubes - this.minSpaceBetweenTubes))
        this.speed = 2.8
        this.width = 52
        this.height = 317
        this.yTop = -Math.floor(Math.random() * 280) - 25
        this.yBottom = this.yTop + this.height + this.spaceBetweenTubes
        this.tubeTopFrame = {
            sx: 113,
            sy: 647,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        }
        this.tubeBottomFrame = {
            sx: 168,
            sy: 647,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        }
    }

    update() {
        this.x -= this.speed
        this.render()
    }

    render() {
        // Tube du haut
        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.yTop)
        this.game.renderSpriteFrame(this.tubeTopFrame)
        this.game.ctx.restore()
        // Tube du bas
        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.yBottom)
        this.game.renderSpriteFrame(this.tubeBottomFrame)
        this.game.ctx.restore()
    }

}