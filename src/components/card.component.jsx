import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useState } from 'react';

export function CardReceita(props) {
    const { item } = props;
    
    const ingredientes = item.ingredientes.split(",");
    ingredientes[0] = " " + ingredientes[0];

    const [isCardOpen, setIsCardOpen] = useState(false);

    const urlImage = item.tipo === 'Salgado' ? require('./images/salgado.png') : require('./images/doce.png')
    
    return (
        <TouchableOpacity onPress={() => setIsCardOpen(!isCardOpen)}> 
            <View style={isCardOpen ? styles.containerOpen : styles.container}>
                <View style={styles.linhaImage}>
                    <Image style={styles.image} source={urlImage} />
                </View>
                <View style={styles.linhaText}>
                    <Text style={styles.title}> {item.titulo} </Text>
                    <Text> {item.descricao} </Text>
                </View>
            </View>
            {isCardOpen ? (
                <View style={styles.containerExtended}>
                    <Text style={styles.subtitle}>Ingredientes:</Text>
                    {ingredientes.map((ingrediente, index) => {
                        return(
                            <Text key={index}>•{ingrediente}</Text>
                        )
                    })}
                    <Text style={styles.subtitle}>Procedimento: </Text>
                    <Text> {item.procedimento} </Text>
                </View>
            ) : null}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      borderColor: "black",
      backgroundColor: "#FAF3D5",
      borderRadius: 60,
      marginBottom: 10,
      paddingRight: 20,
      margin: 10,
      width: 375,
    },
    containerOpen: {
        flexDirection: "row",
        borderColor: "black",
        backgroundColor: "#FAF3D5",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        paddingRight: 20,
        margin: 10,
        marginBottom: 0,
        width: 375,
    },

    containerExtended: {
        marginBottom: 10,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        backgroundColor: "#FAF3D5",
        height: 'fit-content',
        padding: 20,
        paddingTop: 0,
        paddingBottom: 30,
        margin: 10,
        marginTop: 0,
        width: 375,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "#FAF3AA"
    },
    linhaImage: {
        padding: 10,
    },
    linhaText: {
        padding: 10,
        width:  250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#7cbed3',
        marginTop: 10,
    },
});
