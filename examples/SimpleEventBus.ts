import { EventBus, slot } from "../src/EventBus";

const someEvent = {
    click: slot<number>(),
    touch: slot<boolean>(),
};

export const eventBus = new EventBus(someEvent);

eventBus.on('click', (num) => console.log('number -> ', num));
eventBus.dispatch('click', 5);
