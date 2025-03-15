import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Clock, Search } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className="font-['Poppins-SemiBold'] text-3xl text-gray-900">¡Hola! 👋</Text>
          <Text className="font-['Inter-Regular'] text-base text-gray-500 mt-1">¿Qué estás buscando hoy?</Text>
          <View className="flex-row items-center bg-white rounded-xl px-3 py-2.5 mt-4 shadow-md">
            <Search size={20} color="#6B7280" />
            <TextInput
              placeholder="Buscar productos o servicios"
              className="flex-1 ml-2 font-['Inter-Regular'] text-sm text-gray-900"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View className="mt-5">
          <Text className="font-['Inter-SemiBold'] text-lg text-gray-900 px-5 mb-3">Ofertas destacadas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-5">
            {[1, 2, 3].map((item) => (
              <View key={item} className="w-[280px] bg-white rounded-xl mr-4 shadow-sm">
                <Image
                  source={{ uri: `https://source.unsplash.com/random/400x300?store=${item}` }}
                  className="w-full h-40 rounded-t-xl"
                />
                <View className="p-3">
                  <Text className="font-['Inter-SemiBold'] text-base text-gray-900">Producto Destacado {item}</Text>
                  <Text className="font-['Inter-Bold'] text-lg text-emerald-500 mt-1">$99.99</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="mt-8">
          <Text className="font-['Inter-SemiBold'] text-lg text-gray-900 px-5 mb-3">Negocios cercanos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-5">
            {[1, 2, 3].map((business) => (
              <View key={business} className="w-[200px] bg-white rounded-xl mr-4 shadow-sm">
                <Image
                  source={{ uri: `https://source.unsplash.com/random/400x300?shop=${business}` }}
                  className="w-full h-30 rounded-t-xl"
                />
                <View className="p-3">
                  <Text className="font-['Inter-SemiBold'] text-sm text-gray-900">Negocio {business}</Text>
                  <View className="flex-row items-center mt-1">
                    <MapPin size={14} color="#6B7280" />
                    <Text className="font-['Inter-Regular'] text-xs text-gray-500 ml-1">1.{business} km</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

         <View className="mt-8">
          <Text className="font-['Inter-SemiBold'] text-lg text-gray-900 px-5 mb-3">Categorías populares</Text>
          <View className="flex-row flex-wrap px-5">
            {['Comida', 'Ropa', 'Tecnología', 'Hogar'].map((category) => (
              <View key={category} className="w-[47%] bg-white rounded-xl p-4 shadow-sm mx-[1.5%] mb-3">
                <Text className="font-['Inter-Medium'] text-base text-gray-700 text-center">{category}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mt-8">
          <Text className="font-['Inter-SemiBold'] text-lg text-gray-900 px-5 mb-3">Últimas compras</Text>
          {[1, 2].map((purchase) => (
            <View key={purchase} className="flex-row bg-white mx-5 mb-3 rounded-xl shadow-sm">
              <Image
                source={{ uri: `https://source.unsplash.com/random/400x300?product=${purchase}` }}
                className="w-20 h-20 rounded-l-xl"
              />
              <View className="flex-1 p-3 justify-center">
                <Text className="font-['Inter-SemiBold'] text-sm text-gray-900">Compra #{purchase}</Text>
                <Text className="font-['Inter-Regular'] text-xs text-gray-500 mt-0.5">Hace {purchase} días</Text>
                <Text className="font-['Inter-Medium'] text-xs text-emerald-500 mt-1">Entregado</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}