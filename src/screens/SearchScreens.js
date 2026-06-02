import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

export default function SearchScreen() {

  const [pesquisa, setPesquisa] = useState('');

  const filmes = [
    'Diário de uma Paixão',
    'Titanic',
    'Como Eu Era Antes de Você',
    'Avatar',
    'Vingadores',
    'Interestelar',
    'O Jogo do Amor',
    'Todos Menos Você',
  ];

  const resultado = filmes.filter((filme) =>
    filme.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Buscar Filmes e Séries
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome..."
        placeholderTextColor="#999"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <FlatList
        data={resultado}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.movie}>
              {item}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4d0000',
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#6b2c2c',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  movie: {
    color: '#fff',
    fontSize: 18,
  },

});