import { AppThunk } from "..";
import { PostsActions } from "../feature/posts";
import { getAllPosts, getPostForUser } from "../../services/post";

export const getAllPostsThunk = (): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const posts = await getAllPosts();
            dispatch(PostsActions.addPosts(posts));
        } catch (error) {
            console.log('Could not retrive all posts', error);
        };
    };
};

export const getPostForUserThunk = (id: string): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const postsForUser = await getPostForUser(id);
            dispatch(PostsActions.addPosts(postsForUser));
        } catch (error) {
            console.log('Could not retrieve posts for the user', id, error);
        };
    };
};