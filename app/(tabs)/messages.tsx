import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MessagesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontFamily: 'Inter-Bold' }}>Mensajes</Text>
          <View style={{ 
            marginTop: 16,
            padding: 16,
            backgroundColor: '#F3F4F6',
            borderRadius: 8,
            alignItems: 'center'
          }}>
            <Text style={{ fontFamily: 'Inter-Regular' }}>No hay mensajes nuevos</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}