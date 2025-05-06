import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import { User } from '../model/user';
import { useAppDispatch, useAppSelector } from '../store';
import { PRIMARY } from '../utils/color';
import { createFriendshipThunk } from '../store/thunk/friendship-thunk';
import { FRIENDSHIP_STATUS } from '../model/friendship';

type Props = {
    otherUser: User;
};

export const ManageFriendshipButton = (props: Props) => {
    const { otherUser } = props;
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector((state) => state.user);
    const friendships = useAppSelector((state) => state.friendships);

    const exstingFriendship = useMemo(() => {
        return Object.values(friendships).find(
            (a) => a.users.includes(otherUser.id) && a.users.includes(currentUser.id),
        );
    }, [friendships]);

    const textToShow = useMemo(() => {
        if(exstingFriendship) {
            if(exstingFriendship.status === FRIENDSHIP_STATUS.ACCEPTED) {
                return 'Bạn bè';
            }

            if(
                [FRIENDSHIP_STATUS.PENDING, FRIENDSHIP_STATUS.DECLINED].includes(
                    exstingFriendship.status,
                )
            ) {
                return 'Đang đợi...';
            }
        } else {
            return 'Thêm bạn bè';
        }
    }, []);

    const addFriend = () => {
        const onSuccess = () => {
            Alert.alert('Đã gửi yêu cầu!');
        };

        const onError = () => {
            Alert.alert(
                'Không gửi được yêu cầu!',
                'Vui lòng đóng ứng dụng và thử lại!',
            );
        };

        dispatch(createFriendshipThunk(otherUser.id, onSuccess, onError));
    };

    return (
        <TouchableOpacity style={styles.button} onPress={addFriend}>
            <Text style={styles.text}>{textToShow}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 100,
        backgroundColor: PRIMARY,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontWeight: '500',
    }
});