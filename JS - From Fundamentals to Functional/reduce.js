let _ = {};

_.reduce = (list, callback, initial) => {
    let result = initial || list[0];

    for (let i = 0; i < list.length; i++) {

        if (i == 0 && !!memo) {
            memo = list[0];
            i++;
        }

        else {
            result = callback(list[i], currentValue);
        }

    }
    return result;
};  
