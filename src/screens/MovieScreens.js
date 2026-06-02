import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function MovieScreen({ route }) {
  const titulo = route?.params?.titulo || 'Filme';
  const imagem =
    route?.params?.imagem ||
    'https://via.placeholder.com/500x700';

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: imagem }}
        style={styles.poster}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {titulo}
        </Text>

        <Text style={styles.info}>
          Romance • 2025 • 2h 05min
        </Text>

        <Text style={styles.description}>
          Esta é uma descrição de exemplo do filme.
          Aqui você pode colocar sinopse, elenco,
          diretor e outras informações importantes.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            ▶ Assistir
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d0000',
  },

  poster: {
    width: '100%',
    height: 500,
  },

  content: {
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  info: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 20,
  },

  description: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#220000',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});