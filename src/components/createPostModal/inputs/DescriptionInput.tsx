import { StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../store';
import { CurrentPostActions } from '../../../store/feature/currentPost';
import { InputLabel } from '../../InputLabel';
import AppInput from '../../AppInput';
import { Spacing } from '../../Spacing';

export const DescriptionInput = () => {
    const dispatch = useAppDispatch();
    const currentPost = useAppSelector((state) => state.currentPost);

    const onDescriptionChange = (text: string) => {
        dispatch(CurrentPostActions.setDescription(text));
    };

    return (
        <View>
            <InputLabel value="Bạn đang nghĩ gì?" />
            <Spacing vertical={2.5}/>
            <AppInput value={currentPost.text} onChangeText={onDescriptionChange} customStyles={styles.input} isTextArea />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 320,
    },
});