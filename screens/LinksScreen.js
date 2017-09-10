import React from 'react';
import { ScrollView, StyleSheet, View, Button, Alert, Image, Text, Animated } from 'react-native';
import renderIf from './renderIf';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'test',
  };

  constructor(props) {
    super(props);
    this.state = {isUserLoggedIn: true};

  _handleButtonPress = () => {
    isUserLoggedIn=!isUserLoggedIn;
    );
  };

  render() {
    return (
      {renderIf(this.state.isUserLoggedIn,


      <ScrollView style={styles.container}>

           <View style={{flexDirection: 'row'}}>
           <Image source={require('../assets/images/cornellmeme1.png')}
           style={styles.welcomeImage}
            />
            <Image source={require('../assets/images/cornellmeme2.png')}
            style={styles.welcomeImage}
             />
             </View>

             <View style={{flexDirection: 'row'}}>
             <Image source={require('../assets/images/cornellsomething.png')}
             style={styles.welcomeImage}
              />
              <Image source={require('../assets/images/swimtest.png')}
              style={styles.welcomeImage}
               />
               </View>
               <Button
                title="Press me"
                  onPress={this._handleButtonPress}
       />
      </ScrollView>
    )}
    {renderIf(!this.state.isUserLoggedIn,

      <ScrollView style={styles.container}>

           <View style={{flexDirection: 'row'}}>
           <Image source={require('../assets/images/monster.png')}
           style={styles.welcomeImage}
            />
            <Image source={require('../assets/images/news.png')}
            style={styles.welcomeImage}
             />
             </View>

             <View style={{flexDirection: 'row'}}>
             <Image source={require('../assets/images/company.png')}
             style={styles.welcomeImage}
              />
              <Image source={require('../assets/images/cmeme1.png')}
              style={styles.welcomeImage}
               />
               </View>
               <Button
                title="Press me"
                  onPress={this._handleButtonPress}
       />
      </ScrollView>
    )}


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
    margin: 20,
    paddingTop: 50,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 20,
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
  welcomeContainer2: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  }
});

// onPress={() => this.setState(
//  {uri1: "../assets/images/cornellmeme2.png"};
// )}

//{this.state.uri1 ? <Text>{this.state.text}</Text> : null}
