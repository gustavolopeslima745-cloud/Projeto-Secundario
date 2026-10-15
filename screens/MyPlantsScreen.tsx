import React, { useState } from 'react';
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

export default function MyPlantsScreen({ goTo }: ScreenProps) {
  const [filter, setFilter] = useState<'todas' | 'saudaveis' | 'atencao'>('todas');

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
        <Text style={styles.title}>Minhas Plantas</Text>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar entre minhas plantas..."
            placeholderTextColor="#8A9A86"
          />
        </View>

        {/* Filtros em Chip */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterChip, filter === 'todas' && styles.filterChipActive]}
            onPress={() => setFilter('todas')}
          >
            <Text style={[styles.filterText, filter === 'todas' && styles.filterTextActive]}>
              Todas (3)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterChip, filter === 'saudaveis' && styles.filterChipActive]}
            onPress={() => setFilter('saudaveis')}
          >
            <Text style={[styles.filterText, filter === 'saudaveis' && styles.filterTextActive]}>
              Saudáveis (2)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterChip, filter === 'atencao' && styles.filterChipActive]}
            onPress={() => setFilter('atencao')}
          >
            <Text style={[styles.filterText, filter === 'atencao' && styles.filterTextActive]}>
              Atenção (1)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Plantas */}
        <View style={styles.listContainer}>
          {/* Planta 1 */}
          <TouchableOpacity
            style={styles.plantCard}
            activeOpacity={0.8}
            onPress={() => goTo('History')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
              style={styles.plantImage}
              resizeMode="cover"
            />
            <View style={styles.plantInfo}>
              <View style={styles.cardHeader}>
                <Text style={styles.plantName}>Tomateiro Estufa 1</Text>
                <View style={styles.badgeAttention}>
                  <Text style={styles.badgeAttentionText}>Atenção</Text>
                </View>
              </View>
              <Text style={styles.scientificName}>Solanum lycopersicum</Text>
              <Text style={styles.lastAnalysis}>Última análise: Hoje às 14:30</Text>
            </View>
          </TouchableOpacity>

          {/* Planta 2 */}
          <TouchableOpacity
            style={styles.plantCard}
            activeOpacity={0.8}
            onPress={() => goTo('History')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1594911776659-478564177b8b?q=80&w=800' }}
              style={styles.plantImage}
              resizeMode="cover"
            />
            <View style={styles.plantInfo}>
              <View style={styles.cardHeader}>
                <Text style={styles.plantName}>Videira Niagara</Text>
                <View style={styles.badgeHealthy}>
                  <Text style={styles.badgeHealthyText}>Saudável</Text>
                </View>
              </View>
              <Text style={styles.scientificName}>Vitis labrusca</Text>
              <Text style={styles.lastAnalysis}>Última análise: 10/10/2026</Text>
            </View>
          </TouchableOpacity>

          {/* Planta 3 */}
          <TouchableOpacity
            style={styles.plantCard}
            activeOpacity={0.8}
            onPress={() => goTo('History')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
              style={styles.plantImage}
              resizeMode="cover"
            />
            <View style={styles.plantInfo}>
              <View style={styles.cardHeader}>
                <Text style={styles.plantName}>Milho Talhão 4</Text>
                <View style={styles.badgeHealthy}>
                  <Text style={styles.badgeHealthyText}>Saudável</Text>
                </View>
              </View>
              <Text style={styles.scientificName}>Zea mays</Text>
              <Text style={styles.lastAnalysis}>Última análise: 02/10/2026</Text>
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
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navLabel}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('MyPlants')}>
          <Text style={styles.navIconActive}>🌿</Text>
          <Text style={styles.navLabelActive}>Plantas</Text>
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
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#154A33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: -2,
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
  filterContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#E4EBDC',
  },
  filterChipActive: {
    backgroundColor: '#154A33',
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#556B5D',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    gap: 12,
  },
  plantCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  plantImage: {
    width: 75,
    height: 75,
    borderRadius: 14,
  },
  plantInfo: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#154A33',
  },
  scientificName: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#556B5D',
    marginTop: 2,
  },
  lastAnalysis: {
    fontSize: 11,
    color: '#8A9A86',
    marginTop: 6,
  },
  badgeHealthy: {
    backgroundColor: '#D4EDDA',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeHealthyText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#155724',
  },
  badgeAttention: {
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeAttentionText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#856404',
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