let keybinds = {
  up: "w",
  down: "s",
  left: "a",
  right: "d",
};

let framerate = 33.34;
let playerSpeed = 10;
let intervals = [];
let position = {
  x: 0,
  y: 0,
};

let move = {
  up: function () {
    if (intervals.length === 0) {
      intervals.push(
        setInterval(() => {
          position.x -= playerSpeed;
          updatePlayerPosition();
        }, framerate)
      );

      let thisInterval = intervals.length - 1;

      addEventListener("keyup", ({ key }) => {
        const release = key.toLowerCase();

        if (release === keybinds.up) {
          clearInterval(intervals[thisInterval]);
          intervals.splice(thisInterval, 1);
        }
      });
    }
  },
  down: function () {
    if (intervals.length === 0) {
      intervals.push(
        setInterval(() => {
          position.x += playerSpeed;
          updatePlayerPosition();
        }, framerate)
      );

      let thisInterval = intervals.length - 1;

      addEventListener("keyup", ({ key }) => {
        const release = key.toLowerCase();

        if (release === keybinds.down) {
          clearInterval(intervals[thisInterval]);
          intervals.splice(thisInterval, 1);
        }
      });
    }
  },
  left: function () {
    if (intervals.length === 0) {
      intervals.push(
        setInterval(() => {
          position.y -= playerSpeed;
          updatePlayerPosition();
        }, framerate)
      );

      let thisInterval = intervals.length - 1;

      addEventListener("keyup", ({ key }) => {
        const release = key.toLowerCase();

        if (release === keybinds.left) {
          clearInterval(intervals[thisInterval]);
          intervals.splice(thisInterval, 1);
        }
      });
    }
  },
  right: function () {
    if (intervals.length === 0) {
      intervals.push(
        setInterval(() => {
          position.y += playerSpeed;
          updatePlayerPosition();
        }, framerate)
      );

      let thisInterval = intervals.length - 1;

      addEventListener("keyup", ({ key }) => {
        const release = key.toLowerCase();

        if (release === keybinds.right) {
          clearInterval(intervals[thisInterval]);
          intervals.splice(thisInterval, 1);
        }
      });
    }
  },
};

function updatePlayerPosition() {
  player.style.top = `${position.x}px`;
  player.style.left = `${position.y}px`;
}

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
