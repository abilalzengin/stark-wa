const ShoekapssImages = {};

for (let i = 1; i <= 13; i++) {
  const imageName = `(${i})`;
  ShoekapssImages[imageName] = require(`./(${i}).jpeg`);
}

export default ShoekapssImages;
