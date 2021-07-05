/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Entypo , MaterialIcons  } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background ,
      labelStyle:{
        fontSize:12,
        marginBottom:3
      },
      style:{
        height:55
      }}}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={30} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={48} color="white" />,
          tabBarLabel:()=>null,
          
        }}
      />
      <BottomTab.Screen
        name="Subscription"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="subscriptions" size={30} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={30} color="white" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
