const calculateBestResponses = (data) => {
  const bestResponses = {
    playerOne: {
      left:
        (data.playerOne.up.left > data.playerOne.down.left && "up") ||
        (data.playerOne.up.left < data.playerOne.down.left && "down") ||
        (data.playerOne.up.left === data.playerOne.down.left && "any"),
      right:
        (data.playerOne.up.right > data.playerOne.down.right && "up") ||
        (data.playerOne.up.right < data.playerOne.down.right && "down") ||
        (data.playerOne.up.right === data.playerOne.down.right && "any"),
    },
    playerTwo: {
      up:
        (data.playerTwo.left.up > data.playerTwo.right.up && "left") ||
        (data.playerTwo.left.up < data.playerTwo.right.up && "right") ||
        (data.playerTwo.left.up === data.playerTwo.right.up && "any"),
      down:
        (data.playerTwo.left.down > data.playerTwo.right.down && "left") ||
        (data.playerTwo.left.down < data.playerTwo.right.down && "right") ||
        (data.playerTwo.left.down === data.playerTwo.right.down && "any"),
    },
  };
  let nash = [];
  if (
    bestResponses.playerOne.left === "up" &&
    bestResponses.playerTwo.up === "left"
  ) {
    nash.push(["up", "left"]);
  }
  if (
    bestResponses.playerOne.right === "up" &&
    bestResponses.playerTwo.up === "right"
  ) {
    nash.push(["up", "right"]);
  }
  if (
    bestResponses.playerOne.left === "down" &&
    bestResponses.playerTwo.down === "left"
  ) {
    nash.push(["down", "left"]);
  }
  if (
    bestResponses.playerOne.right === "down" &&
    bestResponses.playerTwo.down === "right"
  ) {
    nash.push(["down", "right"]);
  }
  return { ...bestResponses, nash };
};
export default calculateBestResponses;
