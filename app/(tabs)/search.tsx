import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';

export default function SearchScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4">
        <View className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-4 shadow-md">
          <Search size={20} color="#6B7280" />
          <TextInput
            placeholder="Buscar productos o servicios"
            className="flex-1 ml-2 font-['Inter-Regular']"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        {/* Add your search results content here */}
      </View>
    </SafeAreaView>
  );
}