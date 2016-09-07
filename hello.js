var Container = React.createClass({
   render: function () {
      return <div>Hello {this.props.name}</div>;
   }
});

ReactDOM.render(
   <Container />,
   document.getElementById('container')
);