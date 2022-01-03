const fs = require('fs')
let count = {};

const Answer = (values) => {

    const insertions = values.split('\r\n');
    let ans = insertions.splice(0,1)[0].split('');
    // console.log(ans)

    for (let n = 0; n < 10; n++){
        for (let j = 0; j < ans.length; j++){

            let pair = ans[j] + ans[j+1]

            for (let k = 0; k < insertions.length; k++){
                if (pair === insertions[k].slice(0,2)){
                    ans.splice(j+1, 0, insertions[k].slice(6,7));
                    j++;
                }
            }
        }
    }

    for (let n = 0; n < ans.length; n++){
        if (count[ans[n]]){
            count[ans[n]]++
        }
        else{
            count[ans[n]] = 1;
        }
    }
    // console.log(ans)
    // console.log(ans.length)
    console.log(count)
}



const example = fs.readFileSync('values_example.txt', 'UTF8')

const vals = fs.readFileSync('values.txt', 'UTF8')

Answer(vals)