let keybinds = {
  up: "w",
  down: "s",
  left: "a",
  right: "d",
};

let intervals = [];

let move = {
  up: function () {
    if (intervals.length === 0) {
      intervals.push(
        setInterval(() => {
          console.log("going up");
        }, 500)
      );
    }

    let thisInterval = intervals.length - 1;

    addEventListener("keyup", ({ key }) => {
      const release = key.toLowerCase();

      if (release === keybinds.up) {
        clearInterval(intervals[thisInterval]);
        intervals.splice(thisInterval, 1);

        console.log(intervals.length);
      }
    });
  },
  down: function () {
    if (intervals.length === 0) {
      interval = setInterval(() => {
        console.log("going down");
      }, 500);
    }
  },
  left: function () {
    if (intervals.length === 0) {
      interval = setInterval(() => {
        console.log("going left");
      }, 500);
    }
  },
  right: function () {
    if (intervals.length === 0) {
      interval = setInterval(() => {
        console.log("going right");
      }, 500);
    }
  },
};

addEventListener("keydown", ({ key }) => {
  const input = key.toLowerCase();

  switch (input) {
    case keybinds.up:
      move.up();
      break;
    case keybinds.down:
      move.down();
      break;
    case keybinds.left:
      move.left();
      break;
    case keybinds.right:
      move.right();
  }
});
