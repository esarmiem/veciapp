import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Heart, Clock, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontFamily: 'Inter-Bold' }}>Perfil</Text>
          
          <View style={{ marginTop: 24 }}>
            {/* Profile Menu Items */}
            <TouchableOpacity style={styles.menuItem}>
              <Settings size={20} color="#6B7280" />
              <Text style={styles.menuText}>Configuración</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Heart size={20} color="#6B7280" />
              <Text style={styles.menuText}>Favoritos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Clock size={20} color="#6B7280" />
              <Text style={styles.menuText}>Historial</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
              <LogOut size={20} color="#EF4444" />
              <Text style={[styles.menuText, styles.logoutText]}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937'
  },
  logoutItem: {
    marginTop: 32
  },
  logoutText: {
    color: '#EF4444'
  }
});