import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import currentPost from './feature/currentPost';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import currentUser from './feature/currentUser';
import user from './feature/user';
import posts from './feature/posts';
import users from './feature/users';
import postBuilder from './feature/postBuilder';
import friendships from './feature/friendships'; 

const store = configureStore({
    reducer: {
        /**
         * When the User vistis the PostDetailPage, the currentPost slice of state is updated with the...
         */
        currentPost,
        /**
         * When the User visits the UserDetailPage, the currentUser slice of state is updated with the...
         */
        currentUser,
        /**
         * The currently logged in user is stored in the user slice of state.
         */
        user,
        /**
         * As the User comes across post in the app, they are stored in the posts dump/slice of state.
         */
        posts,
        /**
         * As the currently logged in User comes aross other User, we will store their documents inside...
         */
        users,
        /**
         * Controls the state of the PostBuilderModal - i.e., whether it is open or closed.
         */
        postBuilder,
        friendships,
    },
});

export default store;

//Iter the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Used throughout the app to write to redux
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<R> = ThunkAction<R, RootState, unknown, Action<any>>;