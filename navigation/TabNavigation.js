import React from 'react';
import { Platform } from 'react-native';
import { 
  createBottomTabNavigator, 
  createAppContainer,
} from 'react-navigation';
import { BG_COLOR } from '../constatns/Color';
import { createStack } from './config';
import TabBarIcon from '../components/TabBarIcon';
import MovieScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';

const getAssetByOs = (name) => Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;
 
const routeConfig = {
  Move: { 
    screen: createStack(MovieScreen, 'Movies'),
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon  
          focused={focused} 
          name={getAssetByOs('film')}
        />
      ),    
    }
  },
  TV: { 
    screen: createStack(TVScreen, 'TV'),
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon  
          focused={focused}           
          name={getAssetByOs('tv')}
        />
      ),    
    }
  },
  Search: { 
    screen: createStack(SearchScreen, 'Search'),
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon  
          focused={focused} 
          name={getAssetByOs('search')}
        />
      ),    
    }
  },
};

const tabOptions = {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: BG_COLOR
    }
  }
}

const TabNavation = createBottomTabNavigator(
  routeConfig,
  tabOptions,
);

// 리액트 네비게이션에게 애플리케이션이 여기 있다고 말해주는것. createAppContainer
export default createAppContainer(TabNavation);