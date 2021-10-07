input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Asleep)
    basic.showNumber(input.soundLevel())
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showNumber(input.soundLevel())
    basic.pause(100)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Angry)
    basic.showNumber(input.soundLevel())
    basic.pause(100)
})
let Vmin = 0
input.setSoundThreshold(SoundThreshold.Quiet, Vmin)
let Vmax = 16
input.setSoundThreshold(SoundThreshold.Loud, Vmax)
