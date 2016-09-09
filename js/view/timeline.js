import Event from './event';
import Line from './line';

export default React.createClass({
   render() {
      let events = this.props.events.map((event) => <Event key={event.key} event={event} />);
      
      return <svg viewBox="0 0 100 100" width="500px" height="300px">
         <g>
            <Line />
         </g>
         <g>
            {events}
         </g>
      </svg>
   }
});