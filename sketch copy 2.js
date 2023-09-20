
let eDiam = 50

function setup() {
    createCanvas(600, 600)
}
function draw() {
    background(200, 200, 200)
    fill("pink")

    ellipse(0, 0, eDiam, eDiam)

    ellipse(eDiam, 0, eDiam, eDiam)

    ellipse(2*eDiam, 0, eDiam, eDiam)

    ellipse(3*eDiam, 0, eDiam, eDiam)

    ellipse(0, eDiam, eDiam, eDiam)

    ellipse(0, 2*eDiam, eDiam, eDiam)

}

