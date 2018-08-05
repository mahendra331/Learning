var projectRepo = function() {

  var db = {}; //This db is accessible only to these 2 methods, we can do everything using those 2 methods

  var get = function (id) {
    console.log('Getting Project ' + id );
    return {
      name : 'new Project from DB'
    }
  }

  var save = function (task) {
    console.log('Saving Project ' + task.name + ' to DB');
  }

  return  {
    get: get,
    save: save
  }
}

module.exports = projectRepo();