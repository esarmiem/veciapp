import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MessagesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="p-4">
          <Text className="text-2xl font-['Inter-Bold'] text-gray-900">Mensajes</Text>
          <View className="mt-4 p-4 bg-gray-100 rounded-lg items-center">
            <Text className="font-['Inter-Regular'] text-gray-600">No hay mensajes nuevos</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}