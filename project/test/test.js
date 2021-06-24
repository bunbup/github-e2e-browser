describe('Array', () => {
    describe('#indexOf()', () => {
      it('should return -1 when the value is not present', function(done) {
        console.log("Publish to a channel 'hello_world'");

        let pubnub = new PubNub({
            publishKey : "demo-36",
            subscribeKey : "demo-36",
            uuid: "myUniqueUUID"
        })
        // With the right payload, you can publish a message, add a reaction to a message,
        // send a push notification, or send a small payload called a signal.
        var publishPayload = {
            channel : "hello_world",
            message: {
                title: "greeting",
                description: "This is my first message!"
            }
        };
        pubnub.publish(publishPayload, function(status, response) {
          if (status.error) {
            console.log("publishing failed w/ status: ", status);
            done(error);
          } else {
            console.log("message published w/ server response: ", response);
            done();
          }
        });
      });
    });
  });