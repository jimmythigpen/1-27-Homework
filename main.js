(function() {
  'use strict';

  $(document).ready(function() {

    var myGitHubAddress = "https://api.github.com/users/jimmythigpen/repos";
    var gitURL = myGitHubAddress + "?access_token=" + gitHubToken;

    $.ajax({
      url: gitURL,
      dataType: 'json'
    }).done(function(repoResults) {
      console.log(repoResults);
      _.each(repoResults, function(item) {
        var data = {
          name: item.name
        };
        console.log(data);
      })
    });


  });

})();