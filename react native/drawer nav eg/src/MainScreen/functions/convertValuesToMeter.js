convertValuesToMeter = (tilesUnit, tileWidth, tileLength) => {
  if (tilesUnit == "inch") {
    let widthInMeter = tileWidth * 0.0254;
    let lengthInMeter = tileLength * 0.0254;
    let areaOfTile = widthInMeter * lengthInMeter;
    return areaOfTile;
  } else if (tilesUnit == "feet") {
    let widthInMeter = tileWidth * 0.3048;
    let lengthInMeter = tileLength * 0.3048;
    let areaOfTile = widthInMeter * lengthInMeter;
    return areaOfTile;
  } else if (tilesUnit == "meter") {
    let widthInMeter = tileWidth;
    let lengthInMeter = tileLength;
    let areaOfTile = widthInMeter * lengthInMeter;
    return areaOfTile;
  } else if (tilesUnit == "centimeter") {
    let widthInMeter = tileWidth * 0.01;
    let lengthInMeter = tileLength * 0.01;
    let areaOfTile = widthInMeter * lengthInMeter;
    return areaOfTile;
  } else if (tilesUnit == "millimeter") {
    let widthInMeter = tileWidth * 0.001;
    let lengthInMeter = tileLength * 0.001;
    let areaOfTile = widthInMeter * lengthInMeter;
    return areaOfTile;
  }
};

export default convertValuesToMeter;
