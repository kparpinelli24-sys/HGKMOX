import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import fundoLogin from '../assets/fundo.png';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    navigation.replace('Main');
  }

  return (
    <ImageBackground
      source={fundoLogin}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>

        <View style={styles.formContainer}>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={entrar}
          >
            <Text style={styles.botaoTexto}>
              Entrar
            </Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  formContainer: {
    position: 'absolute',

    left: 35,
    right: 35,
    top: '58%',
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ffffff',

    color: '#ffffff',

    marginBottom: 20,

    paddingHorizontal: 10,

    backgroundColor: 'rgba(0,0,0,0.15)',
  },

  botao: {
    alignItems: 'center',
    marginTop: 5,
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 22,
    fontStyle: 'italic',
  },
});