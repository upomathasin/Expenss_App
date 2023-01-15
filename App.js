import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpenses from './Screens/ManageExpenses';
import RecentExpenses from './Screens/RecentExpenses';
import AllExpenses from './Screens/AllExpenses'
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyle } from './constant/style';
import IconButton  from './Ui/IconButton';
const Stack =createNativeStackNavigator();
const BottomTabs= createBottomTabNavigator();

function ExpensesOverview({navigation}){
  return  <BottomTabs.Navigator 
  screenOptions={
   ()=>({
    headerStyle:{backgroundColor:GlobalStyle.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyle.colors.primary500},
    tabBarActiveTintColor:GlobalStyle.colors.accent500,
    headerRight: ({tintColor})=><IconButton  icon="add" size={24}  color={tintColor}  onPress={()=>{navigation.navigate("Manage Expenses")}}/>
               
    
  })
  }
  
  >
    <BottomTabs.Screen name=' Recent Expenses' component={RecentExpenses}
    options={
      {
        title:'Recent Expenses',
        tabBarLabel:'Recent',
        tabBarIcon:({size,color})=><Ionicons name='hourglass' size={size} color={color}/>
        
        }
      }
    
    
    
    />
    <BottomTabs.Screen name=' All Expenses' component={AllExpenses}
        options={
          {
            title:'All Expenses',
            tabBarLabel:'ALl Expenses',
            tabBarIcon:({size,color})=> <Ionicons name='calendar' size={size} color={color}/>
    
            }
          }
        
    />
  </BottomTabs.Navigator>
}


export default function App() {

  return (
    <>
     <StatusBar style='="auto'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: GlobalStyle.colors.primary500
        }
      }}>
      <Stack.Screen name="Expenses OverView" component={ExpensesOverview} options={{headerShown:false}}/>
        <Stack.Screen name="Manage Expenses" component={ManageExpenses}/>
      
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
