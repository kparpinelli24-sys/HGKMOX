import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import romance1 from '../assets/diario.jpg';
import romance2 from '../assets/comoeu.jpg';
import romance3 from '../assets/todosmenos.jpg';
import romance4 from '../assets/jogomor.jpg';
import romance5 from '../assets/Simplesmente.jpg';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>
          HGK MOX
        </Text>

        <TextInput
          style={styles.search}
          placeholder="Encontre o que procurei..."
          placeholderTextColor="#ccc"
        />
      </View>

      <Text style={styles.title}>
        ESCOLHA QUAL SEU ESTILO PREFERIDO
        {'\n'}
        DE FILMES E SERIES
      </Text>

      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Acao')}
      >
        <Text style={styles.categoryText}>Ação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Comedia')}
      >
        <Text style={styles.categoryText}>Comédia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Terror')}
      >
        <Text style={styles.categoryText}>Terror</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Romance')}
      >
        <Text style={styles.categoryText}>Romance</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.moviesContainer}
      >

        <Image source={romance1} style={styles.movie} />
        <Image source={romance2} style={styles.movie} />
        <Image source={romance3} style={styles.movie} />
        <Image source={romance4} style={styles.movie} />
        <Image source={romance5} style={styles.movie} />

      </ScrollView>

      <Text style={styles.footer}>
      © 2026 HGKMOX. Todos os direitos reservados.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d0000',
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  logo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  search: {
    backgroundColor: '#7b5555',
    width: '65%',
    height: 45,
    borderRadius: 25,
    paddingHorizontal: 15,
    color: '#fff',
  },

  title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 18,
    letterSpacing: 2,
  },

  category: {
    backgroundColor: '#650000',
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 25,
    borderRadius: 25,
    alignItems: 'center',
  },

  categoryText: {
    color: '#fff',
    fontSize: 32,
    fontStyle: 'italic',
  },

  moviesContainer: {
    marginTop: 10,
    paddingLeft: 15,
  },

  movie: {
    width: 110,
    height: 180,
    borderRadius: 10,
    marginRight: 10,
  },

  footer: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 30,
  },
});