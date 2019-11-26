import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { exampleAction } from '../Screen/actions/actions';

import { styles } from './styles';

const OpenGL = (props) => {
    const { exampleAction, displayedState } = props;

    const sendAction = () => {
        exampleAction();
    }

    return (
        <View style={styles.container}>
            <Text>{displayedState}</Text>
            <TouchableOpacity onPress={sendAction}>
                <Text style={styles.button}>Send Action</Text>
            </TouchableOpacity>
        </View>
    );

}

const mapStateToProps = (state) => ({
    displayedState: state.example
})

const mapDispatchToProps = {
    exampleAction
}


export default connect(mapStateToProps, mapDispatchToProps)(OpenGL)