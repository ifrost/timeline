import Timeline from './timeline';
// import TimelineModel from '../view-model/timeline';
import appStore from '../store/app-store';


export default React.createClass({

   componentDidMount() {
      appStore.init(() => {
         this.setState({
            timeline: appStore.timeline
         })
      });
   },

   getInitialState() {
      return {
         timeline: null
      }
   },

   render() {
      // let events = [
      //    { r: 5, x: 20, key: 1 },
      //    { r: 10, x: 50, key: 2 },
      //    { r: 8, x: 100, key: 3 }
      // ];
      //
      // let timeline = new TimelineModel(new Date(2000,1,1), new Date(2010,1,1));
      // timeline.events = events;

      return <Timeline timeline={this.state.timeline} />;
   }
});
