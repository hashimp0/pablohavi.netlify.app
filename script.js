const inputBox = document.getElementById('inputBox');
const searchBtn = document.getElementById('btn');

let students = new Map();

students.set(1,{
    name: 'Fahmudheen',
    rollNo: 1,
    place: 'Kozhikode'
})

students.set(2, {
    name: 'Ubaidullah',
    rollNo: 2,
    place: 'Malappuram',
})

students.set(3, {
    name: 'Murshid',
    rollNo: 3,
    place: 'Malappuram',
})

students.set(4, {
    name: 'Badusha',
    rollNo: 4,
    place: 'Malappuram',
})

students.set(5, {
    name: 'Shamal',
    rollNo: 5,
    place: 'Malappuram',
});

let userInput = inputBox.value;
console.log(userInput)