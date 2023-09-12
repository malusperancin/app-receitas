import { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
export function Search(props) {
    const { setSearchText } = props;
    const [text, onChangeText] = useState("");

    useEffect(() => {
        setSearchText(text);
    },[text]);

    return (
        <TextInput
        placeholder="Pesquisar"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 250,
        borderRadius: 50,
        borderColor: 'white',
        color: 'black',
        padding: 10,
        backgroundColor: 'white'
      },
  })