import Timeline from '../view-model/timeline';
import TimelineEvent from '../view-model/timeline-event';
import EventService from '../service/events-service';

class AppStore {

   constructor() {
      this.eventService = new EventService();
   }

   init(callback) {
      this.eventService.load(this._eventsLoaded.bind(this, callback));
   }
   
   _eventsLoaded(callback, events) {
      this.timeline = new Timeline(new Date(2000,1,1), new Date(2020,1,1));
      this.timeline.events = events.map((event) => new TimelineEvent(event, this.timeline));
      callback();
   }

}

export default new AppStore();