import { AppThunk } from "..";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/firestore/utils";
import { Friendship, FRIENDSHIP_STATUS } from "../../model/friendship";
import { createFriendshipDocument, getFriendshipForUser, updatedFriendshipDocument } from "../../services/friendship";
import { FriendshipsActions } from "../feature/friendships";

export const getFriendshipForUserThunk = (id: string): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const friendships = await getFriendshipForUser(id);
            console.log('friendships from thunk', friendships);
            dispatch(FriendshipsActions.addFriendships(friendships));
        } catch (error) {
            console.log('Could not retrieve friendship for the user', id, error);
        };
    };
};

export const createFriendshipThunk = (
    otherUserId: string, 
    onSuccess: () => void, 
    onError: () => void,
): AppThunk<void> => {
    return async (dispatch, state) => {
        const {user} = state();
        try {
            const newFriendship: Friendship ={
                id: generateFirebaseId(FIREBASE_COLLECTIONS.FRIENDSHIP),
                users: [user.id, otherUserId],
                requester: user.id,
                status: FRIENDSHIP_STATUS.PENDING,
                createDate: Date.now(),
                /**
                 * TO DO: How to format dates in Expo?
                 */
                createDateString: '',
            };
            
            createFriendshipDocument(newFriendship);
            dispatch(FriendshipsActions.addFriendships([newFriendship]));
            onSuccess();
        } catch (error) {
            console.log('Could not retrieve friendship for the user', error);
            onError();
        };
    };
};

export const acceptedFriendshipThunk = (
    friendship: Friendship, 
    onSuccess: () => void, 
    onError: () => void,
): AppThunk<void> => {
    return async (dispatch) => {
        try {
            const newFriendship = Object.assign({}, friendship);
            newFriendship.status = FRIENDSHIP_STATUS.ACCEPTED;
            newFriendship.accepteDate = Date.now();
            updatedFriendshipDocument(newFriendship);
            dispatch(FriendshipsActions.addFriendships([newFriendship]));
            onSuccess();
        } catch (error) {
            console.log('Could not accept friendship!', error);
            onError();
        };
    };
};
