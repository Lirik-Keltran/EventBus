import { EventList, EventTypes, SubscriberDeletionFunction } from "./types/Events";
import { UnwrapArray, UnwrapFunction } from "./types/Unwrap";

export function slot<Type>(): Array<(event: Type) => void>{
    return new Array<(event: Type) => void>;
}

export class EventBus<T extends EventList<EventTypes<any, any>>> {
  public on<EventName extends string>(
    eventName: EventName,
    callback: UnwrapArray<T[EventName]>
  ): SubscriberDeletionFunction {

    if(eventName in this.events) {
        this.events[eventName].push(callback);

        return () => this.off(eventName, callback);
    }

    return () => undefined;
  }

  public off<EventName extends string>(
    eventName: EventName,
    deletedCallback: UnwrapArray<T[EventName]>
  ) {
    if(eventName in this.events) {
      this.events[eventName] = this.events[eventName].filter(callback => deletedCallback !== callback) as T[EventName];
    }
  }

  public dispatch<EventName extends string>(
    event: EventName,
    value: UnwrapFunction<T[EventName]>
  ) {
    this.events[event].forEach(callback => callback(value));
  }

  constructor(events: T) {
    this.events = events;
  }

  private events: T;
}
