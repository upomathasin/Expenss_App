import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
const ManageExpenses = ({route,navigation}) => {

  const editedExpenseId= route.params?.expenseid
  const isEditing= !!editedExpenseId;

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing?'Edit Expense':'Add Expense'
     })

  },[navigation,isEditing])

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  )
}

export default ManageExpenses