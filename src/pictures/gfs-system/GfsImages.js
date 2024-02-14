const GfsImages = {};

for (let i = 1; i <= 12; i++) {
  const imageName = `(${i})`;
  GfsImages[imageName] = require(`./(${i}).jpeg`);
}

export default GfsImages;
