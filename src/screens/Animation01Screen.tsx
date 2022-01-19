import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation01Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  return (
    <View style={ styles.container }>

        <Animated.View style={{ ...styles.purpleBox, opacity, marginBottom: 20, transform: [{ translateY: position }] }}/> 
        <View style={{ flexDirection: 'row' }}>
          <Button
              title="Fade In"
              onPress={ () => { fadeIn(); startMovingPosition( -100, 0, 700  ); }}
          />
          <Button
              title="Fade Out"
              onPress={ () => { fadeOut(); startMovingPosition( 0, -100, 700 ); }}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox:{
      backgroundColor: '#5856D6',
      width: 150,
      height: 150,
  }
});