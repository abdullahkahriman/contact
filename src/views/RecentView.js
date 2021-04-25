import * as React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput'
import RecentItem from '../components/RecentItem'

import { Icon } from 'react-native-elements'

// data
import RecentData from '../../assets/data/RecentData'
import ContactData from '../../assets/data/ContactData';

function RecentView({ navigation }) {
    const [contactDataLength] = React.useState(ContactData.length);
    const [recentDataList, setRecentDataList] = React.useState(RecentData);
    const [iconName, setIconName] = React.useState('chevron-up');

    const toggSetIconName = () => {
        if (iconName === 'chevron-up') {
            setIconName('chevron-down');
        } else {
            setIconName('chevron-up');
        }
    }

    return (
        <View style={styles.container}>
            <Menu nav={navigation} activeId={1} />
            <ScrollView>
                <SearchInput contactLength={contactDataLength} />
                {recentDataList.map((item, index) => <RecentItem key={index} item={item} />)}
            </ScrollView>
            <TouchableOpacity onPress={() => toggSetIconName()} style={styles.iconContainer}>
                <Icon
                    name={iconName}
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
    },
    iconContainer: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: 20,
        bottom: 15
    },
    icon: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecentView;