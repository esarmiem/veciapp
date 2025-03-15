import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Heart, Clock, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="p-4">
          <Text className="text-2xl font-['Inter-Bold'] text-gray-900">Perfil</Text>
          
          <View className="mt-6">
            {/* Profile Menu Items */}
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
              <Settings size={20} color="#6B7280" />
              <Text className="ml-3 text-base font-['Inter-Regular'] text-gray-800">Configuración</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
              <Heart size={20} color="#6B7280" />
              <Text className="ml-3 text-base font-['Inter-Regular'] text-gray-800">Favoritos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
              <Clock size={20} color="#6B7280" />
              <Text className="ml-3 text-base font-['Inter-Regular'] text-gray-800">Historial</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200 mt-8">
              <LogOut size={20} color="#EF4444" />
              <Text className="ml-3 text-base font-['Inter-Regular'] text-red-500">Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}