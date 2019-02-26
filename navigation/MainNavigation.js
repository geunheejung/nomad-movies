import { createStackNavigator, createAppContainer } from 'react-navigation';
import { headerStyles } from './config';
import TabNavigation from './TabNavigation';
import DetailScreen from '../screens/Detail';

// route Key: route Component 구성, Stack 탐색기에게 이것을 탐색하라고 제시하는듯함.
const RouteConfigs = {
  Tabs: { 
    screen: TabNavigation, 
    navigationOptions: { 
      header: null,
    } 
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      ...headerStyles,      
    }
  },
};
  
const StackNavigatorConfig = {
  headerBackTitleVisible: false,
};

// Stack Navigator를 만듦으로써 Stack 네비게이션 구조를 native app 에 적용함.
const MainNavigation = createStackNavigator(
  RouteConfigs,
  StackNavigatorConfig
);

export default createAppContainer(MainNavigation);