const RomaImages = {};

for (let i = 1; i <= 24; i++) {
  const imageName = `(${i})`;
  RomaImages[imageName] = require(`./(${i}).jpeg`);
}

export default RomaImages;
