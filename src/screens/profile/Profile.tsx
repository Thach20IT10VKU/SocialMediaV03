import { StyleSheet, View } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import { POSTS } from '../../data/posts';
import { PostCard } from '../../components/PostCard';
import { UserInfo } from '../../components/user/UserInfo';

const Profile = () => {
    const myUser = USERS[0];
    const postForUser = POSTS;

    return (
        <View style={styles.container}>
            {/* User info header */}
            <UserInfo user={myUser}/>

            {/* Previos posts */}
            <View style={styles.posts}>
                {postForUser.map(post => <PostCard post={post} key={post.id} />)}
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },

    topInfo: {
        height: 150,
        flexDirection: 'row',
    },

    imageColumn: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    userInfoColumn: {
        height: '100%',
        width: '75%',
        justifyContent: 'center',
    },

    photo: {
        height: 80,
        width: 80,
        backgroundColor: 'blue',
        borderRadius: 40,
    },
    
    name: {
        fontSize: 20,
        fontWeight: '500',
    },

    username: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic',
    },

    bio: {
        fontSize: 13,
        fontWeight: '300',
        marginTop: 5,
    },

    posts: {
        height: '100%',
        alignItems: 'center',
    },
})