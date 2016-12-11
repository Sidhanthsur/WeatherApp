import React , {Component} from 'react';
import {AppRegistry,Text,TextInput,
  StyleSheet,View,
Image} from 'react-native';




class Forecast extends Component{
  render(){
    return(
      <View>
      
      <Text style={styles.bigText}>
      {this.props.main}
      </Text>
      <Text style={styles.mainText}>
      Current Conditions : {this.props.description}
      </Text>
      <Text style={styles.bigText}>
      {this.props.temp} ^F
      </Text>
      <Text style={styles.mainText}>
      City: {this.props.city}
      </Text>
      </View>

    );
  }
}



class Hello extends Component{

  constructor(props)
  {
    super(props);
    this.state = {zipcode: ''};
    this.state = {forecast:{
      main: 'clouds',
      description: 'few clounds',
      temp: 45,
      city: 'chennai'
    }}
  }

handleSubmit = ()=>{
  console.log("pressed");
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.zipcode+"&units=imperial&APPID=d44082e316fc5b2328bee1f475c2b01a")
  .then((response)=> response.json())
  .then((responseJSON)=>{
    console.log(responseJSON);
    this.setState({forecast:{main:responseJSON.weather[0].main,
      description: responseJSON.weather[0].description,
    temp: responseJSON.main.temp,
    city: responseJSON.name
}})
  })
  .catch((error)=> {
    console.log(error);
  })
  
}

  render(){
    return(
      
     <Image style={styles.bgImage}
    // source={{uri: 'http://herotalkies-a.akamaihd.net/Images/Device/Android/Mobile/login_potrait_bg.jpg'}} >
      source = {require('./Assets/space.jpg')}
      >
      <Text style= {styles.welcome}>
      Current weather for   
      </Text>
      <TextInput
      style = {{color: 'white'}}
      onSubmitEditing= {this.handleSubmit}
      onChangeText={(zipcode)=> this.setState({zipcode})}>

      </TextInput>
      <Forecast
      main = {this.state.forecast.main}
      description = {this.state.forecast.description}
      temp = {this.state.forecast.temp}
      city = {this.state.forecast.city}>
      </Forecast>
      </Image>
 
    
    );
  }
}

var styles = StyleSheet.create({
  welcome: {
      color: '#FFFFFF'
  },
  bigText:{
    
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  bgImage: {
   
    flex:1
  }
})

AppRegistry.registerComponent('book',()=> Hello);