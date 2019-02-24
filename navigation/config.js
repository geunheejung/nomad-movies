import { createStackNavigator } from 'react-navigation';
import { BG_COLOR, TINT_COLOR } from '../constatns/Color';

export const headerStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR
  },
  hedaerTintColor: TINT_COLOR,
  headerBackTitleStyle: TINT_COLOR
}

export const createStack = (screen, title) => 
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles
      }
    }
  })