import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ScreenProps } from '../App';

export default function ConfirmImageScreen({ goTo }: ScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Confirme sua imagem</Text>
      </View>

      {/* Container de Preview da Foto */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Subtítulo / Orientação */}
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>
          Verifique se a imagem está nítida e bem iluminada.
        </Text>
      </View>

      {/* Botões de Ação com Navegação */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Text style={styles.secondaryButtonText}>Tirar outra foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Home')} // Altere para a próxima tela quando for criá-la
        >
          <Text style={styles.primaryButtonText}>Analisar imagem</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginTop: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  imageContainer: {
    width: '98%',
    height: 380,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: '#E4EBDC',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#4A5568',
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonGroup: {
    gap: 12,
    marginBottom: 10,
  },
  secondaryButton: {
    width: '98%',
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E4EBDC',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#154A33',
  },
  primaryButton: {
    width: '98%',
    height: 52,
    borderRadius: 26,
    backgroundColor: '#154A33',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});