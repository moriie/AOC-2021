const fs = require('fs')

const Answer = (values) => {

    let flashes = 0;
    let octopi = values.split('\r\n').map(val=>val.split('').map(val=>parseInt(val)))
    let flashed = octopi.map(row=>row.map(val=>false))

    const Flash = (row, col) => {
        if (!flashed[row][col]){
            flashed[row][col] = true;
            if (row > 0){
                octopi[row-1][col]++
                if (octopi[row-1][col] > 9){
                    Flash(row-1, col)
                }
            }
            if (row < octopi.length-1){
                octopi[row+1][col]++
                if (octopi[row+1][col] > 9){
                    Flash(row+1, col)
                }
            }
            if (col > 0){
                octopi[row][col-1]++
                if (octopi[row][col-1] > 9){
                    Flash(row, col-1)
                }
            }
            if (col < octopi[row].length-1){
                octopi[row][col+1]++
                if (octopi[row][col+1] > 9){
                    Flash(row, col+1)
                }
            }
            if (row > 0 && col > 0){
                octopi[row-1][col-1]++
                if (octopi[row-1][col-1] > 9){
                    Flash(row-1, col-1)
                }
            }
            if (row > 0 && col < octopi[row].length-1){
                octopi[row-1][col+1]++
                if (octopi[row-1][col+1] > 9){
                    Flash(row-1, col+1)
                }
            }
            if (row < octopi.length-1 && col > 0){
                octopi[row+1][col-1]++
                if (octopi[row+1][col-1] > 9){
                    Flash(row+1, col-1)
                }
            }
            if (row < octopi.length-1 && col < octopi[row].length-1){
                octopi[row+1][col+1]++
                if (octopi[row+1][col+1] > 9){
                    Flash(row+1, col+1)
                }
            }
        }

    }

    for (let n = 0; n < 100; n++){

        let allflashed = true;

        for (let j = 0; j < octopi.length; j++){
            for (let k = 0; k < octopi[j].length; k++){
                octopi[j][k]++
                if (octopi[j][k] > 9) {
                    Flash(j, k)
                }
            }
        }

        //Part 2 set n to whatever number, uncomment below commented code.

        // for (let j = 0; j < octopi.length; j++){
        //     for (let k = 0; k < octopi[j].length; k++){
        //         if (flashed[j][k] === false){
        //             allflashed = false;
        //         }
        //     }
        // }
        // if (allflashed){
        //     console.log(n)
        // }

        for (let j = 0; j < octopi.length; j++){
            for (let k = 0; k < octopi[j].length; k++){
                if (octopi[j][k] > 9){
                    octopi[j][k] = 0
                    flashes++
                }
                flashed[j][k] = false;
            }
        }
    }

    // console.log(flashes)
}



const example = fs.readFileSync('values_example.txt', 'UTF8')

const vals = fs.readFileSync('values.txt', 'UTF8')

Answer(vals)