import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../src/components/Header';
import AppInput from '../src/components/AppInput';
import { InputLabel } from '../src/components/InputLabel';
import { Spacing } from '../src/components/Spacing';
import { ContinueButton } from '../src/components/ContinueButton';
import { ButtonText } from '../src/components/ButtonText';
import { useAppDispatch, useAppSelector } from '../src/store';
import { UserActions } from '../src/store/feature/user';
import { createUserAccountThunk } from '../src/store/thunk/user-thunk';
import { router } from 'expo-router';
import { ROUTES } from '../src/routes';

const signUp = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const [password, setPassword] = useState('');
    
    const createAccount = () => {
        const onSuccess = () => router.push(ROUTES.HOME);
        const onError = () => Alert.alert('Không tạo được tài khoản!', 'Vui lòng thử lại!');
        dispatch(createUserAccountThunk({password, onSuccess, onError}));
    };
    
    return (
        <SafeAreaView edges={['top']}>
            <Header showLogo/>
            <View style={styles.main}>
                <Text style={styles.heading}>Xin chào</Text>
            </View>
            <View style={styles.elementContainer}>
                <InputLabel value="Tên" />
                <AppInput 
                    value={user.name} 
                    onChangeText={text => dispatch(UserActions.setName(text))} 
                    autoCapitalize='none' 
                    autoCorrect={false}
                />
            </View>
            <Spacing vertical={5} />
            <View style={styles.elementContainer}>
                <InputLabel value="Username" />
                <AppInput 
                    value={user.username} 
                    onChangeText={text => dispatch(UserActions.setUsername(text))} 
                    autoCapitalize='none' 
                    autoCorrect={false}
                />
            </View>
            <Spacing vertical={5} />
            <View style={styles.elementContainer}>
                <InputLabel value="Email" />
                <AppInput 
                    value={user.email} 
                    onChangeText={text => dispatch(UserActions.setEmail(text))} 
                    autoCapitalize='none' 
                    autoCorrect={false}
                />
            </View>
            <Spacing vertical={5} />
            <View style={styles.elementContainer}>
                <InputLabel value="Mật khẩu" />
                <AppInput 
                    value={password} 
                    onChangeText={setPassword}
                    autoCapitalize='none' 
                    autoCorrect={false}
                    secureTextEntry
                />
            </View>
            <Spacing vertical={10} />
            <View style={styles.elementContainer}>
                <ContinueButton 
                    child={<ButtonText text="Tạo tài khoản" />}
                    onPress={createAccount}
                />
            </View>
            <Spacing vertical={10} />
            <TouchableOpacity 
                style={styles.elementContainer} 
                onPress={() => router.push(ROUTES.SIGN_IN)}
            >
                <Text style={styles.goToSignInText}>Bạn có tài khoản?</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
};

export default signUp;

const styles = StyleSheet.create({
    main: {},

    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        alignSelf: 'center',
        marginTop: 10,
    },

    elementContainer: {
        width: '80%',
        alignSelf: 'center',
    },

    goToSignInText: {
        alignSelf: 'center',
    },
});