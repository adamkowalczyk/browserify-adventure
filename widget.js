var domify = require('domify');
var html = '<div>Hello <span class="name"></span>!</div>';

module.exports = Widget;

function Widget () {
  if (!(this instanceof Widget)) return new Widget();
  this.element = domify(html);
}

Widget.prototype.setName = function (name) {
  this.element.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function (target) {
  target.appendChild(this.element);
};

// This workshop doesn't explain much about browesrify...

// DOCS:
// You can just as easily create a bundle that will export a require() function so you can require() modules from another script tag. Here we'll create a bundle.js with the through and duplexer modules.

// $ browserify -r through -r duplexer -r ./my-file.js:my-module > bundle.js
// Then in your page you can do:

// <script src="bundle.js"></script>
// <script>
//   var through = require('through');
//   var duplexer = require('duplexer');
//   var myModule = require('my-module');
//   /* ... */
// </script>

// so, here the -r flag and the ./my-file:my-module syntax exposes our module in the bundle output