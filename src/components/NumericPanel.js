import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

function NumericPanel({ nav, num }) {

    const closePanel = () => {
        nav.setParams({
            isNumericPanelOpen: false
        });
    }

    return (
        <View key={num.id} style={styles.numericContainerTextContainer}>
            {num.text && <Text style={styles.numericContainerTextBig}>{num.text}</Text>}
            {
                ([13, 14, 15].includes(num.id)) ?

                    num.id === 15 ? <TouchableOpacity onPress={() => closePanel()}>
                        <Icon
                            name={num.char}
                            type='feather'
                            color={num.id === 14 ? '#fff' : '#424242'}
                            size={32}
                            style={[
                                num.id === 14 && styles.iconPhone
                            ]}
                        />
                    </TouchableOpacity>
                        :
                        <Icon
                            name={num.char}
                            type='feather'
                            color={num.id === 14 ? '#fff' : '#424242'}
                            size={32}
                            style={[
                                num.id === 14 && styles.iconPhone
                            ]}
                        />



                    : <Text style={styles.numericContainerTextSmall}>
                        {num.char}
                    </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    numericContainerTextContainer: {
        marginRight: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numericContainerTextBig: {
        fontSize: 18
    },
    numericContainerTextSmall: {
        fontSize: 14,
    },
    iconPhone: {
        backgroundColor: 'green', width: 64, borderRadius: 64, flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});
export default NumericPanel;
