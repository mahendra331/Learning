/**Version 0 **/

// var Task = require('./task');
// var TaskRepo = require('./taskRepository');
// var ProjectRepo = require('./projectRepository');
// var UserRepo = require('./userRepository');

// var task1 = new Task(TaskRepo.get(1));

// var user = UserRepo.get(1);
// var project = ProjectRepo.get(1);

// task1.user = user;
// task1.project = project;

// console.log(task1);
// task1.save();


/**Version 1 && 2 **/
// var Task = require('./task');
// var repoFactory = require('./repoFactory');

// var task1 = new Task(repoFactory.getRepo('task').get(1));
// var task2 = new Task(repoFactory.getRepo('task').get(2));

// var user = repoFactory.getRepo('user').get(1);
// var project = repoFactory.getRepo('project').get(1);

// task1.user = user;
// task1.project = project;

// console.log(task1);
// task1.save();

/** Version 3 */

var Task = require('./task');
var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();