var repo = function () {
  var called = 0;
  console.log('Newing up repo');
  var save = function (task) {
    called++;
    console.log('Saving '+ task + ' Called ' + called + ' times.');
  }
  return {
    save: save
  }
}

module.exports = repo();
