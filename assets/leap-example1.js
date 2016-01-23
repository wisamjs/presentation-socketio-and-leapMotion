var leap = require('leapjs');

leap.loop(function(frame) {

  if (frame.hands.length > 1) {
    console.log('2 hands detected');

  } else if (frame.hands.length === 1) {
    console.log('1 hand detected!');

  } else{
    console.log('no hand detected!');

  }

});
