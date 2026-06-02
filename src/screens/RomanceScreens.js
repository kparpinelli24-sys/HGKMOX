import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import diarioPaixao from '../assets/diario.jpg';
import comoEuEra from '../assets/comoeu.jpg';
import todosMenosVoce from '../assets/todosmenos.jpg';
import jogoDoAmor from '../assets/jogomor.jpg';
import simplesmenteAcontece from '../assets/Simplesmente.jpg';
import ideiaDeVoce from '../assets/ideia.jpg';

export default function RomanceScreen({ navigation }) {
  const filmes = [
    {
      id: 1,
      titulo: 'Diário de uma Paixão',
      imagem: diarioPaixao,
    },
    {
      id: 2,
      titulo: 'Como Eu Era Antes de Você',
      imagem: comoEuEra,
    },
    {
      id: 3,
      titulo: 'Todos Menos Você',
      imagem: todosMenosVoce,
    },
    {
      id: 4,
      titulo: 'O Jogo do Amor',
      imagem: jogoDoAmor,
    },
    {
      id: 5,
      titulo: 'Simplesmente Acontece',
      imagem: simplesmenteAcontece,
    },
    {
      id: 6,
      titulo: 'Uma Ideia de Você',
      imagem: ideiaDeVoce,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        COMO SUA ESCOLHA FOI
      </Text>

      <Text style={styles.subTitle}>
        "ROMANCE"
      </Text>

      <View style={styles.grid}>
        {filmes.map((filme) => (
          <TouchableOpacity
            key={filme.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate('MovieDetail', {
                titulo: filme.titulo,
                imagem: filme.imagem,
              })
            }
          >
            <Image
              source={filme.imagem}
              style={styles.poster}
              resizeMode="cover"
            />

            <Text style={styles.movieTitle}>
              {filme.titulo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

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
    paddingHorizontal: 10,
  },

  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    letterSpacing: 1,
  },

  subTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#7a3d3d',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },

  poster: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },

  movieTitle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },

  footer: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 20,
  },
});