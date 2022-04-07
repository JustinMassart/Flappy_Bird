import birdie from "./birdie";

const gameController = {
    init(game: any) {
        window.addEventListener('keydown', (e) => {
                if (e.key === 'j') {
                    if (!game.hasStarted) {
                        game.hasStarted = true
                    }
                    birdie.goUp()
                }
            }
        )
        window.addEventListener('touchstart', (e) => {
                if (e.touches) {
                    if (!game.hasStarted) {
                        game.hasStarted = true
                    }
                    birdie.goUp()
                }
            }
        )
    }

}

export default gameController