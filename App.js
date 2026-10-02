import React, { Component, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

function App(){
  let initial_jobs = [
        {id: 1, vaga: 'Desenvolvedor Backend Pleno', salario: 6500.00, desc: 'Desenvolvimento e manutenção de APIs REST em Node.js ou Java, integração com bancos de dados relacionais (PostgreSQL) e participação em code reviews. Desejável experiência com Docker e AWS.', contato: 'rh@techsolucoes.com.br'},
    {id: 2, vaga: 'Desenvolvedor Front-end', salario: 5500.00, desc: 'Criação de interfaces responsivas com React e TypeScript, consumo de APIs e colaboração com o time de UX/UI para garantir boa experiência do usuário.', contato: 'carreiras@webcriativa.com.br'},
    {id: 3, vaga: 'Analista de Suporte Técnico', salario: 3200.00, desc: 'Atendimento a usuários internos e externos, resolução de chamados de primeiro e segundo nível, configuração de equipamentos e manutenção de sistemas operacionais Windows e Linux.', contato: 'suporte.rh@infoserv.com.br'},
    {id: 4, vaga: 'Engenheiro de Dados', salario: 8000.00, desc: 'Construção e otimização de pipelines de dados (ETL/ELT), modelagem de data warehouse e automação de processos com Python e SQL. Conhecimento em Airflow e Spark é um diferencial.', contato: 'vagas@datainsight.com.br'},
    {id: 5, vaga: 'Designer UI/UX', salario: 4800.00, desc: 'Criação de wireframes, protótipos e layouts no Figma, condução de pesquisas com usuários e testes de usabilidade. Desejável conhecimento em Design System.', contato: 'talentos@studiopixel.com.br'},
      ]


  const [job, setJob] = useState(initial_jobs)


  return(
    <View>
      <Text style={[styles.titulos, styles.textoPrincipal]}>Vagas </Text>
      <FlatList
        data={job}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Job data={item}/>}
      />
    </View>
  )
}

export default App;

function Job(props){
  return(
    <View style={styles.box}>
      <Text style={styles.titulos}>{props.data.vaga}</Text>
      <Text style={styles.textos}>Salário: R$ {props.data.salario}</Text>
      <Text style={styles.textos}>Descrição: {props.data.desc}</Text>
      <Text style={styles.textos}>Contato: {props.data.contato}</Text>
    </View>
  );
}