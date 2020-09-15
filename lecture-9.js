const person = {
    name: 'Ariful Islam',
    phone: '01621090819',
    gfName: 'Moly',
    address: 'Mugda',
    frnds: ['mithu', 'sazid', 'wasim', 'siraj'],
    play: 'cricket',

}


// const name = person.name;
// const address = person.address;

const { name, gfName, play, address } = person

console.log('Name: ', name, 'GF: ', gfName, 'Play: ', play, 'Address: ', address);