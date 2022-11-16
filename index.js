// code your solution here

// function superbowlWin(record) {
//     const yearObj= record.find(obj => obj.result === 'W') 
//     console.log (yearObj)
//     if (yearObj === undefined) {
//         return undefined 
//     }
//     return yearObj.year 
// }

function superbowlWin(array){
    for (const object of array)
    if (object.result === "W"){
        return object.year
    }
}

record.find(superbowlWin)