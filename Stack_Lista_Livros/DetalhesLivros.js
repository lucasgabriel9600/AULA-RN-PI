import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function DetalhesLivro({ route, navigation }) {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>{livro.autor}</Text>
      <Image source={{ uri: "https://www.coxinhanerd.com.br/wp-content/uploads/2020/04/os-livros-tecnologia-ler-2020.jpg" }} style={styles.imagem} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  autor: { fontSize: 16, color: '#555', marginBottom: 16 },
  imagem: { width: 150, height: 150, marginBottom: 20 },
});
