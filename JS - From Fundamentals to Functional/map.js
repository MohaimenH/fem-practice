let _ = {};

_.map = (list, callback) => { // Returns NEW array/object, no mutations, thus pure function.
    let result;

    if (Array.isArray(list)) {
        result = [];
        for (let i = 0; i < list.length; i++) {
            result[i] = callback(list[i], i, list);
        }
    }
    
    else {
        result = {};

        for (let i in list) {
            result[i] = callback(list[i], i, list);
        }
    }

    return result;
}

let arr = [1,2,3];
let obj = {id1: 1, id2: 2, id3: 3};

console.log(_.map(arr, (elem) => elem ** 2));
console.log(_.map(obj, (elem) => elem ** 2));

console.log({arr, obj});
