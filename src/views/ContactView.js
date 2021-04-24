import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput'

// data
import { ScrollView } from 'react-native';

function ContactView({ navigation }) {
    return (
        <View style={styles.container}>
            <Menu nav={navigation} activeId={2} />
            <SearchInput />
            <ScrollView>
                <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                    <Text>Hi.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 20,
    },
});

export default ContactView;