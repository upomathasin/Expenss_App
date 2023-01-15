import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../constant/style'
const ExpensesSummary = ({expenses,periodName}) => {

    const expensesSum=expenses.reduce((sum,expense)=>{
        return sum+expense.amount;
    },0)
  return (
    <View style={Styles.containar}>
    <Text style={Styles.period}>{periodName}</Text>
    <Text style={Styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const Styles= StyleSheet.create({
  containar:{
    padding:8,
    backgroundColor: GlobalStyle.colors.primary50
    ,
    borderRadius:6,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row'
  },
  period:{
    fontSize:12,
    color:GlobalStyle.colors.primary400
  },
  sum:{
    fontSize:16,
        fontWeight:'bold',
    color:GlobalStyle.colors.primary500
  }
})