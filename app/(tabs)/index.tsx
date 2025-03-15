import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Clock, Search } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>¡Hola! 👋</Text>
          <Text style={styles.subtitle}>¿Qué estás buscando hoy?</Text>
          <View style={styles.searchContainer}>
            <Search size={20} color="#6B7280" />
            <TextInput
              placeholder="Buscar productos o servicios"
              style={styles.searchInput}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Ofertas destacadas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {/* Example featured items - replace with real data */}
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.featuredCard}>
                <Image
                  source={{ uri: `https://source.unsplash.com/random/400x300?store=${item}` }}
                  style={styles.featuredImage}
                />
                <View style={styles.featuredContent}>
                  <Text style={styles.featuredTitle}>Producto Destacado {item}</Text>
                  <Text style={styles.featuredPrice}>$99.99</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* New nearby businesses section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Negocios cercanos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map((business) => (
              <View key={business} style={styles.businessCard}>
                <Image
                  source={{ uri: `https://source.unsplash.com/random/400x300?shop=${business}` }}
                  style={styles.businessImage}
                />
                <View style={styles.businessContent}>
                  <Text style={styles.businessName}>Negocio {business}</Text>
                  <View style={styles.businessInfo}>
                    <MapPin size={14} color="#6B7280" />
                    <Text style={styles.businessDistance}>1.{business} km</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* New recent purchases section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas compras</Text>
          {[1, 2].map((purchase) => (
            <View key={purchase} style={styles.purchaseCard}>
              <Image
                source={{ uri: `https://source.unsplash.com/random/400x300?product=${purchase}` }}
                style={styles.purchaseImage}
              />
              <View style={styles.purchaseContent}>
                <Text style={styles.purchaseTitle}>Compra #{purchase}</Text>
                <Text style={styles.purchaseDate}>Hace {purchase} días</Text>
                <Text style={styles.purchaseStatus}>Entregado</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categorías populares</Text>
          <View style={styles.categoriesGrid}>
            {/* Example categories - replace with real data */}
            {['Comida', 'Ropa', 'Tecnología', 'Hogar'].map((category) => (
              <View key={category} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Add these new styles to the StyleSheet:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#111827',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  featuredSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#111827',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  featuredScroll: {
    paddingLeft: 20,
  },
  featuredCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featuredImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  featuredContent: {
    padding: 12,
  },
  featuredTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#111827',
  },
  featuredPrice: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#10B981',
    marginTop: 4,
  },
  categoriesSection: {
    marginTop: 32,
    paddingBottom: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
  },
  // New styles for businesses section
  section: {
    marginTop: 32,
  },
  horizontalScroll: {
    paddingLeft: 20,
  },
  businessCard: {
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  businessImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  businessContent: {
    padding: 12,
  },
  businessName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#111827',
  },
  businessInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  businessDistance: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },

  // New styles for recent purchases section
  purchaseCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  purchaseImage: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  purchaseContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  purchaseTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#111827',
  },
  purchaseDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  purchaseStatus: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#10B981',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#111827',
  },
});