import background from './background';
import ground from './ground';
import birdie from './birdie';

const game = {
    init() {
        this.canvas = document.getElementById('game')
        this.ctx = this.canvas.getContext('2d')
        this.spriteSheetSrc = './src/resources/sprite.png'
        this.sprite = new Image()
        this.sprite.src = this.spriteSheetSrc
        this.sprite.addEventListener('load', () => {
            background.init(this)
            ground.init(this)
            birdie.init(this)
            this.animate()
        })
    },

    animate() {
        window.requestAnimationFrame(() => {
            this.animate()
        })
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        background.update()
        ground.update()
        birdie.update()
    },

    renderSpriteFrame(coordinates: { sx: any; sy: any; sw: any; sh: any; dx: any; dy: any; dw: any; dh: any; }) {
        this.ctx.drawImage(this.sprite,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,
        )
    }
}

game.init()