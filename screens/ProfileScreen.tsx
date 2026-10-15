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

export default function ProfileScreen({ goTo }: ScreenProps) {
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
        <Text style={styles.title}>Meu Perfil</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Card do Usuário */}
        <View style={styles.userCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Maria Silva</Text>
            <Text style={styles.userEmail}>maria.silva@verdexa.com</Text>
            <TouchableOpacity style={styles.editBadge} activeOpacity={0.8}>
              <Text style={styles.editBadgeText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção: Conta */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conta e Segurança</Text>
          <View style={styles.optionsCard}>
            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>👤</Text>
                <Text style={styles.optionText}>Dados Pessoais</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>🔒</Text>
                <Text style={styles.optionText}>Alterar Senha</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção: Preferências */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências</Text>
          <View style={styles.optionsCard}>
            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>🔔</Text>
                <Text style={styles.optionText}>Notificações</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>🌐</Text>
                <Text style={styles.optionText}>Idioma</Text>
              </View>
              <Text style={styles.optionValue}>Português (BR)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção: Suporte */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suporte</Text>
          <View style={styles.optionsCard}>
            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>❓</Text>
                <Text style={styles.optionText}>Ajuda & FAQ</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>📄</Text>
                <Text style={styles.optionText}>Termos e Privacidade</Text>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botão de Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => goTo('Login')}
        >
          <Text style={styles.logoutButtonText}>Sair da Conta</Text>
        </TouchableOpacity>
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
          <Text style={styles.navIcon}>🌿</Text>
          <Text style={styles.navLabel}>Plantas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Profile')}>
          <Text style={styles.navIconActive}>👤</Text>
          <Text style={styles.navLabelActive}>Perfil</Text>
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
    paddingBottom: 24,
    gap: 16,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#E4EBDC',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    gap: 14,
    marginTop: 8,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#154A33',
  },
  userEmail: {
    fontSize: 12,
    color: '#556B5D',
    marginTop: 2,
    marginBottom: 8,
  },
  editBadge: {
    backgroundColor: '#154A33',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  editBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  section: {
    gap: 6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#154A33',
    marginLeft: 4,
  },
  optionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionIcon: {
    fontSize: 16,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#8A9A86',
    fontWeight: '600',
  },
  optionValue: {
    fontSize: 12,
    color: '#8A9A86',
  },
  divider: {
    height: 1,
    backgroundColor: '#F4F6F0',
  },
  logoutButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#C53030',
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