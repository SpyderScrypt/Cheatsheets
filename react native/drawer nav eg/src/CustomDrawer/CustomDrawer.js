import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default class CustomDrawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          <View
            style={[
              styles.screenStyle,
              this.props.activeItemKey == "Home"
                ? styles.activeBackgroundColor
                : null
            ]}
          >
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == "Home"
                  ? styles.selectedTextStyle
                  : null
              ]}
              onPress={this.navigateToScreen("Home")}
            >
              Tiles Calculator
            </Text>
          </View>
          <View
            style={[
              styles.screenStyle,
              this.props.activeItemKey == "Donate"
                ? styles.activeBackgroundColor
                : null
            ]}
          >
            <Text
              style={[
                styles.screenTextStyle,
                this.props.activeItemKey == "Donate"
                  ? styles.selectedTextStyle
                  : null
              ]}
              onPress={this.navigateToScreen("Donate")}
            >
              Donate Us
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  headerContainer: {
    height: 150
  },
  headerText: {
    color: "#fff8f8"
  },
  screenContainer: {
    paddingTop: 20,
    width: "100%"
  },
  screenStyle: {
    height: 50,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  screenTextStyle: {
    fontSize: 15,
    marginLeft: 10
  },
  selectedTextStyle: {
    fontWeight: "bold",
    // color: "#00adff"
  },
  activeBackgroundColor: {
    backgroundColor: "#DCDCDC"
  }
});
