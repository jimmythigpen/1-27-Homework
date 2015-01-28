(function() {
  'use strict';

  $(document).ready(function() {

    var myGitHubAddress = "https://api.github.com/users/jimmythigpen";
    var repoAddToURL = "/repos?sort=created";
    var starAddToURL = "/starred";
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
        var updatedAt = moment(item.updated_at).fromNow();
        item.updated_at = updatedAt;
        repoTemplate.append(renderRepoTemplate(item));
      })
    });

    //
    // User AJAX Call
    //
    $.ajax({
      url: myGitHubAddress + gitToken,
    }).done(function(userResults) {
      var createdAt = moment(userResults.created_at).format("MMM Do YYYY");
      userResults.created_at = createdAt;
      userTemplate.append(renderUserTemplate(userResults));
    });

    //
    // Starred AJAX Call
    //
    $.ajax({
      url: myGitHubAddress + starAddToURL + gitToken,
    }).done(function(starResults) {
      $('.star-count').text(starResults.length);
    })
  });
})();
