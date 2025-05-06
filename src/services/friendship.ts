import { createDocumentWithId, updateDocument } from "../api/firestore/DocumentMutator";
import { 
    getDocumentWithCriteria, 
    WhereCriteria 
} from "../api/firestore/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/firestore/utils";
import { Friendship } from "../model/friendship";

export const createFriendshipDocument = async (friendship: Friendship) => {
    const resp = await createDocumentWithId(
        FIREBASE_COLLECTIONS.FRIENDSHIP,
        friendship.id,
        friendship,
    );

    if(resp.error) {
        return resp.error;
    };
};

export const updatedFriendshipDocument = async (friendship: Friendship) => {
    await updateDocument(
        FIREBASE_COLLECTIONS.FRIENDSHIP,
        friendship.id,
        friendship,
    );
};

export const getFriendshipForUser = async (user: string) => {
    console.log('user', user);
    
    const criteria: WhereCriteria = {
        field: 'users',
        operation: 'array-contains',
        criteria: user,
    };

    const resp = await getDocumentWithCriteria(
        FIREBASE_COLLECTIONS.FRIENDSHIP, 
        criteria,
    );

    if(resp.error) {
        throw resp.error;
    }

    return resp.data as Friendship[];
};
