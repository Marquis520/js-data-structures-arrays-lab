// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']
beforeEach(function () {
    drivers.length = 0;

    drivers.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyAppendDriver(){
    drivers.push('Ralph');
}
function destructivelyPrependDriver(){
    drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(){
    drivers.pop();
}
function destructivelyRemoveFirstDriver(){
    drivers.shift();
}
function appendDriver(name){
    const newDrivers = [...drivers, name];
        return newDrivers;
}
function prependDriver(name){
    const newDrivers = [name, ...drivers]
        return newDrivers;
}
function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1);
}
function removeFirstDriver(){
    return drivers.slice(1);
}