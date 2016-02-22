    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(elem){
             return goodUsers.some(function(el){
                return el.id == elem.id;
            });
        })
      };
    }

    module.exports = checkUsersValid