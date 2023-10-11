/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Oct 2023
 * This program plays "Rock - Paper - Scissors" on Micro:Bit
*/

let score: number

score = score + 1



input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Logic stuff below
/*
let randomNumber: number = 0

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(1, 3)
    basic.clearScreen()

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Scissors)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Square)
        
    }
   
    // if randomNumber was 3
    if (randomNumber == 3) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
        
    }

    // pasue and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
*/