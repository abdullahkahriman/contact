import * as React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'

function RecentItem({ item }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={{ uri: item.imageUrl }}
                    style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textPhone}>{item.phone} {item.date} {item.callType}: {item.time}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchIconContainer}>
                <Icon
                    name='chevron-right'
                    type='evilicon'
                    color="#424242"
                    size={32}
                    style={styles.searchIcon}
                />
            </TouchableOpacity>
        </View >
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
    },
    textName: {
        fontSize: 15
    },
    textPhone: {
        fontSize: 12,

    },
    searchIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        backgroundColor: '#b3afaf',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 30,
        width: 30,
        height: 30,
    },
});

export default RecentItem;