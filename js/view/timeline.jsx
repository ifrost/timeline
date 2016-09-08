var Timeline = React.createClass({
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