function Component(props, children) {
  this.props = props;
  this.children = children;
}
// Component.prototype.render = function() {};
Component.prototype.createInstance = function() {
  return this.render();
};
