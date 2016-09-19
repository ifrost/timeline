import Event from '../model/event';

export default class EventSevice {

   load(callback) {
      callback([
         new Event(new Date(2010,1,1), 'test event 1', 'info 1'),
         new Event(new Date(2011,1,1), 'test event 2', 'info 2'),
         new Event(new Date(2012,1,1), 'test event 3', 'info 3')
      ])
   }

};