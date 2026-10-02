import React, { Component, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from '../../styles.js';

function ComponenteFlatList(){
  let initial_jobs = [
        {id: 1, vaga: 'Joseffe', desc: 32, contato: 'joseffe@gmail.com'},
        {id: 2, vaga: 'Joseffe', desc: 32, contato: 'joseffe@gmail.com'},
        {id: 3, vaga: 'Joseffe', desc: 32, contato: 'joseffe@gmail.com'},
        {id: 4, vaga: 'Joseffe', desc: 32, contato: 'joseffe@gmail.com'},
        {id: 5, vaga: 'Joseffe', desc: 32, contato: 'joseffe@gmail.com'},
      ]


  const [job, setJob] = useState(initial_jobs)


  return(
    <View style={styles.box}>
      <FlatList
      data={job}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Job data={item}/>}
      />
    </View>
  )
}

function Job(props){
  return(
    <View>
      <Text> Vaga: {props.data.vaga} </Text>
      <Text> Descrição: {props.data.desc} </Text>
      <Text> Contato: {props.data.contato} </Text>
    </View>
  );
}
