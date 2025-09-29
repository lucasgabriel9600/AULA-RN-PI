import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaLivros from '/workspaces/Aula-Rn-react-native/Stack_Lista_Livros/ListaLivros';
import DetalhesLivro from '/workspaces/Aula-Rn-react-native/Stack_Lista_Livros/DetalhesLivros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ListaLivros} options={{ title: 'Lista de Livros' }} />
        <Stack.Screen name="Detalhes" component={DetalhesLivro} options={{ title: 'Detalhes do Livro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
