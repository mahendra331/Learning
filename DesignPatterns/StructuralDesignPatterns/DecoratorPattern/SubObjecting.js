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

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = function(name, priority) {
  Task.call(this,name);
  this.priority = priority;
}

urgentTask.prototype = Object.create(Task.prototype);
urgentTask.prototype.notify = function() {
  console.log('Notifying People');
}

urgentTask.prototype.save = function() {
  this.notify();
  console.log('Do some special stuff');
  Task.prototype.save.call(this);
}
var ut = new urgentTask('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);