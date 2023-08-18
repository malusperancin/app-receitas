import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { ReceitasService } from './src/services';
import { CardReceita } from './src/components';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const receivedData = await ReceitasService.getAllReceitas();
        if (receivedData !== undefined) {
          setData(receivedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } 
    getData();
  }, []);


  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <FlatList
          keyExtractor={item => item.id.toString()} // Certifique-se de que item.id seja uma string ou converta corretamente
          data={data}
          renderItem={({ item }) => <CardReceita text={item.title}></ CardReceita>}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
