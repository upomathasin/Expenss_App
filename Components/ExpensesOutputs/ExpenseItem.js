import { View, Text ,Pressable,StyleSheet} from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../constant/style'
import {getFormatedDate} from '../../util/date'
import { useNavigation } from '@react-navigation/native'
import ManageExpenses from './../../Screens/ManageExpenses';


const ExpenseItem = ({id,description,amount,date}) => {
  const navigation= useNavigation();
  function ExpensePressHandler(){
    
    navigation.navigate("Manage Expenses",{
       expenseid:id
    })
    
    }
  return (
    <Pressable onPress={ExpensePressHandler} 
    style={({pressed})=>pressed && Styles.pressed}
    >
      <View style={Styles.expenseItem}>
    <View>
        <Text style={[Styles.textBase,Styles.description]}>{description}</Text>
        <Text style={Styles.textBase}>{date.toDateString()}</Text>
   </View>
   <View style={Styles.ammountContaiar}>
   <Text style={Styles.amount}>{amount}</Text>
    </View>

</View>

    </Pressable>

  )
}

export default ExpenseItem


const Styles=StyleSheet.create({

  expenseItem:{
    padding:12,
    marginVertical:8,
    backgroundColor: GlobalStyle.colors.primary500,
    flexDirection:'row',
    justifyContent:'space-between',
    elevation:3,
    shadowColor:GlobalStyle.colors.primary500,
    shadowRadius:4,
    shadowOpacity:0.4
  
  
  },

pressed:{
opacity:0.75
},


  
  textBase:{
    color: GlobalStyle.colors.primary50
  },
  description:{
    fontSize:16,
    marginBottom:4,
    fontWeight:'bold'
  },
  ammountContaiar:{
    paddingHorizontal:12,
    paddingVertical:4,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  amount:{
    color:GlobalStyle.colors.primary500,
    fontWeight:'bold'
  }
})