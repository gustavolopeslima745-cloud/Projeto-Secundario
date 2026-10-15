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

export default function PlantTrackingScreen({ goTo }: ScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => goTo('MyPlants')}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Acompanhamento</Text>
        <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
          <Text style={styles.headerIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Card do Resumo da Planta */}
        <View style={styles.summaryCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
            style={styles.plantImage}
            resizeMode="cover"
          />
          <View style={styles.summaryInfo}>
            <Text style={styles.plantName}>Tomateiro Estufa 1</Text>
            <Text style={styles.speciesText}>Solanum lycopersicum</Text>
            <Text style={styles.locationText}>📍 Estufa Principal - Setor Norte</Text>

            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Em tratamento</Text>
            </View>
          </View>
        </View>

        {/* Linha do Tempo / Histórico de Evolução */}
        <View style={styles.timelineSection}>
          <Text style={styles.sectionTitle}>Histórico de Evolução</Text>

          <View style={styles.timelineContainer}>
            {/* Evento 1 - Mais recente */}
            <View style={styles.timelineItem}>
              <View style={styles.timelineLineContainer}>
                <View style={[styles.timelineDot, styles.timelineDotActive]} />
                <View style={styles.timelineLine} />
              </View>
              <View style={styles.eventCard}>
                <View style={styles.eventHeader}>
                  <Text style={styles.eventDate}>Hoje, 14:30</Text>
                  <View style={styles.badgeMedium}>
                    <Text style={styles.badgeTextMedium}>Análise IA</Text>
                  </View>
                </View>
                <Text style={styles.eventTitle}>Diagnóstico: Mancha-alvo</Text>
                <Text style={styles.eventDescription}>
                  Sintomas fúngicos detectados. Recomendada a remoção de folhas afetadas e redução de umidade.
                </Text>
              </View>
            </View>

            {/* Evento 2 */}
            <View style={styles.timelineItem}>
              <View style={styles.timelineLineContainer}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
              </View>
              <View style={styles.eventCard}>
                <View style={styles.eventHeader}>
                  <Text style={styles.eventDate}>05/10/2026</Text>
                  <View style={styles.badgeSuccess}>
                    <Text style={styles.badgeTextSuccess}>Ação</Text>
                  </View>
                </View>
                <Text style={styles.eventTitle}>Aplicação de Fungicida</Text>
                <Text style={styles.eventDescription}>
                  Aplicação preventiva realizada conforme orientação de manejo.
                </Text>
              </View>
            </View>

            {/* Evento 3 - Inicial */}
            <View style={styles.timelineItem}>
              <View style={styles.timelineLineContainer}>
                <View style={styles.timelineDot} />
              </View>
              <View style={styles.eventCard}>
                <View style={styles.eventHeader}>
                  <Text style={styles.eventDate}>20/09/2026</Text>
                  <View style={styles.badgeInfo}>
                    <Text style={styles.badgeTextInfo}>Cadastro</Text>
                  </View>
                </View>
                <Text style={styles.eventTitle}>Planta Cadastrada</Text>
                <Text style={styles.eventDescription}>
                  Planta registrada no sistema para monitoramento periódico.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão Fixo de Ação */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Text style={styles.primaryButtonText}>Nova Análise desta Planta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontSize: 22,
    fontWeight: '600',
    color: '#154A33',
  },
  headerButton: {
    padding: 4,
  },
  headerIcon: {
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 20,
  },
  summaryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
    marginTop: 8,
  },
  plantImage: {
    width: 85,
    height: 85,
    borderRadius: 16,
  },
  summaryInfo: {
    flex: 1,
  },
  plantName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#154A33',
  },
  speciesText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#556B5D',
    marginTop: 2,
  },
  locationText: {
    fontSize: 11,
    color: '#8A9A86',
    marginTop: 4,
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#856404',
  },
  timelineSection: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#154A33',
    marginLeft: 4,
  },
  timelineContainer: {
    paddingLeft: 4,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 12,
  },
  timelineLineContainer: {
    alignItems: 'center',
    width: 20,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#CBD5E0',
    marginTop: 18,
  },
  timelineDotActive: {
    backgroundColor: '#154A33',
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: '#E4EBDC',
  },
  eventCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
    marginBottom: 12,
    gap: 4,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventDate: {
    fontSize: 11,
    color: '#8A9A86',
    fontWeight: '500',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#154A33',
  },
  eventDescription: {
    fontSize: 12,
    color: '#4A5568',
    lineHeight: 17,
  },
  badgeMedium: {
    backgroundColor: '#E4EBDC',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeTextMedium: {
    fontSize: 10,
    fontWeight: '600',
    color: '#154A33',
  },
  badgeSuccess: {
    backgroundColor: '#D4EDDA',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeTextSuccess: {
    fontSize: 10,
    fontWeight: '600',
    color: '#155724',
  },
  badgeInfo: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeTextInfo: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4A5568',
  },
  footerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F4F6F0',
    borderTopWidth: 1,
    borderTopColor: '#E4EBDC',
  },
  primaryButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
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