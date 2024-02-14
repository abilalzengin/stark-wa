const ManisaImages = {};

for (let i = 1; i <= 19; i++) {
  const imageName = `(${i})`;
  ManisaImages[imageName] = require(`./(${i}).jpeg`);
}

export default ManisaImages;
