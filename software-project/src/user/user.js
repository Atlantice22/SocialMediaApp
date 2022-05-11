import { app } from './firebase/firebaseConfig'

export async function getUserByUserId(userId){
    const result = await app.firestore().collection('users').where('userId', '=', userId).get();
    const user = result.docs.map((item) => ({
        ... item.data(),
        docId: item.id
    }));

    return user
}