import * as React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput'

// data
import ContactItem from '../components/ContactItem';
import ContactData from '../../assets/data/ContactData';
import { Icon } from 'react-native-elements'


function ContactView({ navigation }) {
    const [contactDataList, setContactDataList] = React.useState(ContactData);

    return (
        <View style={styles.container}>
            <Menu nav={navigation} activeId={2} />
            <ScrollView>
                <SearchInput contactLength={contactDataList.length} />
                {contactDataList.map((item, index) => <ContactItem key={index} item={item} />)}
            </ScrollView>
            <TouchableOpacity onPress={() => alert('New Contact')} style={styles.iconContainer}>
                <Icon
                    name="plus"
                    type='evilicon'
                    color="#fff"
                    size={50}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 20,
    },
    iconContainer: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: 20,
        bottom: 15
    },
    icon: {
        backgroundColor: '#0066ff',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ContactView;