const createGame = (game) => {
  if (!game.gridLeftDown.includes(",")) return;
  if (!game.gridLeftUp.includes(",")) return;
  if (!game.gridRightDown.includes(",")) return;
  if (!game.gridRightUp.includes(",")) return;
  return {
    playerOne: {
      up: {
        left: game.gridLeftUp.split(",")[0],
        right: game.gridRightUp.split(",")[0],
      },
      down: {
        left: game.gridLeftDown.split(",")[0],
        right: game.gridRightDown.split(",")[0],
      },
    },
    playerTwo: {
      left: {
        up: game.gridLeftUp.split(",")[1],
        down: game.gridLeftDown.split(",")[1],
      },
      right: {
        up: game.gridRightUp.split(",")[1],
        down: game.gridRightDown.split(",")[1],
      },
    },
  };
};
export default createGame;
