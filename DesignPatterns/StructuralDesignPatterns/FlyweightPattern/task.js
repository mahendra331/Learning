var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

function TaskCollection() {
  var tasks = {};
  var count = 0;
  var add = function(data) {
    tasks[data.name] = new Task(data);
    count++;
  }
  var get = function(name) {
    return tasks[name];
  }
  var getCount = function(){
    return count;
  }
  return {
    get: get,
    add: add,
    getCount: getCount
  }
}

var tasks = new TaskCollection();
var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['jon','Erica','Amanda','Nathan'];
var completed = [true,false];

var initialMemory = process.memoryUsage().heapUsed;

for(var i=0;i<10000;i++) {
  tasks.add({
    name: 'task' + i,
    priority: priorities[Math.floor((Math.random() *5))],
    user: users[Math.floor((Math.random() *4))],
    project: projects[Math.floor((Math.random() *5))],
    completed: completed[Math.floor((Math.random() *2))]
  })
}

var afterMemory = process.memoryUsage().heapUsed;
console.log('Used Memory '+ (afterMemory-initialMemory)/1000000);

console.log('Tasks: ' + tasks.getCount());

//We are using 3Mb memory for creating 10000 tasks
