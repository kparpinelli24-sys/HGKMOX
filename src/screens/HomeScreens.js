import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>HGK MOX</Text>

        <TextInput
          placeholder="Encontre o que procura..."
          placeholderTextColor="#ddd"
          style={styles.search}
        />
      </View>

      <Text style={styles.title}>
        ESCOLHA QUAL SEU ESTILO PREFERIDO
        {'\n'}
        DE FILMES E SÉRIES
      </Text>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Ação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Comédia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Terror</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Romance')}
      >
        <Text style={styles.categoryText}>Romance</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>
        Destaques
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        <Image
          source={{
            uri: 'https://picsum.photos/200/300'
          }}
          style={styles.poster}
        />

        <Image
          source={{
            uri: 'https://picsum.photos/201/300'
          }}
          style={styles.poster}
        />

        <Image
          source={{
            uri: 'https://picsum.photos/202/300'
          }}
          style={styles.poster}
        />

        <Image
          source={{
            uri: 'https://picsum.photos/203/300'
          }}
          style={styles.poster}
        />

      </ScrollView>

      <Text style={styles.footer}>
        © 2026 WarnerMedia Direct, LLC.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d0000',
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  header: {
    marginBottom: 30,
  },

  logo: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  search: {
    backgroundColor: '#7a4a4a',
    padding: 12,
    borderRadius: 30,
    color: '#fff',
  },

  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
    letterSpacing: 2,
  },

  category: {
    backgroundColor: '#650000',
    padding: 25,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },

  categoryText: {
    color: '#fff',
    fontSize: 28,
    fontStyle: 'italic',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 20,
    fontWeight: 'bold',
  },

  poster: {
    width: 140,
    height: 220,
    borderRadius: 15,
    marginRight: 15,
  },

  footer: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 10,
  },
});