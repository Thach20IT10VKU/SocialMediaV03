import { AppThunk } from ".";
import { User } from "../model/user";

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
        } catch (error) {
            console.log(error);
        };
    };
};