import React from 'react'
import {View,Text,Button,} from 'react-native'
import styles from './styles';
export default function SplashScreen({navigation}) { 
  return (
        <View style={styles.container}>
          <Text style={styles.mainHeading}>This is SplashScreen</Text>
          <Button
            title="Skip"
            onPress={() => navigation.navigate('DashBoard')}
          />
        </View>
      );
}
