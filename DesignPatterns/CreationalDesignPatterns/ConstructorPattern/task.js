var Task = function(name) {
  this.name = name;
  this.completed = false;
  this.complete = function() {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
  }
  this.save = function() {
    console.log('Saving Task: ' + this.name);
  }
}


// We can move this to main.js and export this module
/* 
var task1 = new Task('Creating task for constructors');
var task2 = new Task('Creating task for modules');
var task3 = new Task('Creating task for singletons');
var task4 = new Task('Creating task for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
*/
module.exports = Task;
// It maintains separate scopes for 'this' in each task 
