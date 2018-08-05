var Task = require('./prototype');

var task1 = new Task('Creating task for constructors');
var task2 = new Task('Creating task for modules');
var task3 = new Task('Creating task for singletons');
var task4 = new Task('Creating task for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
console.log(Task.abc);