import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Menu({ nav, activeId }) {

    console.log(activeId)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => nav.navigate('Recent')} style={{ marginRight: 30 }}>
                <Text style={[styles.text, activeId === 1 && styles.activeText]}>Recents</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate('Contact')}>
                <Text style={[styles.text, activeId === 2 && styles.activeText]}>Contacts</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    activeText: {
        color: 'green'
    }
});

export default Menu;