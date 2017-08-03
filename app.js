console.log('module intro');
var kitties = require('./kitties.js');
var adder = require('./summerator.js')

console.log(kitties.greeting);

for (var i = 0; i < kitties.kittenList.length; i++) {
    var kitty = kitties.kittenList[i];
    console.log(kitty.name + '\'s' +
        ' fur ' + 'color ' + 'is ' + kitty.furColor);
}

console.log(adder([1, 2, 3, 4]));
console.log(adder([1, 2, 3, 4, 5, 6, 7]));