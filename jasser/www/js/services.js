angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
   
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('PostsServer', function($q, $http) {

  return {
    all: function() {
      // return promise
      return $q(function(resolve, reject){
          $http.get('').then(function(response){
              // do something with the response if necessary
              console.log(response);
              // here the response body (which contains the JSON data we are interested in) is returned
              resolve(response.data);
          });
      })
    },
  };
})

.factory('Posts', function($q) {
  // Post Data
  var posts = [{
    id: 0,
    name: 'Wiz Khalifa',
    avatar: 'http://static.highsnobiety.com/wp-content/uploads/2016/01/22194813/wiz-khalifa-travis-scott-bake-sale-00.jpg',
    image: 'http://houstonhiphopfix.com/wp-content/uploads/2015/06/wiz-khalifa-weed-thumb.jpg',
    likes: 500000,
    caption: 'Smoke weed everyday',
    comments: [
                {
                    id: 0,
                    user: {
                        id: 2,
                        username: "Akon"
                    },
                    comment: "It's not healthy man",
                    userRefs: [],
                    tags: ["It's not healthy man"]
                },
                {
                    id: 1,
                    user: {
                        id: 3,
                        username: ""
                    },
                    comment: "",
                    userRefs: [""],
                    tags: []
                },
            ]
  }, {
    id: 1,
    name: 'Akon',
    avatar: 'http://mm-group.org/wp-content/uploads/2016/08/Akon_04.jpg',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/a9/d8/b2/a9d8b26f876144f72b248379e3591e70.jpg',
    likes: 20000,
    caption: 'Got a new car, what u think?',
    comments: [
                {
                    id: 0,
                    user: {
                        id: 2,
                        username: "Wiz"
                    },
                    comment: "amazing",
                    userRefs: ["amazing"],
                    tags: [""]
                },
                {
                    id: 1,
                    user: {
                        id: 3,
                        username: ""
                    },
                    comment: "",
                    userRefs: [""],
                    tags: []
                },
            ]
  }];

  return {
    all: function() {
      return posts;
    },
    share: function(newdata) {
      posts.push(newdata);
      return posts;
    },

    get: function (postID) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id === parseInt(postID)) {
                    return posts[i];
                }
            }
    }
  };
});
