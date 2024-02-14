const UrlaImages = {};

for (let i = 1; i <= 17; i++) {
  const imageName = `(${i})`;
  UrlaImages[imageName] = require(`./(${i}).jpeg`);
}

export default UrlaImages;
