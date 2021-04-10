import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Text, Alert} from 'react-native';
 
export const AddNumeric = ({setResult}) => {
 
    const [value, setValues] = useState({a: null, b: null, c: null});

    const pressHandler = () => {
        if (!(isNaN(value.a) || isNaN(value.b) || isNaN(value.c))) {

            const {a, b, c} = value;
            
            const d = b * b - 4 * a * c;
            const x1 = -1 * b - Math.sqrt(d) / (2 * a);
            const x2 = -1 * b + Math.sqrt(d) / (2 * a);
 
            if (d < 0) {
                setResult(
                    <Text>{`Так как дискриминант меньше нуля, то корней нет D=${d} `}</Text>
                );
            } else if (d == 0) {
                setResult(
                    <Text>{`Так как дискриминант равен нулю то, квадратное уравнение имеет один действительный корень  D=${d} x1 = ${x1} x2 = ${x2}`}</Text>
                );
            } else {
                setResult(
                    <Text>{`Так как дискриминант больше нуля, то имеет несколько корней нет D=${d} x1 = ${x1} x2 = ${x2}`}</Text>
                );
            }
        } else {
            Alert.alert('Ошибка! Вводите только цифры!');
        }
    };
 
    return (
        <View>
            <View style={styles.block}>
                <TextInput
                    style={styles.input}
                    name="a"
                    value={value.a}
                    onChangeText={e => setValues({...value, ['a']: e})}
                    placeholder="Ввведите a"
                />
 
            </View>
            <View style={styles.block}>
                <TextInput
                    style={styles.input}
                    name="b"
                    value={value.b}
                    onChangeText={e => setValues({...value, ['b']: e})}
                    placeholder="Введите b"
                />
            </View>
            <View style={styles.block}>
                <TextInput
                    style={styles.input}
                    name="c"
                    value={value.c}
                    onChangeText={e => setValues({...value, ['c']: e})}
                    placeholder="Введите c"
                />
            </View>
 
            <View style={styles.button}>
                <Button title="Вычислить" color="#0066CC" onPress={pressHandler}/>
            </View>
 
        </View>
    );
};
 
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: '65%',
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '70%',
    },
    input: {
        width: '70%',
        padding: 10,
        marginBottom: 20,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#0066CC',
    },
});