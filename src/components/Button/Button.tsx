import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
interface IProps {
  type?: 'primary' | 'ghost' | 'warning';
  onPress?: () => void;
}
const Index: React.FC<IProps> = ({ onPress, type = 'primary', children }) => {
  let btnTypeStyle = styles.primary;
  let btnTypeTextStyle = styles.primaryText;
  switch (type) {
    case 'primary':
      btnTypeStyle = styles.primary;
      break;
    case 'ghost':
      btnTypeStyle = styles.ghost;
      btnTypeTextStyle = styles.ghostText;
      break;
    case 'warning':
      btnTypeStyle = styles.warning;
      break;
    default:
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress();
      }}
    >
      <View style={StyleSheet.flatten([styles.button, btnTypeStyle])}>
        <Text style={StyleSheet.flatten([btnTypeTextStyle])}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 36,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  primary: {
    backgroundColor: '#108ee9',
  },
  primaryText: {
    color: '#fff',
    fontSize: 18,
  },
  ghost: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  ghostText: {
    color: '#333',
    fontSize: 18,
  },
  warning: {
    backgroundColor: '#e94f4f',
  },
  warningText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Index;
