import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput'
import RecentItem from '../components/RecentItem'

// data
import RecentData from '../../assets/data/RecentData'
import { ScrollView } from 'react-native';
import ContactData from '../../assets/data/ContactData';

function RecentView({ navigation }) {
    const [contactDataLength] = React.useState(ContactData.length);
    const [recentDataList, setRecentDataList] = React.useState(RecentData);

    return (
        <View style={styles.container}>
            <Menu nav={navigation} activeId={1} />
            <ScrollView>
                <SearchInput contactLength={contactDataLength} />
                {recentDataList.map((item, index) => <RecentItem key={index} item={item} />)}
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

export default RecentView;