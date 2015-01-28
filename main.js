(function() {
  'use strict';

  $(document).ready(function() {

    var myGitHubAddress = "https://api.github.com/users/jimmythigpen";
    var repoAddToURL = "/repos";
    var gitToken = "?access_token=" + gitHubToken;


    var renderUserTemplate = _.template($('.user-info').text());
    var userTemplate = $('.user-container');

    var renderRepoTemplate = _.template($('.repo-info').text());
    var repoTemplate = $('.repo-container');


    //
    // Repos AJAX Call
    //

    $.ajax({
      url: myGitHubAddress + repoAddToURL + gitToken,
      dataType: 'json'
    }).done(function(repoResults) {
      _.each(repoResults, function(item) {
        var data = {
          name: item.name
        };
        // console.log(data);
        repoTemplate.append(renderRepoTemplate(data));
      })
    });

    //
    // User AJAX Call
    //

    $.ajax({
      url: myGitHubAddress + gitToken,
      dataType: 'json'
    }).done(function(userResults) {
      // console.log(userResults);
      userTemplate.append(renderUserTemplate(userResults));
    });

  });

})();
