var userRepo = function() {

  var db = {}; //This db is accessible only to these 2 methods, we can do everything using those 2 methods

  var get = function (id) {
    console.log('Getting User ' + id );
    return {
      name : 'new user from DB'
    }
  }

  var save = function (task) {
    console.log('Saving user ' + task.name + ' to DB');
  }

  return  {
    get: get,
    save: save
  }
}

module.exports = userRepo();