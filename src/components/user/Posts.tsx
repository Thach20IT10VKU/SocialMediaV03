import { StyleSheet, Text, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { Spacing } from '../Spacing';
import { useAppSelector } from '../../store';
import { PostCard } from '../PostCard';

type Props = {
    isActive: boolean,
};

export const Posts = (props: Props) => {
    const {isActive} = props;

    const currentUser = useAppSelector((state) => state.currentUser);
    const posts = useAppSelector((state) => state.posts);

    const postForUser = useMemo(() => {
        return Object.values(posts).filter(post => post.user === currentUser.id).sort((a, b) => b.createdDate - a.createdDate);
    }, []);

    if (!isActive) {
        return null;
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} showsVerticalScrollIndicator={false}>
            <Text>Posts</Text>
            {postForUser.map(post => <PostCard post={post} key={post.id} />)}
            <Spacing vertical={100} horizontal={0}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollView: {},

    scrollViewContentContainer: {
        alignItems: 'center',
    },
});