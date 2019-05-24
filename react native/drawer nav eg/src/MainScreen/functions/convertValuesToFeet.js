convertValuesToFeet = (tilesUnit, tileWidth, tileLength) => {
    if (tilesUnit == "inch") {
      let widthInFeet = tileWidth * 0.0833333;
      let lengthInFeet = tileLength * 0.0833333;
      let areaOfTile = widthInFeet * lengthInFeet;
      return areaOfTile;
    } else if (tilesUnit == "feet") {
      let widthInFeet = tileWidth;
      let lengthInFeet = tileLength;
      let areaOfTile = widthInFeet * lengthInFeet;
      return areaOfTile;
    } else if (tilesUnit == "meter") {
      let widthInFeet = tileWidth * 3.28084;
      let lengthInFeet = tileLength * 3.28084;
      let areaOfTile = widthInFeet * lengthInFeet;
      return areaOfTile;
    } else if (tilesUnit == "centimeter") {
      let widthInFeet = tileWidth * 0.0328084;
      let lengthInFeet = tileLength * 0.0328084;
      let areaOfTile = widthInFeet * lengthInFeet;
      return areaOfTile;
    } else if (tilesUnit == "millimeter") {
      let widthInFeet = tileWidth * 0.00328084;
      let lengthInFeet = tileLength * 0.00328084;
      let areaOfTile = widthInFeet * lengthInFeet;
      return areaOfTile;
    }
  };

  export default convertValuesToFeet