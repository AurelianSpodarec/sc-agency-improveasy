import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { convertArrToObj } from 'lib/src/utils/generic';
import {
    deleteUserFailure,
    deleteUserRequest,
    deleteUserSuccess,
    fetchAllUsersFailure,
    fetchAllUsersRequest,
    fetchAllUsersSuccess,
    fetchSingleUserFailure,
    fetchSingleUserRequest,
    fetchSingleUserSuccess,
    createUserFailure,
    createUserRequest,
    createUserSuccess,
    updateUserFailure,
    updateUserRequest,
    updateUserSuccess,
    updateUserPasswordFailure,
    updateUserPasswordRequest,
    updateUserPasswordSuccess,
} from '@actions/users';
import { User } from 'src/types/shared/User';

interface UsersState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    error: string | null;
    users: { [key: number]: User };
}

const initialState: UsersState = {
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    error: null,
    users: {},
};

export default createReducer(initialState, {
    [fetchAllUsersRequest.type]: handleFetchRequest,
    [fetchAllUsersSuccess.type]: handleFetchUsersSuccess,
    [fetchAllUsersFailure.type]: handleFetchError,
    [fetchSingleUserRequest.type]: handleFetchRequest,
    [fetchSingleUserSuccess.type]: handleFetchSingleUserSuccess,
    [fetchSingleUserFailure.type]: handleFetchError,
    [createUserRequest.type]: handlePostRequest,
    [createUserSuccess.type]: handleCreateUserSuccess,
    [createUserFailure.type]: handlePostError,
    [updateUserRequest.type]: handlePostRequest,
    [updateUserSuccess.type]: handleUpdateUserSuccess,
    [updateUserFailure.type]: handlePostError,
    [updateUserPasswordRequest.type]: handlePostRequest,
    [updateUserPasswordSuccess.type]: handleUpdateUserPasswordSuccess,
    [updateUserPasswordFailure.type]: handlePostError,
    [deleteUserRequest.type]: handleDeleteRequest,
    [deleteUserFailure.type]: handleDeleteError,
    [deleteUserSuccess.type]: handleDeleteSuccess,
});

function handleFetchRequest(state: UsersState) {
    state.isFetching = true;
}

function handlePostRequest(state: UsersState) {
    state.isPosting = true;
    state.postSuccess = false;
}
function handleDeleteRequest(state: UsersState) {
    state.isPosting = true;
    state.postSuccess = false;
}

function handleFetchError(state: UsersState, action: PayloadAction<string>) {
    state.error = action.payload;
    state.isFetching = false;
}
function handlePostError(state: UsersState, action: PayloadAction<string>) {
    state.error = action.payload;
    state.isPosting = false;
}
function handleDeleteError(state: UsersState, action: PayloadAction<string>) {
    state.error = action.payload;
    state.isPosting = false;
}

function handleFetchUsersSuccess(state: UsersState, action: PayloadAction<User[]>) {
    state.users = convertArrToObj(action.payload);
    state.isFetching = false;
}

function handleFetchSingleUserSuccess(state: UsersState, action: PayloadAction<User>) {
    state.users[action.payload.id] = action.payload;
    state.isFetching = false;
}

function handleCreateUserSuccess(state: UsersState, action: PayloadAction<User>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.users[action.payload.id] = action.payload;
}
function handleUpdateUserSuccess(state: UsersState, action: PayloadAction<User>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.users[action.payload.id] = action.payload;
}
function handleUpdateUserPasswordSuccess(state: UsersState) {
    state.isPosting = false;
    state.postSuccess = true;
}

function handleDeleteSuccess(state: UsersState, action: PayloadAction<number>) {
    state.isPosting = false;
    state.postSuccess = true;
    delete state.users[action.payload];
}
