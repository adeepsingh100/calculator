import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class calculator extends React.Component{

state = {
  value: 0,
  count: 0,
};

add = () =>{
  this.setState({
    count:1
  });
};
min = () =>{
  this.setState({
    count:2
  });
};
div = () =>{
  this.setState({
    count:3
  });
};
mul = () =>{
  this.setState({
    count:4
  });
};
countPress = (passValue) => {
  const {count, value} = this.state
  if(count === 1)
  {
   this.setState(({
    value : passValue + value
   }));
  }
  else if (count === 2)
  {
    this.setState(({
      value : value - passValue
     }));
  }
  else if (count === 3)
  {
    this.setState(({
      value : value / passValue
     }));
  }else {

    this.setState(({
      value : passValue * value
     }));
  }
}
  render(){
   const {value,count} = this.state
    return(
      <View style={styles.Container} >
      
          <View style={styles.clearView}>
            <TouchableOpacity style={styles.clear} onPress={() => this.setState({count:0, value :0})}>
              <Text style={styles.textClear}>Clear</Text>
            </TouchableOpacity>
          </View>
       
          <View style={styles.answerShow}>
            <Text style={styles.answerText}>{value}</Text>
          </View>
          
          <View style={styles.mathfnView}>
          <TouchableOpacity style={styles.mathfn} onPress={this.add}>
              <Text style={styles.textmathfn}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mathfn} onPress={this.min}>
              <Text style={styles.textmathfn}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mathfn} onPress={this.div}>
              <Text style={styles.textmathfn}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mathfn} onPress={this.mul}>
              <Text style={styles.textmathfn}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mathfnView}>
          <TouchableOpacity style={styles.mathfn} onPress={() => this.countPress(1)}>
              <Text style={styles.textmathfn}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mathfn} onPress={() =>  this.countPress(2)}>
              <Text style={styles.textmathfn} >2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mathfn} onPress={() =>  this.countPress(3)}>
              <Text style={styles.textmathfn}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mathfn} onPress={() => this.countPress(4)}>
              <Text style={styles.textmathfn}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mathfnView}>
          <TouchableOpacity style={styles.mathfn} onPress={() =>this.countPress(5)}>
              <Text style={styles.textmathfn}>5</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.mathfn} onPress={() => this.countPress(6)}>
              <Text style={styles.textmathfn}>6</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.mathfn} onPress={() => this.countPress(7)}>
              <Text style={styles.textmathfn}>7</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.mathfn} onPress={() =>  this.countPress(8)}>
              <Text style={styles.textmathfn}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mathfnView}>
          <TouchableOpacity style={styles.mathfn} onPress={() => this.countPress(9)}>
              <Text style={styles.textmathfn}>9</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.mathfn} onPress={() => this.countPress(0)}>
              <Text style={styles.textmathfn}>0</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container:{
    flex:1
  },
  clearView:{
    justifyContent:'center',
    alignItems:'flex-end',
    height:200,
    
  },
  clear:{
    backgroundColor:"black",
    height:50,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    marginRight:35,
    borderRadius:30
  },
  textClear:{
    fontSize:20,
    color:'white'
  },
  answerShow:{
    justifyContent:'center',
    alignItems:'center',
    height:150
  },
  answerText:{
    fontSize:60,
  },
mathfnView:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
mathfn:{
  backgroundColor:'black',
  justifyContent:'center',
  alignItems:'center',
  margin:5,
  padding:10,
  width:90,
  borderRadius:10
},
textmathfn:{
  fontSize:30,
  color:'white',
  textAlign:'center'
}
})
export default calculator;