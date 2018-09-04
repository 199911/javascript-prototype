// Reference: http://2ality.com/2015/10/intercepting-method-calls.html

const Duck = require('./Duck.js');
const traceMethodCalls = require('./traceMethodCalls.js');

const duck = new Duck();
console.log(`I am ${duck.name}`);
console.log(`I am ${duck.getName()}`);
duck.fly();
duck.quack();

const tracedDuck = traceMethodCalls(duck);
// This print the function return by proxy getter, it means function call is
// get object method as a object variable -> call the function got
// Therefore, the method call will trigger handler's get method
console.log(`I am ${tracedDuck.name}`);
console.log(`I am ${tracedDuck.getName()}`);
tracedDuck.fly();
tracedDuck.quack();
