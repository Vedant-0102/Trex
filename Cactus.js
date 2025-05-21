class Cactus {
  constructor(ctx, x, y, width, height, image) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  update(speed, gameSpeed, frameTimeDelta, scaleRatio) {
    this.x -= gameSpeed * frameTimeDelta * speed * scaleRatio;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWith(sprite) {
    // Increase padding for a more forgiving collision box
    const paddingX = 12; // horizontal padding
    const paddingY = 8;  // vertical padding

    const spriteLeft = sprite.x + paddingX;
    const spriteRight = sprite.x + sprite.width - paddingX;
    const spriteTop = sprite.y + paddingY;
    const spriteBottom = sprite.y + sprite.height - paddingY;

    const cactusLeft = this.x + paddingX;
    const cactusRight = this.x + this.width - paddingX;
    const cactusTop = this.y + paddingY;
    const cactusBottom = this.y + this.height - paddingY;

    if (
      spriteRight > cactusLeft &&
      spriteLeft < cactusRight &&
      spriteBottom > cactusTop &&
      spriteTop < cactusBottom
    ) {
      return true;
    }
    return false;
  }
}