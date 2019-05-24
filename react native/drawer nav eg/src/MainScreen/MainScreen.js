import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Picker, Label, Input, Toast, Root } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import convertValuesToMeter from "./functions/convertValuesToMeter";
import convertValuesToFeet from "./functions/convertValuesToFeet";
import styles from "./stylesheet/styles";
import ShareComponent from "./ShareComponent/ShareComponent";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesUnit: "meter",
      tileWidth: "",
      tileLength: "",
      areaUnit: "squareMeter",
      areaToCover: "",
      ratePerTile: "",
      result: null,
      totalTilesRate: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  submitHandler = () => {
    if (
      !this.state.tileWidth ||
      !this.state.tileLength ||
      !this.state.areaToCover
    ) {
      return Toast.show({
        text: "Please enter required fields"
      });
    }
    if (this.state.areaUnit == "squareMeter") {
      let areaOfTile = convertValuesToMeter(
        this.state.tilesUnit,
        this.state.tileWidth,
        this.state.tileLength
      );
      let result = Math.ceil(this.state.areaToCover / areaOfTile);
      let totalTilesRate = this.state.ratePerTile
        ? Math.ceil(result * this.state.ratePerTile)
        : null;
      this.setState({
        result: result,
        totalTilesRate: totalTilesRate
      });
      setTimeout(() => {
        this.scrollView.scrollToEnd({ animated: true });
      }, 500);
    }

    if (this.state.areaUnit == "squareFeet") {
      let areaOfTile = convertValuesToFeet(
        this.state.tilesUnit,
        this.state.tileWidth,
        this.state.tileLength
      );
      let result = Math.ceil(this.state.areaToCover / areaOfTile);
      let totalTilesRate = this.state.ratePerTile
        ? Math.ceil(result * this.state.ratePerTile)
        : null;
      this.setState({
        result: result,
        totalTilesRate: totalTilesRate
      });
      setTimeout(() => {
        this.scrollView.scrollToEnd({ animated: true });
      }, 500);
    }
  };

  resetHandler = () => {
    this.setState({
      tilesUnit: "meter",
      tileWidth: "",
      tileLength: "",
      areaUnit: "squareMeter",
      areaToCover: "",
      ratePerTile: "",
      result: null,
      totalTilesRate: null
    });
  };

  render() {
    return (
      <Root>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="always"
          ref={view => {
            this.scrollView = view;
          }}
        >
          <View style={styles.container}>
            <View style={styles.tilesContainer}>
              <View style={styles.inputField}>
                <Label style={styles.mainLabel}>Select Unit For Tiles</Label>
                <Picker
                  mode="dropdown"
                  style={{ width: "60%", borderWidth: 5, borderColor: "red" }}
                  placeholder="Select Unit For Tiles"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.tilesUnit}
                  onValueChange={value =>
                    this.handleInputChange("tilesUnit", value)
                  }
                >
                  <Picker.Item label="Inch" value="inch" />
                  <Picker.Item label="Feet" value="feet" />
                  <Picker.Item label="Meter" value="meter" />
                  <Picker.Item label="Centimeter" value="centimeter" />
                  <Picker.Item label="Millimeter" value="millimeter" />
                </Picker>
              </View>
              <View style={styles.inputField}>
                <Label>Tile Width</Label>
                <Input
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={value =>
                    this.handleInputChange("tileWidth", value)
                  }
                  value={this.state.tileWidth}
                />
              </View>

              <View style={styles.inputField}>
                <Label>Tile Length</Label>
                <Input
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={value =>
                    this.handleInputChange("tileLength", value)
                  }
                  value={this.state.tileLength}
                />
              </View>
              <View style={styles.hr} />
            </View>

            <View style={styles.areaContainer}>
              <View style={styles.inputField}>
                <Label style={styles.mainLabel}>Total Area To Cover</Label>
                <Picker
                  mode="dropdown"
                  style={{ width: "60%", borderWidth: 5, borderColor: "red" }}
                  placeholder="Select Unit For Tiles"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.areaUnit}
                  onValueChange={value =>
                    this.handleInputChange("areaUnit", value)
                  }
                >
                  <Picker.Item label="Square Feet" value="squareFeet" />
                  <Picker.Item label="Square Meter" value="squareMeter" />
                </Picker>
              </View>

              <View style={styles.inputField}>
                <Label>Area to cover</Label>
                <Input
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={value =>
                    this.handleInputChange("areaToCover", value)
                  }
                  value={this.state.areaToCover}
                />
              </View>
              <View style={styles.hr} />
            </View>

            <View style={styles.rateContainer}>
              <View style={styles.inputField}>
                <Label>Rate Per Tile (Optional)</Label>
                <Input
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={value =>
                    this.handleInputChange("ratePerTile", value)
                  }
                  value={this.state.ratePerTile}
                />
              </View>
            </View>

            <Button
              block
              success
              onPress={this.submitHandler}
              style={styles.button}
            >
              <Text>Submit</Text>
            </Button>
            <Button
              block
              danger
              onPress={this.resetHandler}
              style={styles.button}
            >
              <Text>Reset</Text>
            </Button>

            {this.state.result && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultTitleText}>Result - </Text>
                <Text style={styles.resultText}>
                  Tiles Required - {this.state.result}{" "}
                </Text>
                {this.state.totalTilesRate && (
                  <Text style={styles.resultText}>
                    Total Cost - {this.state.totalTilesRate}{" "}
                  </Text>
                )}
                <Text style={styles.resultText}>
                  But you are highly recommended to purchase 5% - 10% more i.e (
                  {Math.ceil(
                    this.state.result + Math.ceil(this.state.result * 0.1)
                  )}
                  ) tiles
                </Text>
                {this.state.totalTilesRate && (
                  <Text style={styles.resultText}>
                    Cost including waste factor -{" "}
                    {this.state.totalTilesRate +
                      Math.ceil(this.state.totalTilesRate * 0.1)}
                  </Text>
                )}
                  <ShareComponent
                    msg={`
Tiles Calculator Result - 
Tiles Required - ${this.state.result}
Total Cost - ${this.state.totalTilesRate}

But you are highly recommended to purchase 5% - 10% more i.e (${Math.ceil(this.state.result + Math.ceil(this.state.result * 0.1))}) tiles

Cost including waste factor - ${this.state.totalTilesRate +Math.ceil(this.state.totalTilesRate * 0.1)}
`}
                  />
              </View>
            )}
          </View>
        </ScrollView>
      </Root>
    );
  }
}
