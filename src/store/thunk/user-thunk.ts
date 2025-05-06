import { AppThunk } from "..";
import auth from "@react-native-firebase/auth";
import { createUserDocument, getAllUsers, getUserDocumentWithEmail } from "../../services/user";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { UserActions } from "../feature/user";
import { UsersActions } from "../feature/users";
import { getAllPostsThunk } from "./posts-thunk";
import { getFriendshipForUserThunk } from "./friendship-thunk";

type CreateUserAccountThunk = {
    password: string;
    onSuccess: () => void;
    onError: () => void;
};

export const createUserAccountThunk = (
    props: CreateUserAccountThunk
): AppThunk<void> => {
    const {password, onSuccess, onError} = props;

    return async (dispatch, state) => {
        try {
            const newUser = Object.assign({}, state().user);
            newUser.id = generateFirebaseId(FIREBASE_COLLECTIONS.USER);
            newUser.createdDate = Date.now();
            await auth().createUserWithEmailAndPassword(newUser.email, password);
            await createUserDocument(newUser);
            onSuccess();
        } catch (error) {
            console.log(error);
            return onError();
        };
    };
};

type TakeUserToAppThunkProps = {
    email: string;
    onSuccess: () => void;
    onError: () => void;
};

export const takeUserToAppThunk = (
    props: TakeUserToAppThunkProps
) : AppThunk<void> => {
    const {email, onSuccess, onError} = props;

    return async (dispatch) => {
        try {
            const user = await getUserDocumentWithEmail(email);
            dispatch(UserActions.setuser(user));
            dispatch(UsersActions.addUsers([user]));
            dispatch(getAllPostsThunk());
            dispatch(getAllUsersThunk());
            dispatch(getFriendshipForUserThunk(user.id));
            onSuccess();
        } catch (error) {
            console.log(error);
            return onError();
        };
    };
};

export const getAllUsersThunk = (): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const users = await getAllUsers();
            dispatch(UsersActions.addUsers(users));
        } catch (error) {
            console.log('Could not retrive all users', error);
        };
    };
};

type SignInThunkProps = {
    password: string;
    onSuccess: () => void;
    onError: () => void;
};

export const signInThunk = (props: SignInThunkProps) : AppThunk<void> => {
    const {password, onSuccess, onError} = props;

    return async (dispatch, state) => {
        const {email} = state().user;
        
        try {
            await auth().signInWithEmailAndPassword(email, password);
            dispatch(takeUserToAppThunk({email, onSuccess, onError}));
        } catch (error) {
            console.log(error);
            return onError();
        };
    };
};
