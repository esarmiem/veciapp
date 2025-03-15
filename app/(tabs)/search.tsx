import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ padding: 16 }}>
        <View style={{ 
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F3F4F6',
          padding: 12,
          borderRadius: 8,
          marginBottom: 16
        }}>
          <Search size={20} color="#6B7280" />
          <TextInput
            placeholder="Buscar productos o servicios"
            style={{ 
              marginLeft: 8,
              flex: 1,
              fontFamily: 'Inter-Regular'
            }}
          />
        </View>
        {/* Add your search results content here */}
      </View>
    </SafeAreaView>
  );
}