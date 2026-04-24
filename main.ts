/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Apr 2026
 * This program will send "Too close!" to another micro:bit
*/

// initialize radio
radio.setGroup(153)

// initialize display
basic.showIcon(IconNames.Happy)

// initialize variables
let distance: number = -1

// initialize display
basic.showIcon(IconNames.Happy)

// handle button A press
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Triangle)
    while (true) {
        // calculate distance
        distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

        // send message to receiving micro:bit
        if (distance > 0 && distance < 10) {
            radio.sendString("Too close!")
        }  
    }
})
