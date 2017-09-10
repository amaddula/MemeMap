import React from 'react';
import { ScrollView, StyleSheet, View, Button, Alert, Image, Text, Animated } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'test',
  };

  //state = { uri1: null};
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <View style={styles.buttonContainer}>
             <Button
               title="button 1?"
               onPress={() => this.setState({
                 var uri1 =  '../assets/images/cornellmeme2.png'
                 //if (uri1 != null){
                 //<Image source={require(uri1)}>
               }
             />
           </View>
           <View style={styles.welcomeContainer}>
           <Image source={require('../assets/images/cornellmeme1.png')}
           style={styles.welcomeImage}
            />
           </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    margin: 20
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 0,
    //marginLeft: -10,
  },
  newImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 0,
    //marginLeft: -10,
    paddingTop: 200,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
