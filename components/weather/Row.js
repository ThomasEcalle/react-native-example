import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';

import FadeInViews from '../animations/FadeInViews'


moment.locale('fr')

export default class Row extends Component {

    render() {

        if (this.props.index === 0){
            return (
                <FadeInViews delay={this.props.index * 100}>
                    <View style={[style.view, style.flex, style.firstView]}>
                        <View>
                            <Text style={{color: '#FFF', marginBottom: 10}}>{this.day()} {this.date()}</Text>
                            {this.icon(60)}
                        </View>

                        <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.main.temp)} °C</Text>
                    </View>
                </FadeInViews>

            )
        }
        else{
            return (
                <FadeInViews delay={this.props.index * 10}>
                    <View style={[style.view, style.flex]}>
                        <View style={style.flex}>
                            {this.icon()}
                            <Text style={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
                        </View>

                        <Text style={style.temp}>{Math.round(this.props.day.main.temp)} °C</Text>
                    </View>
                </FadeInViews>
            )
        }

    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{day}</Text>
        )
    }

    icon(size = 40){
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type){
            case 'clouds':
                image = require('./icons/cloud.png')
                break
            case 'rain':
                image = require('./icons/rain.png')
                break
            default:
                image = require('./icons/sun.png')
                break
        }

        return (<Image source={image} style={{width: size, height: size}}/> )
    }
}

Row.propTypes = {
    day: PropTypes.object,
    index: PropTypes.number,
}

const style = StyleSheet.create({

    white: {
        color: '#FFF'
    },

    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    bold: {
        fontWeight: 'bold'
    },

    firstView: {
        backgroundColor: '#e54b65'
    },

    view: {
        backgroundColor: '#394263',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',

    },

    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22,
    }
})