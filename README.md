# cps
Chromatic Pitch Shifter - Take in an mp3 file and shift its pitch chromatically for as many octaves as you'd like

## Installation
Install `sox`, run `npm init`

## Use

Run `node index.js` to run the program. Input the file's name, and the amount of half steps up and half steps down that you'd like.

The files will generate as `yourfilename_halfsteps.yourfileextension` where halfsteps is the number of halfsteps shifted. For instance, `test.wav` shifted up 3 half steps would be `test_3.wav` and `test.wav` shifted down 3 half steps would be `test_-3.wav`