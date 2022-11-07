import {StyleSheet} from 'react-native';
import commonStyles from '../../../../common.styles';

export const WorkspaceWidgetHoursStyles = StyleSheet.create({
  hourSector: {
    height: 50
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EFEFEF'
  },
  hour: {
    color: '#aaa',
    fontSize: 12,
    fontWeight: '400'
  },
  details: {
    width: 25,
    height: 25
  },
  container: {
    position: 'relative',
  },
  currentTimeLine: {
    position: 'absolute',
    width: '89%',
    height: 3,
    backgroundColor: commonStyles.secondaryBackground,
    right: 0,
    borderRadius: 3,
    zIndex: 1
  },
  circle: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: commonStyles.secondaryBackground,
    borderRadius: 50,
    top: -2.5,
    right: 0
  }
});