import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        CRIAR UM PERFIL
      </Text>

      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>◯</Text>
          <Text style={styles.avatarText}>◯</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Nome:</Text>

          <TextInput
            style={styles.input}
            defaultValue="Karen Parpinelli"
          />
        </View>
      </View>

      <View style={styles.colorsContainer}>
        <View style={[styles.color, { backgroundColor: '#ff00aa' }]} />

        <View style={[styles.color, { backgroundColor: '#00e5c3' }]} />

        <View style={[styles.color, { backgroundColor: '#ffb347' }]} />

        <View style={[styles.color, { backgroundColor: '#6f2cff' }]} />

        <View
          style={[
            styles.color,
            styles.selectedColor,
            { backgroundColor: '#8b0000' },
          ]}
        />
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardText}>
          Use nosso aplicativo para dispositivos móveis para carregar uma foto
          ou escolher um personagem que mais goste!
        </Text>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>
          SALVAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>
          CANCELAR
        </Text>
      </TouchableOpacity>

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
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    letterSpacing: 2,
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#552222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#777',
    fontSize: 22,
  },

  info: {
    flex: 1,
    marginLeft: 20,
  },

  label: {
    color: '#fff',
    marginBottom: 5,
  },

  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    paddingVertical: 5,
  },

  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },

  color: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  selectedColor: {
    borderWidth: 2,
    borderColor: '#fff',
  },

  cardInfo: {
    backgroundColor: '#5a0000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
  },

  cardText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
  },

  saveButton: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },

  saveText: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 2,
  },

  cancelButton: {
    backgroundColor: '#7a4a4a',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },

  cancelText: {
    color: '#fff',
    fontSize: 20,
  },

  footer: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
});