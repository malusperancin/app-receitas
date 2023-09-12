import { StyleSheet, View, Image } from "react-native";
export function Header() {

    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('./images/logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BAE7F6',
        paddingTop: 20,
      },
    logo: {
        width: 280,
        height: 80,
    }
  })