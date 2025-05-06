import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { User } from '../../model/user';
import { ManageFriendshipButton } from '../ManageFriendshipButton';
import { useAppSelector } from '../../store';

type Props = {
    user: User;
};

export const UserInfo = (props: Props) => {
    const {user} = props;

    const loggedInUser = useAppSelector((state) => state.user);

    return (
        <View style={styles.topInfo}>
            {/* Photo column */}
            <View style={styles.imageColumn}>
                <View style={styles.photo}></View>
            </View>

            {/* User info column */}
            <View style={styles.userInfoColumn}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </View>

            {/* Mangage Friendship/Follow */}
            <View style={styles.friendButton}>
                {loggedInUser.id !== user.id && (
                    <ManageFriendshipButton otherUser={user} />
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },

    topInfo: {
        height: 100,
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

    friendButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});