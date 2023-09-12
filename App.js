import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { ReceitasService } from './src/services';
import { CardReceita, Search, Header } from './src/components';

export default function App() {
  const [originalData, setOriginalData] = useState([]); // Armazena os dados originais
  const [filteredData, setFilteredData] = useState([]); // Armazena os dados filtrados
  const [searchText, setSearchText] = useState("");

  const filterReceitas = (text) => {
    if (text === "") {
      return originalData; // Retorna os dados originais se a pesquisa estiver vazia
    } else {
      return originalData.filter((item) =>
        item.titulo.toLowerCase().includes(text.toLowerCase())
      );
    }
  };

  useEffect(() => {
    // Atualize filteredData ao invés de data
    setFilteredData(filterReceitas(searchText));
  }, [searchText, originalData]);

  useEffect(() => {
    const getData = async () => {
      try {
        const receivedData = await ReceitasService.getAllReceitas();
        if (receivedData !== undefined) {
          setOriginalData(receivedData); // Atualize os dados originais
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } 
    getData();
  }, []);

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Search setSearchText={setSearchText}></Search>
        {filteredData.length > 0 && ( // Use filteredData em vez de data
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={filteredData}
            renderItem={({ item }) => <CardReceita item={item}></CardReceita>}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7cbed3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
