let name = []
name[0] = 'Vijay';
name[1] = 'Raj';
name['2'] = 'Ashish'

// document.getElementById('demo').innerHTML = Array.isArray(name);

// tostring
document.getElementById('demo').innerHTML = name.toString();
document.getElementById('demo').innerHTML = name.join(' * ');

// remove last element
let a =document.getElementById('demo').innerHTML = name.pop();
// document.getElementById('demo').innerHTML = name;

// remove first element
document.getElementById('demo').innerHTML = name.shift();
document.getElementById('demo').innerHTML = name;

// add element
document.getElementById('demo').innerHTML = name.push('Ajay kumar');
document.getElementById('demo').innerHTML = name;



