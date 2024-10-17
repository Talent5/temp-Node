const EventEmitter = require('events');

const customerEmitter = new EventEmitter();

customerEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id:${id}`);
});

customerEmitter.on('response', () => {
    console.log('another data received');
}
);

customerEmitter.emit('response', 'john' ,34);