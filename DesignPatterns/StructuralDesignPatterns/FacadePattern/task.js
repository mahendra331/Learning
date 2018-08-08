var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

var TaskService = function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log('Completing task: '+ task.name);
    },
    setCompletedDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + ' completed on ' + task.completedDate);
    },
    notifyCompletion: function(task, user) {
      console.log('Notifying ' + user + ' completion of ' + task.name);
    },
    save: function(task) {
      console.log('Saving the ' + task.name);
    }
  }
}();

var myTask = new Task( {
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

TaskService.complete(myTask);
if(myTask.completed === true) {
  TaskService.setCompletedDate(myTask);
  TaskService.notifyCompletion(myTask, myTask.user);
  TaskService.save(myTask);
}
console.log(myTask);


// This works now using facade,we'll create a wrapper function for service.

var TaskServiceWrapper = function() {
  var completeAndNotify = function(myTask) {
    TaskService.complete(myTask);
    if(myTask.completed === true) {
      TaskService.setCompletedDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  }
  return {
    completeAndNotify: completeAndNotify
  }
}();

var myTask1 = new Task( {
  name: 'MyTask',
  priority: 1,
  project: 'Courses',
  user: 'Jon',
  completed: false
});

TaskServiceWrapper.completeAndNotify(myTask1);
