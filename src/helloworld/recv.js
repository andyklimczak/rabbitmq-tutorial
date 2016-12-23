var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';
    ch.assertQueue(q, { durable: false });
    console.log('[x] Waiting for messaages in %s', q);
    ch.consume(q, function(msg) {
      console.log('[x] Received %s', msg.content.toString());
    }, {noAck: true});
  });
});
