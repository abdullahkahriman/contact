import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements'

function SearchInput({ contactLength }) {
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <Icon
                    name='search'
                    type='evilicon'
                    color="#424242"
                    style={styles.searchIcon}
                />
                <TextInput style={styles.textInput} placeholder={`${contactLength} contacts`} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 20,
        borderWidth: 1,
    },
    searchIcon: {
        paddingLeft: 10
    },
    textInput: {
        width: '100%',
        paddingLeft: 10,
        height: 40,
        color: '#ccc',
    }
});

export default SearchInput;