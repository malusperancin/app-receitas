import { Text, StyleSheet, View, Image } from "react-native";

export function CardReceita(props) {
    const { item } = props;

    const urlImage = item.tipo === 'Salgado' ? "data:image/png;base64,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" : "https://static.vecteezy.com/ti/vetor-gratis/p3/17282686-adesivo-de-cupcake-de-desenhoial-sobremesa-doce-isolada-com-forma-de-borda-branca-vetor.jpg"
    return (
    <View style={styles.container}>
        <View style={styles.linhaImage}>
            <Image style={styles.image} src={urlImage} />
        </View>
        <View style={styles.linhaText}>
            <Text> {item.titulo} </Text>
            <Text> {item.descricao} </Text>
        </View>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      marginBottom: 10,
      borderColor: "black",
      backgroundColor: "#FAF3D5",
      borderRadius: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    linhaImage: {
        padding: 10,
    },
    linhaText: {
        padding: 10,
        width:  250,
    }
  });