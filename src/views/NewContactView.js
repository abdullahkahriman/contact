import * as React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import InputItem from '../components/InputItem'


function NewContactView({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <Icon name="close" onPress={() => navigation.push('Contact')} size={28} />
                <Text>New Contact</Text>
                <Icon name="done" size={28} onPress={() => alert('Contact added.')} />
            </View>
            <View>
                <InputItem autoFocus={true} placeholder="Name" />
                <InputItem placeholder="Phone" />
                <InputItem placeholder="Company" />
                <InputItem placeholder="Title" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 40
    },
});

export default NewContactView;
