const fs = require('fs')

const Answer = (values) => {

    let coordinates = values.split('\r\n')
    let vents = []
    let xmax = 0;
    let ymax = 0;
    let overlapscount = 0;

    for (let n = 0; n < coordinates.length; n++){

        let x_vals = coordinates[n].match(/[0-9]+(?=,)/g).map(val=>parseInt(val))
        let y_vals = coordinates[n].match(/(?<=,)[0-9]+/g).map(val=>parseInt(val))

        if (x_vals[0] > xmax){
            xmax = x_vals[0]
        }
        else if (x_vals[1] > xmax){
            xmax = x_vals[1]
        }
        if (y_vals[0] > ymax){
            ymax = y_vals[0]
        }
        else if (y_vals[1] > ymax){
            ymax = y_vals[1]
        }
    }

    for (let x = 0; x <= xmax; x++){
        vents.push([])
        for (let y = 0; y <= ymax; y++){
            vents[x].push(0)
        }
    }

    // console.log(xmax, ymax)

    for (let n = 0; n < coordinates.length; n++){
        let x_vals = coordinates[n].match(/[0-9]+(?=,)/g).map(val=>parseInt(val))
        let y_vals = coordinates[n].match(/(?<=,)[0-9]+/g).map(val=>parseInt(val))

        // console.log(x_vals, y_vals)
        
        if (x_vals[0] !== x_vals[1] && y_vals[0] !== y_vals[1]){
            
            // console.log(x_vals, y_vals)

            if (x_vals[0] > x_vals[1]){
                if (y_vals[0] > y_vals[1]){
                    for (let j = x_vals[1]; j <= x_vals[0]; j++){
                        let k = j - x_vals[1];
                        vents[j][y_vals[1]+k]++
                    }
                }
                else {
                    for (let j = x_vals[1]; j <= x_vals[0]; j++){
                        let k = j - x_vals[1];
                        vents[j][y_vals[1]-k]++
                    }
                }
            }
            else {
                if (y_vals[0] > y_vals[1]){
                    for (let j = x_vals[0]; j <= x_vals[1]; j++){
                        let k = j - x_vals[0];
                        vents[j][y_vals[0]-k]++
                    }
                }
                else {
                    for (let j = x_vals[0]; j <= x_vals[1]; j++){
                        let k = j - x_vals[0];
                        vents[j][y_vals[0]+k]++
                    }
                }
            }
            // continue;
            // process.exit()
        }
        else if (x_vals[0] === x_vals[1]){
            if (y_vals[0] > y_vals[1]){
                for (let j = y_vals[1]; j <= y_vals[0]; j++){
                    vents[x_vals[0]][j]++
                }
            }
            else {
                for (let j = y_vals[0]; j <= y_vals[1]; j++){
                    vents[x_vals[0]][j]++
                }
            }
        }
        else {
            if (x_vals[0] > x_vals[1]){
                for (let j = x_vals[1]; j <= x_vals[0]; j++){
                    vents[j][y_vals[0]]++
                }
            }
            else {
                for (let j = x_vals[0]; j <= x_vals[1]; j++){
                    vents[j][y_vals[0]]++
                }
            }
        }

        // console.log(x_vals, y_vals)
        // process.exit()
    }

    vents.forEach(array=>{
        array.forEach(val=>{
            if (val > 1){
                overlapscount++
            }
        })
    })

    // console.table(vents)
    console.log(overlapscount)

}

const example = fs.readFileSync('values_example.txt', 'UTF8')

const vals = fs.readFileSync('values.txt', 'UTF8')

Answer(vals)