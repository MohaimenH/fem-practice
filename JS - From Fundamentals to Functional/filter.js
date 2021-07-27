let _ = {};

_.filter = (list, callback) => { // Returns NEW array/object, no mutations, thus pure function.
    let result;

    if (Array.isArray(list)) {
        result = [];
        for (let i = 0; i < list.length; i++) {
            if (callback(list[i], i, list)) result.push(list[i]);
        }
    }
    
    else {
        result = {};
        for (let i in list) {
            if (callback(list[i], i, list)) result[i] = list[i];
        }
    }

    return result;
}

let arr = [1,2,3];
let obj = {id1: 1, id2: 2, id3: 3};

console.log(_.filter(arr, (elem) => elem == 2 || elem == 3));
console.log(_.filter(obj, (elem) => elem == 2 || elem == 3));

console.log({arr, obj});
