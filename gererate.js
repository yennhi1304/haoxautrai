const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function makeFrames() {
  const img = await loadImage('waterfall.svg');
  for (let i = 0; i < 10; i++) {
    const c = createCanvas(200, 300);
    const ctx = c.getContext('2d');

    ctx.drawImage(img, 0, 0);

    // overlay transparent color shift
    ctx.fillStyle = `hsla(${200 + i*10}, 80%, 50%, 0.4)`;
    ctx.fillRect(0, 0, 200, 300);

    const buffer = c.toBuffer('image/png');
    fs.writeFileSync(`frame_${i}.png`, buffer);
  }
}
makeFrames();
