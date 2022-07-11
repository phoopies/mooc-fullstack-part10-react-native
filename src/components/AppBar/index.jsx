import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import Stack from '../Stack';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Constants.statusBarHeight === 0 ? 50 : Constants.statusBarHeight,
    paddingLeft: 20,
    backgroundColor: theme.colors.primary,
  },
});

const AppBar = () => {
  return <Stack row={true} style={styles.container}>
    <AppBarTab title={'Repositories'} />
  </Stack>;
};

export default AppBar;