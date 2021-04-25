import * as React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'

function ContactItem({ item }) {
    return (
        <TouchableOpacity onPress={() => alert(`Call ${item.name}`)}>
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: item.imageUrl }}
                        style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textName}>{item.name}</Text>
                    <Text style={styles.textPhone}>{item.phone}</Text>
                </View>
            </View >
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#fff'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    textName: {
        fontSize: 15
    },
    textPhone: {
        fontSize: 12,
    }
});

export default ContactItem;