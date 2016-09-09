import Timeline from './timeline';

export default React.createClass({
   render() {
      let events = [
         { r: 5, x: 20, key: 1 },
         { r: 10, x: 50, key: 2 },
         { r: 8, x: 100, key: 3 }
      ];

      return <Timeline events={events} />;
   }
});
