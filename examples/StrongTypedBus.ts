import { EventBus, slot } from "../src/EventBus";
import { EventList, EventTypes } from "../src/types/Events";

export type Events =
    EventTypes<'click', number> |
    EventTypes<'touch', boolean>

export type SomeEvent = EventList<Events>

const eventList: SomeEvent = {
    click: slot<number>(),
    touch: slot<boolean>(),
};

export const eventBus = new EventBus(eventList);


eventBus.on('click', (num: number) => console.log(num));

eventBus.dispatch('click', 50);
