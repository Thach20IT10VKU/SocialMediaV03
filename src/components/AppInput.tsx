import { StyleSheet, TextInputProps, ViewStyle, TextInput } from 'react-native';
import React from 'react';
import { BORDER_LIGHT_GREY } from '../utils/color';

type Props = TextInputProps & {
    value: string;
    onChangeText: (value: string) => void;
    customStyles?: ViewStyle;
    isTextArea?: boolean;
};

const AppInput = (props: Props) => {
    const {
        autoCorrect, 
        autoCapitalize, 
        value, 
        onChangeText, 
        customStyles = {},
        secureTextEntry,
        isTextArea = false,
    } = props;

    const inputStyle: ViewStyle = {
        ...styles.input,
        ...customStyles,
        height: isTextArea ? 120 : 45,
    };

    return (
        <TextInput 
            value={value} 
            onChangeText={onChangeText} 
            style={inputStyle} 
            autoCorrect={autoCorrect} 
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            numberOfLines={isTextArea? 4 : 1}
            multiline={isTextArea}
        />
    )
};

export default AppInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: BORDER_LIGHT_GREY,
        height: 45,
        width: '100%',
        paddingHorizontal: 10,
    },
});