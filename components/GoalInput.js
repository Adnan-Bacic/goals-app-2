import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (text) => {
        //console.log(text)
        setEnteredGoalText(text)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}></Image>
                <TextInput placeholder='course goal' onChangeText={goalInputHandler} style={styles.textInput} value={enteredGoalText} TextInput></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='cancel' onPress={props.onCancel} color="#f31282"></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='add goal' onPress={addGoalHandler} color="#b180f0"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput;