var myRepo = require('./repo');

var taskHandler = function () {
  return {
    save : function() {
      myRepo.save('From TaskHandler');
    }
  }
}

module.exports = taskHandler();