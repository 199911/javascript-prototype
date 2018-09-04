// Reference: http://2ality.com/2015/10/intercepting-method-calls.html

const Duck = require('./Duck.js');
const traceMethodCalls = require('./traceMethodCalls.js');

const duck = new Duck();
duck.fly();
duck.quack();

const tracedDuck = traceMethodCalls(duck);
tracedDuck.fly();
tracedDuck.quack();
