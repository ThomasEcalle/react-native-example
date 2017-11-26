import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
} from 'react-native'

import globalStyle from '../Style'

export default class About extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/user.png')} style={{height: 20, width: 20}}/>
        }
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}>A propos de l'application !</Text>
                <Text style={{marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras aliquet eget risus sed placerat. Vivamus consectetur,
                    risus a vestibulum laoreet, massa arcu vestibulum mi,
                    non mattis mi metus finibus libero. Vivamus ac pretium mi.
                </Text>
                <Button
                    title={"Rechercher"}
                    onPress={() => this.search()}
                    color={globalStyle.color}
                />
            </View>
        )
    }

    search() {
        this.props.navigation.navigate('Search')
    }
}