let latters = new Set(['a','b']);
latters.add('c');
latters.add('d');
latters.add('d');
let a = 5;
latters.add(a)

let text = '';
latters.forEach(function(value){
    text += value +' '
})
latters.delete('d')
latters.has('c');
console.log(latters.has('c'))
document.getElementById('demo').innerHTML = text
console.log(latters)