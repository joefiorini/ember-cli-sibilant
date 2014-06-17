var sibilant = require('broccoli-sibilant');

function SibilantAddon(project) {
  this.project = project;
  this.name = 'Sibilant for Ember CLI';
}

SibilantAddon.prototype.included = function(app) {
  var registry = app.registry;
  this.app = app;

  this.options = this.app.options.sibilant;
  var plugin = new SibilantAddon(this.app.options.sibilant);

  registry.add('js', this);
};

SibilantAddon.prototype.treeFor = function(tree) {
  return sibilant(tree, this.options);
};

module.exports = SibilantAddon;


