import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function LoginScreens({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* TOPO */}
        <ImageBackground
          source={require('../assets/fundo.png')}
          resizeMode="cover"
            style={{
            width: '100%',
            height: 400,
          }}
        >
          <View style={styles.overlay}>
            <Text style={styles.logo}>HGK MAX</Text>
            <Text style={styles.slogan}>
              ESCOLHA O MELHOR PARA VOCÊ
            </Text>

            <TouchableOpacity style={styles.cadastroBtn}>
              <Text style={styles.cadastroText}>Cadastro</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* PARTE INFERIOR */}
        <View style={styles.bottom}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Endereço de email:</Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder=""
              placeholderTextColor="#aaa"
            />

            <Text style={styles.label}>Crie uma senha:</Text>

            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholder=""
              placeholderTextColor="#aaa"
            />

            <TouchableOpacity
              style={styles.entrarBtn}
              onPress={entrar}
            >
              <Text style={styles.entrarText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
      © 2026 HGKMOX. Todos os direitos reservados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0000',
  },

  scroll: {
    flexGrow: 1,
  },

  header: {
    height: 330,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    color: '#fff',
    fontSize: 58,
    fontWeight: '900',
    letterSpacing: 2,
  },

  slogan: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    letterSpacing: 1,
  },

  cadastroBtn: {
    marginTop: 20,
    backgroundColor: '#4d0000',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    elevation: 5,
  },

  cadastroText: {
    color: '#fff',
    fontSize: 28,
    fontStyle: 'italic',
  },

  bottom: {
    flex: 1,
    backgroundColor: '#4a0000',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },

  formContainer: {
    width: '85%',
    backgroundColor: '#5a0000',
    borderRadius: 30,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 14,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#a88',
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 18,
  },

  entrarBtn: {
    alignItems: 'center',
    marginTop: 10,
  },

  entrarText: {
    color: '#fff',
    fontSize: 26,
    fontStyle: 'italic',
  },

  footer: {
    color: '#ddd',
    fontSize: 11,
    marginTop: 80,
    textAlign: 'center',
  },
});