import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const livros = [
  { id: '1', titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', imagem: 'https://www.coxinhanerd.com.br/wp-content/uploads/2020/04/os-livros-tecnologia-ler-2020.jpg' },
  { id: '2', titulo: '1984', autor: 'George Orwell', imagem: 'https://www.coxinhanerd.com.br/wp-content/uploads/2020/04/os-livros-tecnologia-ler-2020.jpg' },
  { id: '3', titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', imagem: 'https://www.coxinhanerd.com.br/wp-content/uploads/2020/04/os-livros-tecnologia-ler-2020.jpg' },
  { id: '4', titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', imagem: 'https://www.coxinhanerd.com.br/wp-content/uploads/2020/04/os-livros-tecnologia-ler-2020.jpg' },
];

export default function ListaLivros({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9", // fundo mais claro
  },
  card: {
    backgroundColor: "#fff",      // fundo branco
    borderRadius: 12,             // cantos mais arredondados
    padding: 16,                  // espaço interno maior
    marginBottom: 16,
    shadowColor: "#000",          // sombra para dar destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,                  // sombra no Android
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  autor: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  botao: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start", // botão só ocupa o necessário
  },
  botaoTexto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
});
