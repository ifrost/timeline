import Event from './event';
import Line from './line';

export default React.createClass({
   render: function() {
      return <svg>
         <g>
            <Line />
         </g>
         <g>
            <Event />
         </g>
      </svg>
   }
});