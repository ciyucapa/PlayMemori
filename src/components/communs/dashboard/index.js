import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Cell from "../cell";

const OldBoard = () => {

    const [playerOne, setPlayer] = useState(true);
    const [reseat, setReseat] = useState(false);
    const [posicion, setPosicion] = useState([
        [
            {
                number: 1,
                isVisible: false,
            },
            {
                number: 2,
                isVisible: false,
            },
        ],
        [
            {
                number: 2,
                isVisible: false,
            },
            {
                number: 1,
                isVisible: false,
            },
        ],
    ])

    useEffect(() => {
        setReseat(false)
    }, [reseat])

    useEffect(() => {
        if(posicion){

        }
    }, [posicion])

    const ultimoToken = (fila, columna) => {
        setPlayer(!playerOne)
        setPosicion(fila, columna)
    }

    const handleReseat = () => {
        setReseat(true)
    }

    return(
        <View styles={styles.boxBoard}>
            <Text styles={styles.title}>
                Welcome Play!
            </Text>
            <View styles={styles.oneBox}>
                <Cell onPress={ultimoToken} esElUltimoToken={playerOne} isReseat={reseat} fila={0} columna={0} />
                <Cell onPress={ultimoToken} esElUltimoToken={playerOne} isReseat={reseat} fila={0} columna={0} />
                <Cell onPress={ultimoToken} esElUltimoToken={playerOne} isReseat={reseat} fila={0} columna={0} />
            </View>
            <Button onPress={handleReseat} title='Reseat' color="#f194ff"/>
        </View>
    );
};

const styles = StyleSheet.create({
    boxBoard: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    title: {
        textAlign: 'center',
        backgroundColor: 'red',
    },

    oneBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    imageBoxBoard: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },


});

export default OldBoard;
