var repo = function() {

  var db = {}; //This db is accessible only to these 2 methods, we can do everything using those 2 methods

  var get = function (id) {
    console.log('Getting Task ' + id );
    return {
      name : 'new task from DB'
    }
  }

  var save = function (task) {
    console.log('Saving Task ' + task.name + ' to DB');
  }

  return  {
    get: get,
    save: save
  }
}

module.exports = repo();