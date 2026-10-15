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

export default function DiseaseLibraryScreen({ goTo }: ScreenProps) {
  const [category, setCategory] = useState<'todas' | 'fungos' | 'bacterias' | 'pragas'>('todas');

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
        <Text style={styles.title}>Biblioteca de Doenças</Text>
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
            placeholder="Pesquisar por doença ou cultura..."
            placeholderTextColor="#8A9A86"
          />
        </View>

        {/* Categorias (Chips) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={[styles.categoryChip, category === 'todas' && styles.categoryChipActive]}
              onPress={() => setCategory('todas')}
            >
              <Text style={[styles.categoryText, category === 'todas' && styles.categoryTextActive]}>
                Todas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryChip, category === 'fungos' && styles.categoryChipActive]}
              onPress={() => setCategory('fungos')}
            >
              <Text style={[styles.categoryText, category === 'fungos' && styles.categoryTextActive]}>
                Fungos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryChip, category === 'bacterias' && styles.categoryChipActive]}
              onPress={() => setCategory('bacterias')}
            >
              <Text style={[styles.categoryText, category === 'bacterias' && styles.categoryTextActive]}>
                Bactérias
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryChip, category === 'pragas' && styles.categoryChipActive]}
              onPress={() => setCategory('pragas')}
            >
              <Text style={[styles.categoryText, category === 'pragas' && styles.categoryTextActive]}>
                Pragas
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Lista de Doenças */}
        <View style={styles.listContainer}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.diseaseCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiseaseDetails')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
              style={styles.diseaseImage}
              resizeMode="cover"
            />
            <View style={styles.diseaseInfo}>
              <Text style={styles.diseaseTitle}>Mancha-alvo</Text>
              <Text style={styles.scientificName}>Alternaria spp.</Text>
              <Text style={styles.cropTag}>Cultura: Tomate, Soja, Algodão</Text>
              
              <View style={styles.badgeContainer}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>Fungo</Text>
                </View>
                <Text style={styles.arrowIcon}>›</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity
            style={styles.diseaseCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiseaseDetails')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1594911776659-478564177b8b?q=80&w=800' }}
              style={styles.diseaseImage}
              resizeMode="cover"
            />
            <View style={styles.diseaseInfo}>
              <Text style={styles.diseaseTitle}>Míldio</Text>
              <Text style={styles.scientificName}>Plasmopara viticola</Text>
              <Text style={styles.cropTag}>Cultura: Videira, Hortaliças</Text>

              <View style={styles.badgeContainer}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>Fungo</Text>
                </View>
                <Text style={styles.arrowIcon}>›</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 3 */}
          <TouchableOpacity
            style={styles.diseaseCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiseaseDetails')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
              style={styles.diseaseImage}
              resizeMode="cover"
            />
            <View style={styles.diseaseInfo}>
              <Text style={styles.diseaseTitle}>Ferrugem-comum</Text>
              <Text style={styles.scientificName}>Puccinia sorghi</Text>
              <Text style={styles.cropTag}>Cultura: Milho</Text>

              <View style={styles.badgeContainer}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>Fungo</Text>
                </View>
                <Text style={styles.arrowIcon}>›</Text>
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
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navLabel}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('DiseaseLibrary')}>
          <Text style={styles.navIconActive}>📚</Text>
          <Text style={styles.navLabelActive}>Biblioteca</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Profile')}>
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
  categoryScroll: {
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#E4EBDC',
  },
  categoryChipActive: {
    backgroundColor: '#154A33',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#556B5D',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    gap: 12,
  },
  diseaseCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  diseaseImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
  },
  diseaseInfo: {
    flex: 1,
  },
  diseaseTitle: {
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
  cropTag: {
    fontSize: 11,
    color: '#8A9A86',
    marginTop: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  typeBadge: {
    backgroundColor: '#E4EBDC',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  typeBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#154A33',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#8A9A86',
    fontWeight: '600',
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