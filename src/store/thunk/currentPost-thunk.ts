import { AppThunk } from "..";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { PostsActions } from "../feature/posts";
import { createPostDocument } from "../../services/post";

export const createPostThunk = (
    onSuccess: () => void,
    onError: () => void,
): AppThunk<void> => {
    return async (dispatch, state) => {
        const user = state().user;

        try {
            const newPost = Object.assign({}, state().currentPost);
            newPost.id =  generateFirebaseId(FIREBASE_COLLECTIONS.POST);
            newPost.user = user.id;
            newPost.createdDate = Date.now();
            await createPostDocument(newPost);
            dispatch(PostsActions.addPosts([newPost]));
            onSuccess();
        } catch (error) {
            console.log(error);
            onError();
        };
    };
};