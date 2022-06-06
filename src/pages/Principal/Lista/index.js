import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  Keyboard
 } from 'react-native';

import firebase from 'firebase/compat';

import { getAuth } from "firebase/auth";
import Feather from 'react-native-vector-icons/Feather'
import TaskList from '../TaskList';
import { auth } from '../../../config/firebase';



export default function Lista() {
 
  const auth = getAuth();

  const userId = auth.currentUser.uid;
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  useEffect(() => {
    function getUser(){

      if(!userId){
        return;
      }

      firebase.database().ref('tarefas').child(userId).once('value', (snapshot) => {
        setTasks([]);

        snapshot?.forEach((childItem) => {
          let data ={
            key: childItem.key,
            nome: childItem.val().nome
          }

          setTasks(oldTasks => [...oldTasks, data])
        })


      })

    }

    getUser();
  }, [userId])

  function handleAdd() {
    if (newTask === '') {
      return;
    }
    let tarefas =firebase.database().ref('tarefas')
    let chave = tarefas.push().key

    tarefas.child(chave).set({
      nome: newTask
    })
    .then(() => {
      const data = {
        key: chave,
        nome: newTask
      };

      setTasks(oldTasks => [...oldTasks, data])

    })

    Keyboard.dismiss();
    setNewTask('');
  }
  

  function handleDelete(key) {
    console.log(key);
  }

  
  return (
    <SafeAreaView style={styles.container}>
 
       <View style={{ flexDirection: 'row', marginBottom: 8, }}>
         <TouchableOpacity >
           <Feather name="x-circle" size={20} color="#FF0000"/>
         </TouchableOpacity>
         <Text style={{ marginLeft: 5, color: '#FF0000' }}>
           Você está editando uma tarefa!
         </Text>
       </View>

     
     <View style={styles.containerTask}>
       <TextInput
         style={styles.input}
         placeholder="O que vai fazer hoje?"
         value={newTask}
         onChangeText={ (text) =>  setNewTask(text) }
         
       />
       <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
         <Text style={styles.buttonText}>+</Text>
       </TouchableOpacity>
     </View>
 
 
     <FlatList
       data={tasks}
       keyExtractor={ item => item.key }
       renderItem={ ({ item }) => (
         <TaskList data={item} deleteItem={handleDelete}  />
       )}
     />
 
    </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   container:{
     flex:1,
     paddingTop: 25,
     paddingHorizontal: 10,
     backgroundColor: '#F2f6fc'
   },
   containerTask:{
     flexDirection: 'row'
   },
   input:{
     flex:1, 
     marginBottom: 10,
     padding: 10,
     backgroundColor: '#FFF',
     borderRadius: 4,
     borderWidth: 1,
     borderColor: '#141414',
     height: 45,
   },
   buttonAdd:{
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:  5,
    paddingHorizontal: 14,
    borderRadius: 4,
   },
   buttonText:{
     color: '#FFF',
     fontSize: 22,
   }
 })