import * as React from 'react';
import { FlatList, ScrollView, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput'
import RecentItem from '../components/RecentItem'

import { Icon } from 'react-native-elements'

// data
import RecentData from '../../assets/data/RecentData'
import ContactData from '../../assets/data/ContactData';
import NumericPanel from '../components/NumericPanel';

const width = Dimensions.get("window").width,
    height = Dimensions.get("window").height;

function RecentView({ navigation, route }) {
    console.log(route)
    const [contactDataLength] = React.useState(ContactData.length);
    const [recentDataList, setRecentDataList] = React.useState(RecentData);
    const [iconName, setIconName] = React.useState('chevron-up');

    const toggSetIconName = () => {
        navigation.setParams({
            isNumericPanelOpen: !route.params.isNumericPanelOpen
        });

        if (iconName === 'chevron-up') {
            setIconName('chevron-down');

        } else {
            setIconName('chevron-up');

        }
    }

    const numericData = [
        { id: 1, text: '1', char: '~' },
        { id: 2, text: '2', char: 'ABC' },
        { id: 3, text: '3', char: 'DEF' },
        { id: 4, text: '4', char: 'GHI' },
        { id: 5, text: '5', char: 'JKL' },
        { id: 6, text: '6', char: 'MNO' },
        { id: 7, text: '7', char: 'PQRS' },
        { id: 8, text: '8', char: 'TUV' },
        { id: 9, text: '9', char: 'WXYZ' },
        { id: 10, text: '*', char: '`' },
        { id: 11, text: '0', char: '+' },
        { id: 12, text: '#', char: '' },
        { id: 13, text: null, char: 'menu' },
        { id: 14, text: null, char: 'phone' },
        { id: 15, text: null, char: 'chevron-up' },
    ];

    const Item = ({ num }) => (
        <NumericPanel nav={navigation} num={num} />
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.numericContainerView}>
            <Item num={item} />
        </TouchableOpacity>
    );

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
            { route.params.isNumericPanelOpen && <View style={styles.numericContainer}>
                <FlatList
                    data={numericData}
                    renderItem={renderItem}
                    numColumns={3}
                    keyExtractor={item => item.id}
                />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    numericContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height / 1.8,
        flexDirection: 'row'
    },
    numericContainerView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (width / 3) - 10,
        height: height / 5 / 2,
    },
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