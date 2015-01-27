(function() {
  'use strict';

  $(document).ready(function() {

    $.ajax({
      url: "https://api.github.com/users/jimmythigpen/repos",
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