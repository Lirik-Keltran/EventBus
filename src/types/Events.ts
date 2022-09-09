export type Callback<T> = (value: T) => void;

export type EventTypes<Name, Type> = {
  eventName: Name,
  eventType: Type
}

export type EventList<Event extends EventTypes<string, unknown>> = {
  [Property in Event as Property['eventName']]: Array<Callback<Property['eventType']>>;
}

export type SubscriberDeletionFunction = () => void;
