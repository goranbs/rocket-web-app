# Getting started with TypeScript

# Issues that I discovered
Issues that I discovered while playing with this simple TypeScript app.

1. Referencing `.js` files
    * During local development I referenced `../build/app.js` in `html/index.html`. 
    At this stage, the vscode extension `Live Server` was useful.
    However, when starting an `express` server this reference had to change, and I don`t know at present
    if there`s a way to preserve this relative path in `server.js`.

2. Understanding modules.
    * The concept of exporting and importing functions and classes seems a bit akward at this stage.
    When to use modules? (That is, when to write scripts or functions and classes in scripts as modules,
    and how to use them in a nice way).

3. Routing and building an API.
    * Haven't looked much at this at present, but this seem to be an interesting topic with a lot of potential.

 