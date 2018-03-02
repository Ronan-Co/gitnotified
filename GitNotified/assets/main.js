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


  function showInfo(data) {
    var requester_data = {
      'name': data.user.name,
      'tags': data.user.tags,
      'created_at': data.user.created_at,
      'last_login_at': data.user.last_login_at
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

  //Added 10.40
  function requestUserInfo(client, id) {
  var settings = {
    url: '/api/v2/users/' + id + '.json',
    type:'GET',
    dataType: 'json',
  };

  client.request(settings).then(
    function(data) {
      showInfo(data);
    },
    function(response) {
      showError(response);
    }
  );

  }
