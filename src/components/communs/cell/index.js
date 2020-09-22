import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Assets} from '../../../resourse'
import PropTypes from 'prop-types';

const Cell = (props) => {

    const{
        esElUltimoToken,
        isReseat,
        onPress,
        fila,
        columna,
    } = props

    const [mostrarImagen, setMostrar] = useState(false);
    const [ultimoToken, setUltimo] = useState(true);


    useEffect(() => {
        reseatOnPress();
    }, [isReseat])


    const handleTouchable = () => {
        if(!mostrarImagen){
            setMostrar(true);
            setUltimo(esElUltimoToken);
            onPress(fila, columna);
        }
    };

    const reseatOnPress = () => {
        setMostrar(false)
    }

    return (
        <TouchableOpacity style={styles.boxTouch} onPress={handleTouchable} >
            { mostrarImagen && (
                <Image source={ultimoToken ? Assets.images.zeroIcon : Assets.images.xIcon} style={styles.imageBox} />
            )
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxTouch: {
        width: 80,
        height: 80,
        backgroundColor: '#008080',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
    },

    imageBox: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },

});

Cell.PropTypes = {
    esElUltimoToken: PropTypes.bool.isRequired,
    isReseat: PropTypes.bool.isRequired,
    onPress: PropTypes.func,
    fila: PropTypes.number.isRequired,
    columna: PropTypes.number.isRequired,
};

export default Cell;
