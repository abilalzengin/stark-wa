const ManhattanImages = {};

for (let i = 1; i <= 8; i++) {
  const imageName = `(${i})`;
  ManhattanImages[imageName] = require(`./(${i}).jpeg`);
}

export default ManhattanImages;
