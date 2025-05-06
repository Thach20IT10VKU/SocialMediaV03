import React from "react";
import { StyleSheet, Text} from "react-native";

type Props = {
    value: string;
};

export const InputLabel = (props: Props) => {
    const {value} = props;

    return (
        <Text style={styles.label}>{value}</Text>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '400',
    },
});