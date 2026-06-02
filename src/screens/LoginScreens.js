import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    navigation.replace('Main');
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba'
      }}
      style={styles.background}
      blurRadius={2}
    >
      <SafeAreaView style={styles.container}>
        
        <View style={styles.overlay}>
          
          <Text style={styles.logo}>HGK MOX</Text>

          <Text style={styles.slogan}>
            ESCOLHA O MELHOR PARA VOCÊ
          </Text>

          <View style={styles.form}>
            
            <Text style={styles.label}>
              Endereço de email:
            </Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>
              Senha:
            </Text>

            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
            />

            <TouchableOpacity
              style={styles.botao}
              onPress={entrar}
            >
              <Text style={styles.textoBotao}>
                Entrar
              </Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.footer}>
            © 2026 WarnerMedia Direct, LLC.
          </Text>

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

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(60,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  slogan: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 60,
    textAlign: 'center',
  },

  form: {
    width: '100%',
    backgroundColor: '#4b0000',
    padding: 25,
    borderRadius: 20,
  },

  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#220000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    color: '#fff',
    marginTop: 40,
    fontSize: 10,
    textAlign: 'center',
  },
});