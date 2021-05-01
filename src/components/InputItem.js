import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function InputItem({ placeholder, autoFocus = false }) {
    return (
        <TextInput autoFocus={autoFocus} placeholder={placeholder} style={styles.textInput} />
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#0066ff',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        height: 45,
        marginBottom: 10
    }
});

export default InputItem;