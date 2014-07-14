module("Tests", {
    setup: function(){
        App.setupForTesting();
        App.injectTestHelpers();
        App.reset();
    }
});

test("Greeting", function(){
    visit('/');
    andThen(function(){
        equal(find('#hi').text(), "Hello World");
    });
});

test("1 + 1 = 2", function(){
    visit('/');
    andThen(function(){
        find('#a').val(1).change();
        find('#b').val(1).change();
        equal(find('#c').text(), '2');
    });
});

test("c is blank when NaN", function(){
    visit('/');
    andThen(function(){
        equal(find('#c').text(), "");
    });
});

test("nagative numbers", function(){
    var controller = App.AdditionController.create();
    controller.set('a', -1);
    controller.set('b', 2);
    equal(controller.get('c'), 1);
});
