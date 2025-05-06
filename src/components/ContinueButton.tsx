import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { PRIMARY } from "../utils/color";

type Props = {
    child: JSX.Element;
    onPress: () => void;
    buttonStyles?: ViewStyle;
};

export const ContinueButton = (props: Props) => {
    const {child, onPress, buttonStyles = {}} = props;

    const localButtonStyle: ViewStyle = {
        ...styles.container,
        ...buttonStyles
    };

    return (
        <TouchableOpacity onPress={onPress} style={localButtonStyle}>{child}</TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
});