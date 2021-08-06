class Form {
    constructor() {

    }

    display() {

        var title = createElement('h1');
        title.html("carRacing game");
        title.position(420, 100);

        var input = createInput("Name");
        var button = createButton("Play");
        input.position(440, 200);
        button.position(510, 300);

        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement("h2");
            greeting.html("Hello " + name);
            greeting.position(470, 250);

        })

    }
}