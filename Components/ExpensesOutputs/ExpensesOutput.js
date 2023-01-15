import { View, Text, FlatList ,StyleSheet} from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyle } from '../../constant/style'
const DUMMY_EXPENSES  =[
{
  id:'e1',
  description:'A pair of shoes',
  amount:59.99,
  date:new Date('2021-12-19')
},
{
  id:'e2',
  description:'A pair of trousers',
  amount:89.99,
  date: new Date('2022-01-05')
},
{
  id:'e3',
  description:'Some Bananas',
  amount:89.99,
  date: new Date('2021-12-05')
},
{
  id:'e4',
  description:'A Book',
  amount:89.99,
  date: new Date('2022-02-19')
},

{
  id:'e5',
  description:'Another Book',
  amount:89.99,
  date: new Date('2023-02-14')
},

{
  id:'e6',
  description:'A pair of shoes',
  amount:59.99,
  date:new Date('2021-12-19')
},
{
  id:'e7',
  description:'A pair of trousers',
  amount:89.99,
  date: new Date('2022-01-05')
},
{
  id:'e8',
  description:'Some Bananas',
  amount:89.99,
  date: new Date('2021-12-05')
},
{
  id:'e9',
  description:'A Book',
  amount:89.99,
  date: new Date('2022-02-19')
},

{
  id:'e10',
  description:'Another Book',
  amount:89.99,
  date: new Date('2023-02-29')
},


]

const ExpensesOutput = ({expenses,expensesPeriod}) => {
  return (
    <View style={styles.containar}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput


const styles = StyleSheet.create({
containar:{
  padding:24,
  backgroundColor: GlobalStyle.colors.primary700,
  flex:1
}
})