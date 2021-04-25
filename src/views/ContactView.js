import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput'

// data
import { ScrollView } from 'react-native';
import ContactItem from '../components/ContactItem';
import ContactData from '../../assets/data/ContactData';

function ContactView({ navigation }) {
    const [contactDataList, setContactDataList] = React.useState(ContactData);

    return (
        <View style={styles.container}>
            <Menu nav={navigation} activeId={2} />
            <ScrollView>
                <SearchInput contactLength={contactDataList.length} />
                {contactDataList.map((item, index) => <ContactItem key={index} item={item} />)}
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