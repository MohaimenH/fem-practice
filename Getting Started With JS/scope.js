const printer = () => {
    var b = 2;
    {
        let a = 3;
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

printer();