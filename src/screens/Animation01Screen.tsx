import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation01Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();
  const { theme: { colors } } = useContext( ThemeContext );

  return (
    <View style={ styles.container }>

        <Animated.View style={{ ...styles.purpleBox, opacity, marginBottom: 20, transform: [{ translateY: position }], backgroundColor: colors.primary }}/> 
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
          <Button
              title="Fade In"
              onPress={ () => { fadeIn(); startMovingPosition( -100, 0, 700  ); }}
              color={ colors.primary }
          />
          <Button
              title="Fade Out"
              onPress={ () => { fadeOut(); startMovingPosition( 0, -100, 700 ); }}
              color={ colors.primary }
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
      width: 150,
      height: 150,
  }
});