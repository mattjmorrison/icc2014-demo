var App = Ember.Application.create();

App.Router.map(function(){
    this.route('addition', {path: '/'});
});
// show this initially on the application controller
// then show adding a route and moving it to be on a new controller
//
App.AdditionController = Ember.Controller.extend({
    c: function(){
        var result = parseInt(this.get('a')) + parseInt(this.get('b'));
        return result || "";
    }.property('a', 'b')
});
