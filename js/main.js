/*jslint es5 : true */
var Git = function () {
    "use strict";
    
    this.templates = {
        
        user: '<il class="user"> \
				<div class="content"> \
					<img src="http://www.gravatar.com/avatar/{{gravatar_id}}"> \
					<div class="userName" data-val={{username}}><span>User Name:</span> {{username}}</div> \
					<div class="location"><span>Location:</span> {{location}}</div> \
					<div class="language"><span>Language:</span> {{language}}</div> \
					<div class="follwers"><span>Followers:</span> {{followers_count}}</div> \
					<div class="repos"><span>Repos:</span> {{repos}}</div> \
					<div class="publicRepos"><span>Public Repos:</span> {{public_repo_count}}</div> \
				</div> \
			</li>'
    };
    
    this.counter = 0;
};

Git.prototype.Ajax = function (type, url, data) {
    "use strict";
	return $.ajax({
		type: type,
		dataType: 'json',
		cache: false,
		url: url,
		data: data
	});

};

Git.prototype.mustacheRender = function (templateDOM, object) {
    "use strict";
	var rendered = Mustache.render(templateDOM, object);
	return rendered;
};

Git.prototype.getUsersList = function (since) {
    "use strict";
    var that = this,
        usersList = new that.Ajax("GET", "https://api.github.com/users", {since: since});
    
    return usersList;
};

Git.prototype.getUserInfoWithLocation = function (location, sort) {
    "use strict";
    var that = this,
        userInfo = new that.Ajax("GET", "https://api.github.com/legacy/user/search/location:" + location + "?type=user", {start_page:1,sort: sort, access_token: "8e2cd2c3b60bd174564635b04b8df1b42f4e8d44"});
    
    return userInfo;
};

Git.prototype.getUserInfo = function (userLogin) {
    "use strict";
    var that = this,
        userInfo = new that.Ajax("GET", "https://api.github.com/users/" + userLogin, {access_token: "8e2cd2c3b60bd174564635b04b8df1b42f4e8d44"});
    return userInfo;
};

Git.prototype.init = function () {
    "use strict";
    
    var that = this,
        userInfo = that.getUserInfoWithLocation("turkey", "repositories");
    userInfo.done(function (response) {
        that.renderList(response);
    }).then(function () {
        that.bind();
    });
    
    
    
};

Git.prototype.renderList = function (userListOBJ) {
	"use strict";
    var that = this,
        $userDOM,
        info,
        i,
        list = userListOBJ.users;
    
    for (i in list) {
        info = list[i];
        $userDOM = $(that.mustacheRender(that.templates.user, info));
        $('#userContent').append($userDOM);
    }
    
};

Git.prototype.bind = function () {
    "use strict";
    var that = this;
    $('.user').on("click", function () {
        var login = $(this).find('.userName').data('val'),
            user = that.getUserInfo(login);
        user.done(function (response) {
            console.log(response);
        });
        
    });
    
    
};

var git = new Git();

git.init();
