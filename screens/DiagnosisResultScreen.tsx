import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { ScreenProps } from '../App';

export default function DiagnosisResultScreen({ goTo }: ScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho com Seta de Voltar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => goTo('Home')}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Resultado da análise</Text>
        <View style={{ width: 24 }} /> {/* Espaçador para centralizar o título */}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Card do Resultado Principal */}
        <View style={styles.mainCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
            style={styles.plantImage}
            resizeMode="cover"
          />
          <View style={styles.mainInfo}>
            <Text style={styles.diseaseTitle}>Mancha-alvo</Text>
            <Text style={styles.scientificName}>(Alternaria spp.)</Text>
            <Text style={styles.cropName}>Tomateiro</Text>

            {/* Badges de Confiança e Severidade */}
            <View style={styles.badgeContainer}>
              <View style={styles.confidenceBadge}>
                <Text style={styles.confidenceText}>Confiança: 87%</Text>
              </View>
              <View style={styles.severityBadge}>
                <Text style={styles.severityText}>Severidade: Média</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Seção: Sintomas */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Sintomas</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              Manchas escuras e circulares nas folhas, com halo amarelado.
            </Text>
          </View>
        </View>

        {/* Seção: Orientações Iniciais */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Orientações iniciais</Text>
          <View style={styles.infoCard}>
            <View style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Remova folhas afetadas e evite excesso de umidade.
              </Text>
            </View>
          </View>
        </View>

        {/* Aviso de Isenção / Rodapé */}
        <Text style={styles.disclaimerText}>
          Resultado estimado por inteligência artificial. Não substitui a avaliação de um especialista.
        </Text>
      </ScrollView>

      {/* Botões de Ação na Parte Inferior */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Home')} // Você pode trocar para 'DiseaseDetails' no futuro
        >
          <Text style={styles.secondaryButtonText}>Ver detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Text style={styles.primaryButtonText}>Nova análise</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    marginBottom: 8,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontSize: 22,
    fontWeight: '600',
    color: '#154A33',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 16,
    gap: 16,
  },
  mainCard: {
    flexDirection: 'row',
    backgroundColor: '#E4EBDC',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    gap: 12,
  },
  plantImage: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  mainInfo: {
    flex: 1,
  },
  diseaseTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#154A33',
  },
  scientificName: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#335C49',
  },
  cropName: {
    fontSize: 12,
    color: '#556B5D',
    marginTop: 2,
    marginBottom: 6,
  },
  badgeContainer: {
    gap: 4,
  },
  confidenceBadge: {
    backgroundColor: '#D1E0C5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  confidenceText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#154A33',
  },
  severityBadge: {
    backgroundColor: '#E2EBD8',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  severityText: {
    fontSize: 11,
    color: '#4A5568',
  },
  sectionContainer: {
    gap: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#154A33',
    marginLeft: 4,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  infoText: {
    fontSize: 14,
    color: '#2D3748',
    lineHeight: 20,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#154A33',
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#2D3748',
    lineHeight: 20,
  },
  disclaimerText: {
    fontSize: 11,
    color: '#8A9A86',
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    backgroundColor: '#F4F6F0',
  },
  secondaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E4EBDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#154A33',
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#154A33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});