let _ = {};

_.each = (list, callback) => { // Each does it in-place, so not a pure function.
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            list[i] = callback(list[i], i, list);
        }
    }
    
    else {
        for (let i in list) {
            list[i] = callback(list[i], i, list);
        }
    }
}

// console.log(_.each([1,2,3], (elem) => elem ** 2));
// console.log(_.each({id1: 1, id2: 2, id3: 3}, (elem) => elem ** 2));

let arr = [1,2,3];
let obj = {id1: 1, id2: 2, id3: 3};

_.each(arr, (elem) => elem ** 2);
_.each(obj, (elem) => elem ** 2);

console.log({arr, obj});