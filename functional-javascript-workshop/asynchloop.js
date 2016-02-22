/*
function loadUsers(userIds, load, done) {
  var users = []
  users = userIds.reduce(function(users, curr, index){
      load(id, function(user){
          users[index] = user;
      });
      return users;
  }, users);
    
  done(users);
}
*/

/* approach */
function loadUsers(userIds, load, done) {
  var users = [];
  completed = 0;
  users = userIds.forEach(function(uid, index){
      load(uid, function(user){
          users[index] = user;
          if(++completed === userIds.length) return done(users);
      });

  });
}

module.exports = loadUsers