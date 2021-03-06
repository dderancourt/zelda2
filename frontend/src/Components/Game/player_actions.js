function canMove(x, y, mapArray) {
  const topBorder = 0;
  const leftBorder = 0;
  const bottomBorder = 14;
  const rightBorder = 19;
  return (
    rightBorder >= x &&
    leftBorder <= x &&
    bottomBorder >= y &&
    topBorder <= y &&
    !mapArray[y][x].includes("Z") //&&
    // (x !== this.state.NPC.x ||
    //   y !== this.state.NPC.y ||
    //   !this.state.NPC.isAlive ||
    //   this.state.mapNumber === tilesMap2)
  );
}

export default canMove;
