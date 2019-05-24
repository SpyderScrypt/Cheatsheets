import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import DonateScreen from "../DonateScreen/DonateScreen";
import MainScreen from "../MainScreen/MainScreen";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import { StyleSheet } from "react-native";
import { Icon } from "native-base";

const MainScreenNavigator = createStackNavigator(
  {
    MainScreenNavigator: MainScreen
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="menu"
            style={styles.icon}
            onPress={() => navigation.openDrawer()}
          />
        ),
        title: "Tiles Calculator",
        headerStyle: {
          backgroundColor: "#f1f1ff"
        }
      };
    }
  }
);

const DonateScreenNavigator = createStackNavigator(
  {
    DonateScreenNavigator: DonateScreen
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={styles.icon}
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
        ),
        title: "Donate Us",
        headerStyle: {
          backgroundColor: "#f1f1ff"
        }
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainScreenNavigator
    },
    Donate: {
      screen: DonateScreenNavigator
    }
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: 210,
    drawerBackgroundColor:"#eeeeff"
  }
);

const MainNavigation = createAppContainer(AppDrawerNavigator);

export default MainNavigation;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 14
  }
});
