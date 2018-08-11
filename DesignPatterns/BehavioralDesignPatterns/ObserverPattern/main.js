var Task = require('./task');

var notificationService = function() {
  var message = 'Notifying ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var loggingService = function() {
  var message = 'Logging ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}

var auditingService = function() {
  var message = 'Auditing ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  this.observerList.push(obj);
}

ObserverList.prototype.get = function(index) {
  if(index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
}

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
}

ObserverList.prototype.indexOf = function(obj, start) {
  var i = start;
  while (i < this.observerList.length) {
    if(this.observerList[i] ===  obj) {
      return i;
    }
    i++;
  }
  return -1;
}

ObserverList.prototype.count = function() {
  return this.observerList.length;
}

var ObservableTask = function(data) {
  Task.call(this, data);
  this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function(observer) {
  this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer), 0);
}

ObservableTask.prototype.notify = function(context) {
  var observerCount = this.observers.count();

  for( i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  }
}

ObservableTask.prototype.save = function() {
  this.notify(this);
  Task.prototype.save.call(this);
}

var task1 = new ObservableTask({name: 'Create a demo for Constructors', user: 'Jon'});

var not = new notificationService();
var log = new loggingService();
var audit = new auditingService();

task1.addObserver(not.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(audit.update);
task1.save();