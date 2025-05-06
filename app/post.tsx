import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../src/store';
import { router } from 'expo-router';
import { CurrentUserActions } from '../src/store/feature/currentUser';
import { ROUTES } from '../src/routes';
import { Header } from '../src/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const PostDetailPage = () => {
    const dispatch = useAppDispatch();
    const currentPost = useAppSelector((state) => state.currentPost);
    const users = useAppSelector((state) => state.users);

    const currentUser = useMemo(
        () => users[currentPost.user],
        [users, currentPost.user],
    );
    
    const goBack = () => {
        router.back();
    };

    const goToUserDetailPage = () => {
        dispatch(CurrentUserActions.setCurrentUser(currentUser));
        router.push(ROUTES.USER);
    };

    return (
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
            <Header 
                leftButton={{
                    onPress: goBack
                }}

                showLogo
            />
            <View style={styles.main}>
                <TouchableOpacity onPress={goToUserDetailPage}>
                    <Text>{currentUser?.name}</Text>
                </TouchableOpacity>
                <Text>{currentPost.text}</Text>
            </View>
        </SafeAreaView>
    );
};

export default PostDetailPage;

const styles = StyleSheet.create({
    backImage: {
        height: 20,
        width: 20,
    },

    safeAreaView: {
        flex: 1,
    },

    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
});