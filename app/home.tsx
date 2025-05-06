import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { useMemo } from 'react';
import { PostCard } from '../src/components/PostCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Spacing } from '../src/components/Spacing';
import { Header } from '../src/components/Header';
import { useAppDispatch, useAppSelector } from '../src/store';
import { ButtonText } from '../src/components/ButtonText';
import { PRIMARY } from '../src/utils/color';
import { PostBuilderActions } from '../src/store/feature/postBuilder';
import { CurrentPostActions } from '../src/store/feature/currentPost';
import auth from '@react-native-firebase/auth';
import { router } from 'expo-router';
import { ROUTES } from '../src/routes';

const home = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.posts);

    const postsToShow = useMemo(() => {
        return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
    }, [posts]);

    const createPost = () => {
        dispatch(CurrentPostActions.reset());
        dispatch(PostBuilderActions.setIsPostModalOpen(true));
    };

    const signOut = () => {
        auth().signOut();
        router.replace(ROUTES.SIGN_UP);
    };

    const goToProfile = () => router.push(ROUTES.MY_PROFILE);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Header 
                leftButton={{
                    child: <Text>Profile</Text>,
                    onPress: goToProfile,
                }}

                showLogo

                rightButton={{
                    child: <Text>Đăng xuất</Text>,
                    onPress: signOut,
                }}
            />
            <ScrollView 
                style={styles.scrollView} 
                contentContainerStyle={styles.scrollViewContentContainer} 
                showsVerticalScrollIndicator={false}
            >
                {postsToShow.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}

                <Spacing vertical={100}/>
            </ScrollView>
            <TouchableOpacity style={styles.createPostButton} onPress={createPost}>
                <ButtonText text="+"/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollView: {},

    scrollViewContentContainer: {
        alignItems: 'center',
    },

    createPostButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        top: -100,
    },

    content: {
        height: 400,
        width: 350,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});