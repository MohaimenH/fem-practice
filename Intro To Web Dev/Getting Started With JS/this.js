let a = {
    name: 'Mohaimen',
    address: {
        house: '3',
        getter() {
            return this.house;
        }
    },
}

console.log(a.address.getter());