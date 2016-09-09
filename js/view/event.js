export default React.createClass({
   render() {
      return <circle r={this.props.event.r} cx={this.props.event.x} cy="20"/>;
   }
});