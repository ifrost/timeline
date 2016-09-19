import Event from './event';
import Line from './line';

export default React.createClass({
   render() {
      if (!this.props.timeline) {
         return <svg></svg>;
      }

      let events = this.props.timeline.events.map((event) => <Event key={event.key} event={event} />);
      
      return <svg width="500px" height="100px">
         <g>
            <Line />
         </g>
         <g>
            {events}
         </g>
      </svg>
   }
});