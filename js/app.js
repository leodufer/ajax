//IIEF
//this a new comment to test pull request action
(function($){

	$(function(){
		var _api = 'https://api.github.com/users/leodufer';
		$.get(_api)
			.done(function(data){
				$('#login').append("@"+data.login);
				$('#avatar').attr('src', data.avatar_url);
				$('#username').append(data.name);
			});

		var _followers = 'https://api.github.com/users/leodufer/followers';
		$.get(_followers)
			.done(function(data) {
				for (var i = data.length - 1; i >= 0; i--) {
					var row = '<tr>';
					row += '<td>'+data[i].id;

					var img = '<img class="avatar-user" src="'+data[i].avatar_url+'">'

					row += '<td>'+img;
					row += '<td>'+data[i].login;

					$('table tbody').append(row);
				}

			});
		var _repos = 'https://api.github.com/users/leodufer/repos';
		var template;

		$.get('template/repositorio.html')
			.done(function(data){
				template = data;
			})
			.done(function() {
				$.get(_repos)
				.done(function(data) {
					var repos;
					data.forEach(function(repositorio){
						repos = $(template);
						repos.find('h4').append(repositorio.name);
						repos.find('p').append(repositorio.description);
						repos.find('span').append(repositorio.language);
						$('#repositorio').append(repos);
						console.log(template);
					});	
				});
			});	
	});
})(jQuery);
