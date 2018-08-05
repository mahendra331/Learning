/** Version 1 **/
// var repoFactory = function() {
//   this.getRepo = function (repoType) {
//     if (repoType === 'task') {
//       var taskRepo = require('./taskRepository');
//       return taskRepo;
//     }
//     else if (repoType === 'user') {
//       var userRepo = require('./userRepository');
//       return userRepo;
//     }
//     else if (repoType === 'project') {
//       var projectRepo = require('./projectRepository');
//       return projectRepo;
//     }
//   }
// };

// module.exports = new repoFactory;

/** Version 2 */

// var repoFactory = function() {
//   this.getRepo = function (repoType) {
//     if (repoType === 'task') {
//       if (!this.taskRepo) {
//         this.taskRepo = require('./taskRepository');
//       }
//       return this.taskRepo;
//     }
//     else if (repoType === 'user') {
//       if(!this.userRepo) {
//         this.userRepo = require('./userRepository');
//       }   
//       return this.userRepo;
//     }
//     else if (repoType === 'project') {
//       if(!this.projectRepo) {
//         this.projectRepo = require('./projectRepository');
//       }
//       return this.projectRepo;
//     }
//   }
// };
// module.exports = new repoFactory;

/** Version 3 */ 
var repoFactory = function () {
  var repos = this;
  var repoList = [
    {name: 'user', source: './userRepository'},
    {name: 'project', source: './projectRepository'},
    {name: 'task', source: './taskRepository'}
  ];
  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source);
  });
}

module.exports = new repoFactory;
