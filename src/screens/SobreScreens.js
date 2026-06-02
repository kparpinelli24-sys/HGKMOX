import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function SobreScreens() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Sobre o Projeto
      </Text>

      <View style={styles.card}>

        <Text style={styles.text}>
          HGK MOX é um aplicativo de streaming de
          filmes e séries desenvolvido em React Native.
        </Text>

        <Text style={styles.text}>
          O objetivo do projeto é permitir que o
          usuário navegue por categorias, pesquise
          conteúdos e visualize informações dos filmes.
        </Text>

        <Text style={styles.text}>
          Tecnologias utilizadas:
        </Text>

        <Text style={styles.list}>
          • React Native
        </Text>

        <Text style={styles.list}>
          • React Navigation
        </Text>

        <Text style={styles.list}>
          • Stack Navigation
        </Text>

        <Text style={styles.list}>
          • Bottom Tab Navigation
        </Text>

        <Text style={styles.list}>
          • Drawer Navigation
        </Text>

      </View>

    </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#6b2c2c',
    borderRadius: 15,
    padding: 20,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },

  list: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
  },

});