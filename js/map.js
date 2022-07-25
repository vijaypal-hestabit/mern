let latters = new Map([[1, 'a'], [2, 'b']]);
latters.set(3, 'c');
latters.set(4, 'd');
latters.set(5, 'd');


let text = '';
latters.forEach(function (value, key) {
    text += key + '=' + value + '<br>'
})
// latters.delete('d')
// latters.has('c');
// console.log(latters.has('c'))
document.getElementById('demo').innerHTML = text
document.getElementById('demo2').innerHTML = latters.get(2)

console.log(latters.entries())