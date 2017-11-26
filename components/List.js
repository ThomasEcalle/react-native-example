import React, {Component} from 'react'
import {

    View,
    Image,
    ActivityIndicator,
    ListView,
} from 'react-native'

import globalStyle from '../Style'
import WeatherRow from './weather/Row'

export default class List extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Météo / " + navigation.state.params.city,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{height: 20, width: 20}}/>
            }
        }
    }


    constructor(props) {
        super(props)

        this.state = {
            city: this.props.navigation.state.params.city,
            report: null,
        }

        this.fetchWeather()
    }

    render() {

        if (this.state.report === null) {
            return (
                <View style={globalStyle.centerContainer}>
                    <ActivityIndicator
                        color={globalStyle.redColor}
                        size={'large'}
                    />
                </View>

            )
        }
        else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

            return (

                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, index) => <WeatherRow day={row} index={parseInt(index, 10)}/>}
                />
            )
        }

    }

    fetchWeather() {

        return fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.city + ",us&units=metric&APPID=03418c713db43e700b53195a35be78c7")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({report: responseJson})
            })
            .catch((error) => {
                console.error(error);
            })
    }
}