import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { DescriptionInput } from './inputs/DescriptionInput';
import { Spacing } from '../Spacing';
import { ContinueButton } from '../ContinueButton';
import { ButtonText } from '../ButtonText';
import { useAppDispatch, useAppSelector } from '../../store';
import { PostBuilderActions } from '../../store/feature/postBuilder';
import { createPostThunk } from '../../store/thunk/currentPost-thunk';

export const CreatePostModal = () => {
    const dispatch = useAppDispatch();
    const {isPostModalOpen} = useAppSelector((state) => state.postBuilder);
    const closeModal = () => dispatch(PostBuilderActions.setIsPostModalOpen(false));

    const createPost = () => {
        const onSuccess = () => {
            dispatch(PostBuilderActions.setIsPostModalOpen(false));
        };

        const onError = () => {
            Alert.alert('Có lỗi khi tải lên!', 'Vui lòng đóng ứng dụng rồi thử lại!');
        };

        dispatch(createPostThunk(onSuccess, onError));
    };

    return (
        <Modal 
            isVisible={isPostModalOpen} 
            style={styles.modal}
            onBackButtonPress={closeModal}
        >
            <View style={styles.content}>
                <Spacing vertical={5} />
                <Text style={styles.header}>Bài đăng</Text>
                <Spacing vertical={5} />
                <DescriptionInput />
                <Spacing vertical={10} />
                <ContinueButton 
                    child={<ButtonText text="Tạo bài viết" />} 
                    onPress={createPost} 
                    buttonStyles={styles.createButton}
                />
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <Text style={styles.closeText}>X</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        top: -100,
    },

    content: {
        height: 280,
        width: 350,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },

    createButton: {
        width: 320,
    },

    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    closeButton: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 0,
        right: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },

    closeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});