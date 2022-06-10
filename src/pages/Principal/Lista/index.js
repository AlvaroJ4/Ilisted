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


import Feather from 'react-native-vector-icons/Feather'
import TaskList from '../TaskList';

import { auth } from '../../../config/firebase';

export default function Lista() {
  
  const userId = auth.currentUser.uid

  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  const [key,setKey] = useState('');
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

    // O usuario pode editar aqui
    if(key !== ''){
      firebase.database().ref('tarefas').child(userId).child(key).update({
        nome: newTask
      })
      .then(()=> {
        const taskIndex = tasks.findIndex( (item) => item.key === key)
        const taskClone = tasks;
        taskClone[taskIndex].nome = newTask

        setTasks([...taskClone])


      })

      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      return;
    }
    // Acaba aqui a edição de tarefa


    // Adicionar nova tarefa na lista
    let tarefas =firebase.database().ref('tarefas').child(userId)
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
  
// função deletar
  function handleDelete(key) {
    firebase.database().ref('tarefas').child(userId).child(key).remove()
    .then(() => {
      const findTask = tasks.filter( item => item.key !== key)
      setTasks(findTask)
    })
  }
// fim da função deletar



  function handleEdit(data){
    setKey(data.key)
    setNewTask(data.nome)
    inputRef.current.focus();
  }

  function cancelEdit() {
    setKey('');
    setNewTask('');
    Keyboard.dismiss();
  }
  
  return (
    <SafeAreaView style={styles.container}>
 
       { key .length > 0 && (

         <View style={{ flexDirection: 'row', marginBottom: 19,alignItems: 'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={cancelEdit} >
            <Feather name="x-circle" size={20} color="#FF0000"/>
          </TouchableOpacity>
          <Text style={{ marginLeft: 5, color: '#FF0000' }}>
            Basta clicar no 'x' para cancelar tarefa!
          </Text>
       </View>

       )}
     
     <View style={styles.containerTask}>
       <TextInput
         style={styles.input}
         placeholder="O que vai fazer hoje?"
         value={newTask}
         onChangeText={ (text) =>  setNewTask(text) }
         ref={inputRef}
       />
       <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
         <Text style={styles.buttonText}>+</Text>
       </TouchableOpacity>
     </View>
 
 
     <FlatList
       data={tasks}
       keyExtractor={ item => item.key }
       renderItem={ ({ item }) => (
         <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
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
     backgroundColor: '#ffffff'
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