
const host = "http://192.168.8.101:3300/rsbs/v1/"

// shoot(x, y, callback)
// calls strike({x, y})

let shootCB = null;

function pollStatus() {
    fetch(host + "status").then((resp) => {
        setTimeout(pollStatus, 800)
        if (resp.ok) {
            return resp.json()
        }
    }).then((m) => {
        switch (m.status) {
            case "P":
                // Pending - nothing to do
            case "T":
                strike(cord2xy(m.cell))
            default:
                if (shootCB) {
                    const xy = cord2xy(m.cell);
                    shootCB(xy[0], xy[1], m.status)
                }
        }
    })
}

pollStatus()

function shoot(x, y, callback) {
    const regexReply = /(\w)(\d)=(\w)/;
    fetch({ method: "POST", body: xy2Cord(x, y) }).then((resp) => {
        if (!resp.ok) {
            callback(null)
        }
        shootCB = callback
    })
}

function xy2Cord(x, y) {
    return (x + 1) + String.fromCharCode(y + 1)
}

function cord2xy(cord) {
    const regexCord = /(\w)(\d)/;
    const m = regexCord.exec(cord)
    if (m) {
        return {
            x: m[0],
            y: m[1].charCodeAt(0) - 65,
        }
    }
}