const fs = require('fs')

const exp = `2199943210
3987894921
9856789892
8767896789
9899965678`

const floodfill = () => {
    
}


const Answer = (values) => {
    let depth_values = values.split('\r\n').map(line => line.split('').map(char => parseInt(char, 10)))
    // console.table(depth_values[0])
    // let low_point_values = [];
    let basin_array_lengths = [];

    for (let n = 0; n < depth_values.length; n++) {
        for (let j = 0; j < depth_values[n].length; j++) {
            let neighbors = [];
            if (j > 0) {
                neighbors.push(depth_values[n][j - 1])
            }
            if (j < depth_values[n].length - 1) {
                neighbors.push(depth_values[n][j + 1])
            }
            if (n > 0) {
                neighbors.push(depth_values[n - 1][j])
            }
            if (n < depth_values.length - 1) {
                neighbors.push(depth_values[n + 1][j])
            }

            let is_low_point = neighbors.map(neighbor_val => depth_values[n][j] < neighbor_val).reduce((a, b) => a && b);

            if (is_low_point) {
                let basin_array = []
                // low_point_values.push(depth_values[n][j])
                //P2 - if is_low_point do flood fill

            }

        }
        // if (n === 1) {
        //     process.exit()
        // }
    }
    // console.log(low_point_values)
    return low_point_values.reduce((a, b) => a + b) + low_point_values.length
    // return low_point_values
}

// data = fs.readFileSync('aoc/c1/public/values.txt', 'UTF8')
console.log(Answer(fs.readFileSync('values.txt', 'UTF8')));
// console.log(typeof(data));