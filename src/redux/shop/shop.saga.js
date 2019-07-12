import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import {firestore,convertCollectionSnapchotToMap } from '../../firebase/firebase.util'

import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapchotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
        // yield delay(10000);
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
   
}


export function* fetchCollectionsStart(){
    yield takeLatest('FETCH_COLLECTIONS_START',fetchCollectionsAsync);
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}