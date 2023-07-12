var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
var input = document.getElementById('input')

input.addEventListener('input', e => {
    e.preventDefault()
    QRCode.toCanvas(canvas, e.target.value, function (error) {
        if (error) console.error(error)
    })
})
