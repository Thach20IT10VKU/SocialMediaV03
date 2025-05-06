import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';
import { ROUTES } from "../src/routes";
import { useAppDispatch } from '../src/store';
import auth from '@react-native-firebase/auth';
import { takeUserToAppThunk } from '../src/store/thunk/user-thunk';

const Root = () => {
    const dispatch = useAppDispatch();
    const goToSignUp = () => router.push(ROUTES.SIGN_UP);
    const goToApp = () => router.push(ROUTES.HOME);

    useEffect(() => {
        if(auth().currentUser?.email) {
            dispatch(
                takeUserToAppThunk({
                    email: auth().currentUser?.email || '',
                    onSuccess: goToApp,
                    onError: goToSignUp,
                }),
            );
        } else {
            goToSignUp();
        }
    }, []);

    return (
        <View>
            <Text>Root</Text>
        </View>
    );
};

export default Root;