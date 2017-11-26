import React, {Component} from 'react'
import {
    TextInput,
    View,
    Image,
    Button,
    Keyboard,
} from 'react-native'

import globalStyle from '../Style'
import {StackNavigator} from 'react-navigation'
import List from "./List";

class Search extends Component {

    static navigationOptions = {

        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{height: 20, width: 20}}/>
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            city: 'Paris'
        }
    }

    render() {
        return (
            <View style={globalStyle.container}>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    onSubmitEditing={() => this.submit()}
                    style={globalStyle.input}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                />
                <Button
                    onPress={() => this.submit()}
                    title={'Rechercher'}
                    color={globalStyle.color}

                />
            </View>
        )
    }

    setCity(city) {
        this.setState({
            city: city
        })
    }

    submit() {
        Keyboard.dismiss()
        this.props.navigation.navigate('Result', {city: this.state.city})
    }
}

const navigationOptions = {
    headerStyle: globalStyle.header,
    headerTitleStyle: globalStyle.headerTitle,
    headerTintColor: '#FFF'
}

export default StackNavigator({

    Search: {
        screen: Search,
        navigationOptions: {
            headerStyle: navigationOptions.headerStyle,
            headerTitleStyle: navigationOptions.headerTitleStyle,
            headerTintColor: navigationOptions.headerTintColor,
        },
    },
    Result: {
        screen: List,
        navigationOptions: {
            headerStyle: navigationOptions.headerStyle,
            headerTitleStyle: navigationOptions.headerTitleStyle,
            headerTintColor: navigationOptions.headerTintColor,
        },
    }
})