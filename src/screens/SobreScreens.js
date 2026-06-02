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
          HGK MOX é um aplicativo de streaming de filmes e séries desenvolvido por Karen Parpinelli.
        </Text>

        <Text style={styles.text}>
          O objetivo do site é permitir que o usuário navegue por categorias, pesquise conteúdos e visualize informações sobre filmes e séries.
        </Text>

        <Text style={styles.subtitle}>
          Tecnologias Utilizadas:
        </Text>

        <Text style={styles.list}>• React Native</Text>
        <Text style={styles.list}>• React Navigation</Text>
        <Text style={styles.list}>• Stack Navigation</Text>
        <Text style={styles.list}>• Bottom Tab Navigation</Text>
        <Text style={styles.list}>• Drawer Navigation</Text>

        <Text style={styles.footerText}>
          Projeto sobre React Native desenvolvido por Karen Parpinelli. Todos os direitos reservados.
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
    lineHeight: 24,
    marginBottom: 15,
  },

  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  list: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
  },

  footerText: {
    color: '#ddd',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
    fontStyle: 'italic',
  },
});