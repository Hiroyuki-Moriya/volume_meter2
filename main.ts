input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.soundLevel())
    basic.pause(100)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Happy)
})
let Vmin = 0
input.setSoundThreshold(SoundThreshold.Quiet, Vmin)
let Vmax = 16
input.setSoundThreshold(SoundThreshold.Loud, Vmax)
