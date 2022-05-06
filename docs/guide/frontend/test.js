
/*eslint no-use-before-define: ["error", { "variables": false }]*/

function baz() {
    console.log(foo);
}

var foo = 1;