"""
Created by: Dat Nguyen
Created on: Apr 2026
This module will recieve radio messages
"""

from microbit import *
import radio


# initialize display
display.clear()
display.show(Image.HAPPY)

# initialize radio
radio.on()
radio.config(group=153)

# main loop
while True:
    # get message
    message = radio.receive()

    # check if message is not None
    if message is not None:
        # display message
        display.clear()
        display.scroll(str(message))

    # reset display
    display.show(Image.HAPPY)
