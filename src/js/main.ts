import gameController from './gameController';
import background from './background';
import TubesPair from './TubesPair';
import ground from './ground';
import birdie from './birdie';

const game = {
    btn: document.getElementById('flap'),
    gravity: 0.91,
    hasStarted: false,
// @ts-ignore
    tubePairs: [],
    frameCounter: 0,
    frameInterval: 80,
    maxTubesPairs: 3,
    requestId: 0,
    init() {
        this.canvas = document.getElementById('game')
        this.ctx = this.canvas.getContext('2d')
        this.spriteSheetSrc = './src/resources/sprite.png'
        this.sprite = new Image()
        this.sprite.src = this.spriteSheetSrc
        this.sprite.addEventListener('load', () => {
            gameController.init(this)
            background.init(this)
            ground.init(this)
            birdie.init(this)
            this.animate()
        })
    },

    animate() {
        this.requestId = window.requestAnimationFrame(() => {
            this.animate()
        })
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        background.update()
        if (this.hasStarted) {
            if (this.frameCounter++ > this.frameInterval) {
                if (this.tubePairs >= this.maxTubesPairs) {
                    this.tubePairs.splice(0, 1)
                }
                this.tubePairs.push(new TubesPair(this))
                this.frameCounter = 0
            }
            this.tubePairs.forEach((tubePair: { update: () => void; }) => {
                tubePair.update()
            })
        }

        ground.update()
        birdie.update()
    },

    renderSpriteFrame(coordinates: {
                          sx: any;
                          sy: any;
                          sw: any;
                          sh: any;
                          dx: any;
                          dy: any;
                          dw: any;
                          dh: any;
                      }
    ) {
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
    },

    cancelAnimation() {
        window.cancelAnimationFrame(this.requestId)
    }
}

game.init()
