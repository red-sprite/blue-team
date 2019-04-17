
const host = "127.0.0.1"

// shoot(x, y, callback)
// calls strike({x, y})

const allowStrike = true;

function pollForStrikes() {
    if (allowStrike) {
        fetch(host).then((resp) => {
            setTimeout(pollForStrikes, 800)
            if (resp.ok) {
                return resp.text()
            }
        }).then((body) => {
            strike(cord2xy(body))
        })
    } else {
        setTimeout(pollForStrikes, 800)
    }
}

// Listen for strikes
pollForStrikes()

function shoot(x, y, callback) {
    const regexReply = /(\w)(\d)=(\w)/;
    fetch({ method: "POST", body: xy2Cord(x, y) }).then(() => {
        for (const i = 0; i < 10; i++) {
            setTimeout(fetch(host).then((resp) => {
                if (resp.ok) {
                    return resp.text();
                }
            }).then((body) => {
                const m = regexReply.exec(body)
                if (m) {
                    callback(m[0], m[1].charCodeAt(0) - 65, m[2]);
                }
            }), 1000)
        }
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