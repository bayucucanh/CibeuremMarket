import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  Dimensions,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const CustomModal = ({visibleModal, handleDismiss, content}) => {
  const animateCatch = useState(new Animated.Value(0))[0];

  const _resetPositionAnim = async () => {
    Animated.timing(animateCatch, {
      toValue: 0,
      easing: Easing.bounce,
      duration: 300,
      useNativeDriver: true
    }).start();
  };
  const _closeAnim = async () => {
    animateCatch.setValue(0);
    Animated.timing(animateCatch, {
      toValue: Dimensions.get('screen').height,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const top = animateCatch.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  // const panResponder = React.useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponder: () => false,
  //     onPanResponderMove: Animated.event([null, {dy: this.state.panY}]),
  //     onPanResponderRelease: (e, gs) => {
  //       if (gs.dy > 0 && gs.vy > 2) {
  //         return this._closeAnim.start(() => this.props.onDismiss());
  //       }
  //       return this._resetPositionAnim.start();
  //     },
  //   }),
  // );

  useEffect(() => {
    if (visibleModal) {
      
    }
  }, [])
  

  return (
    <Modal
      animated
      animationType="fade"
      visible={visibleModal}
      transparent
      onRequestClose={handleDismiss}>
      <View style={styles.overlay}>
        <View style={[styles.container]}>

        {content}
        </View>
        {/* <Animated.View style={[styles.container, {top}]}>
          {content}
          <TouchableOpacity onPress={() => _closeAnim()}>
            <Text>Close</Text>
          </TouchableOpacity>
        </Animated.View> */}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    padding: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
