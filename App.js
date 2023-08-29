import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text } from 'react-native';
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
    <>
      <Text> RECEITADS </Text>
      <View style={styles.container}>
        {data.length > 0 && (
          <FlatList
            keyExtractor={item => item.id.toString()} // Certifique-se de que item.id seja uma string ou converta corretamente
            data={data}
            renderItem={({ item }) => <CardReceita item={item}></ CardReceita>}
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
