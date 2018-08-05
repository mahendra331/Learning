var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log('Completing Task: ' + this.name);
  this.completed = true;
}

Task.prototype.save = function() {
  console.log('Saving Task: ' + this.name);
}

var abc ='abc';

// var task1 = new Task('Creating task for constructors');
// var task2 = new Task('Creating task for modules');
// var task3 = new Task('Creating task for singletons');
// var task4 = new Task('Creating task for prototypes');

// task1.complete();
// task2.save();
// task3.save();
// task4.save();
module.exports = Task;
module.exports.abc = abc;
