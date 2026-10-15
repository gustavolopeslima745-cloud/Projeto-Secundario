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
  TextInput,
} from 'react-native';
import { ScreenProps } from '../App';

export default function HistoryScreen({ goTo }: ScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => goTo('Home')}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Histórico de análises</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Campo de Pesquisa */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por planta ou doença..."
            placeholderTextColor="#8A9A86"
          />
        </View>

        {/* Lista de Registros */}
        <View style={styles.listContainer}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.historyCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiagnosisResult')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cropTitle}>Tomateiro</Text>
                <Text style={styles.dateText}>14/10/2026</Text>
              </View>
              <Text style={styles.diagnosisTitle}>Mancha-alvo</Text>
              <View style={styles.badgeRow}>
                <View style={styles.severityBadgeMedium}>
                  <Text style={styles.badgeTextMedium}>Severidade Média</Text>
                </View>
                <Text style={styles.confidenceText}>87% precisão</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity
            style={styles.historyCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiagnosisResult')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1594911776659-478564177b8b?q=80&w=800' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cropTitle}>Videira</Text>
                <Text style={styles.dateText}>10/10/2026</Text>
              </View>
              <Text style={styles.diagnosisTitle}>Planta Saudável</Text>
              <View style={styles.badgeRow}>
                <View style={styles.severityBadgeHealthy}>
                  <Text style={styles.badgeTextHealthy}>Saudável</Text>
                </View>
                <Text style={styles.confidenceText}>95% precisão</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity
            style={styles.historyCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiagnosisResult')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cropTitle}>Milho</Text>
                <Text style={styles.dateText}>02/10/2026</Text>
              </View>
              <Text style={styles.diagnosisTitle}>Ferrugem-comum</Text>
              <View style={styles.badgeRow}>
                <View style={styles.severityBadgeHigh}>
                  <Text style={styles.badgeTextHigh}>Severidade Alta</Text>
                </View>
                <Text style={styles.confidenceText}>91% precisão</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menu Inferior de Navegação */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('History')}>
          <Text style={styles.navIconActive}>📋</Text>
          <Text style={styles.navLabelActive}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>💡</Text>
          <Text style={styles.navLabel}>Dicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Perfil</Text>
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
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 46,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#154A33',
  },
  listContainer: {
    gap: 12,
    marginTop: 4,
  },
  historyCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  cardImage: {
    width: 75,
    height: 75,
    borderRadius: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cropTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#556B5D',
  },
  dateText: {
    fontSize: 11,
    color: '#8A9A86',
  },
  diagnosisTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#154A33',
    marginVertical: 2,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  severityBadgeMedium: {
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeTextMedium: {
    fontSize: 10,
    fontWeight: '600',
    color: '#856404',
  },
  severityBadgeHealthy: {
    backgroundColor: '#D4EDDA',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeTextHealthy: {
    fontSize: 10,
    fontWeight: '600',
    color: '#155724',
  },
  severityBadgeHigh: {
    backgroundColor: '#F8D7DA',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeTextHigh: {
    fontSize: 10,
    fontWeight: '600',
    color: '#721C24',
  },
  confidenceText: {
    fontSize: 11,
    color: '#718096',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E4EBDC',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 18,
  },
  navIconActive: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 11,
    color: '#556B5D',
    marginTop: 2,
  },
  navLabelActive: {
    fontSize: 11,
    fontWeight: '700',
    color: '#154A33',
    marginTop: 2,
  },
});