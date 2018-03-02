$(function() {
  var client = ZAFClient.init();
  client.invoke('resize', { width: '100%', height: '320px' });
  //showInfo();
  //showError();
  client.get('ticket.requester.id').then(function(data) {
    var user_id = data['ticket.requester.id'];
    requestUserInfo(client, user_id);
  });
  });


  function showInfo() {
    var requester_data = {
      'name': 'Jane Doe',
      'tags': ['tag1', 'tag2'],
      'created_at': 'November 20, 2014',
      'last_login_at': 'June 27, 2016'
    };

    var source = $("#requester-template").html();
    var template = Handlebars.compile(source);
    var html = template(requester_data);
    $("#content").html(html);
  }

  function showError() {
  var error_data = {
    'status': 404,
    'statusText': 'Something Bork'
  };

  var source = $("#error-template").html();
  var template = Handlebars.compile(source);
  var html = template(error_data);
  $("#content").html(html);
  }
