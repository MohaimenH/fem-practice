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

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let result = _.map(_.filter(videoData, (person) => person.present == true), (person) => person.name);

