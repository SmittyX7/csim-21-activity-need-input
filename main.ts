basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("Hello!")
    } else {
        images.createBigImage(`
            . # . . # . . . . .
            # # . # . . . . . .
            . # # # . . . . . .
            . # . # . . . . . .
            . # . # . . . . . .
            `).scrollImage(1, 200)
        basic.clearScreen()
        basic.pause(100)
    }
})
