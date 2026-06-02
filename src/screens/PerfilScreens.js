import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.profileContainer}>

        <Image
          source={{
            uri: 'https://i.pravatar.cc/300'
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Usuário Exemplo
        </Text>

        <Text style={styles.email}>
          usuario@email.com
        </Text>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Editar Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Favoritos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Configurações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>
          Sair
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4d0000',
    padding: 20,
  },

  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
  },

  name: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  email: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 5,
  },

  button: {
    backgroundColor: '#6b2c2c',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  logoutButton: {
    backgroundColor: '#220000',
    padding: 18,
    borderRadius: 15,
    marginTop: 30,
  },

  logoutText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

});