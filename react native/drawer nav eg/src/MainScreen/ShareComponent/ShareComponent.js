import React, { Component } from "react";
import { View, Text } from "react-native";
import Share from "react-native-share";
import { StyleSheet } from "react-native";
import { Button } from "native-base";

export default class ShareComponent extends Component {
  shareHandler = () => {};
  render() {
    let shareOptions = {
      title: "Tiles Calculator Result",
      message: this.props.msg,
      subject: "Tiles Calculator Result" //  for email
    };
    return (
      <View style={styles.shareContainer}>
        <Button
          block
          success
          onPress={e => {
            Share.open(shareOptions);
          }}
        >
          <Text>Share Result</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shareContainer: {
    marginTop: 10
  }
});
