import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'

function SearchInput() {
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <Icon
                    name='search'
                    type='evilicon'
                    color="#424242"
                    style={styles.searchIcon}
                />
                <TextInput style={styles.textInput} placeholder="184 contacts" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
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