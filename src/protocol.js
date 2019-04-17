
const host = "http://192.168.8.101:3300/rsbs/v1/"

// shoot(x, y, callback)
// calls strike({x, y})

export class protocol {
    constructor(hitCB) {
        this.hitCB = hitCB
        this.shootCB = null;
        this.pollStatus()
    }

    pollStatus = () => {
        fetch(host + "status?team=blue").then((resp) => {
            setTimeout(this.pollStatus, 800)
            if (resp.ok) {
                return resp.json()
            }
        }).then((m) => {
            switch (m.status) {
                case "P":
                // Pending - nothing to do
                case "T":
                    if (this.hitCB) this.hitCB(cord2xy(m.cell))
                default:
                    if (this.shootCB) {
                        const xy = cord2xy(m.cell);
                        this.shootCB(xy[0], xy[1], m.status)
                    }
            }
        }).catch((e) => {
            console.log("Poll error", e)
            setTimeout(this.pollStatus, 800)
        })
    };

    Shoot = (x, y, callback) => {
        const regexReply = /(\w)(\d)=(\w)/;
        fetch({ method: "POST", body: {team:"blue", cell: xy2Cord(x, y), status: "T"}}).then((resp) => {
            if (!resp.ok) {
                callback(null)
            }
            this.shootCB = callback
        })
    }
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