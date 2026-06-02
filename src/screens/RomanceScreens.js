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
import plesmerAcontece from '../assets/Simplesmente.jpg';
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
      titulo: 'Plesmer Acontece',
      imagem: plesmerAcontece,
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
              })
            }
          >
            <Image
              source={filme.imagem}
              style={styles.poster}
            />

          </TouchableOpacity>
        ))}

      </View>

      <Text style={styles.footer}>
        © 2026 WarnerMedia Direct, LLC. Todos os direitos reservados.
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
    backgroundColor: '#9c7b7b',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },

  poster: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },

  footer: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 20,
  },

});