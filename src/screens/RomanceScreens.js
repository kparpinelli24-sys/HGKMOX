import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function RomanceScreen({ navigation }) {

  const filmes = [
    {
      id: 1,
      titulo: 'Diário de uma Paixão',
      imagem: 'https://picsum.photos/200/301'
    },
    {
      id: 2,
      titulo: 'Como Eu Era Antes de Você',
      imagem: 'https://picsum.photos/200/302'
    },
    {
      id: 3,
      titulo: 'Todos Menos Você',
      imagem: 'https://picsum.photos/200/303'
    },
    {
      id: 4,
      titulo: 'O Jogo do Amor',
      imagem: 'https://picsum.photos/200/304'
    }
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Como sua escolha foi
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
                imagem: filme.imagem
              })
            }
          >

            <Image
              source={{ uri: filme.imagem }}
              style={styles.poster}
            />

            <Text style={styles.movieTitle}>
              {filme.titulo}
            </Text>

          </TouchableOpacity>

        ))}

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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },

  subTitle: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
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
    backgroundColor: '#6b2c2c',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },

  poster: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },

  movieTitle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },

});