import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { convertArrToObj } from 'lib/src/utils/generic';
import {
    deleteAdminUserFailure,
    deleteAdminUserRequest,
    deleteAdminUserSuccess,
    fetchAllAdminUsersFailure,
    fetchAllAdminUsersRequest,
    fetchAllAdminUsersSuccess,
    fetchSingleAdminUserFailure,
    fetchSingleAdminUserRequest,
    fetchSingleAdminUserSuccess,
    createAdminUserFailure,
    createAdminUserRequest,
    createAdminUserSuccess,
    updateAdminUserFailure,
    updateAdminUserRequest,
    updateAdminUserSuccess,
    updateAdminUserPasswordRequest,
    updateAdminUserPasswordSuccess,
    updateAdminUserPasswordFailure,
} from '@actions/adminUsers';
import { AdminUser } from 'src/types/shared/AdminUser';

interface AdminUsersState {
    isFetching: boolean;
    isPosting: boolean;
    postSuccess: boolean;
    fetchError: string | null;
    postError: string | null;
    adminUsers: Record<number, AdminUser>;
}

const initialState: AdminUsersState = {
    isFetching: false,
    isPosting: false,
    postSuccess: false,
    fetchError: null,
    postError: null,
    adminUsers: {},
};

export default createReducer(initialState, {
    [fetchAllAdminUsersRequest.type]: handleFetchRequest,
    [fetchAllAdminUsersSuccess.type]: handleFetchAllSuccess,
    [fetchAllAdminUsersFailure.type]: handleFetchError,
    [fetchSingleAdminUserRequest.type]: handleFetchRequest,
    [fetchSingleAdminUserSuccess.type]: handleFetchSingleSuccess,
    [fetchSingleAdminUserFailure.type]: handleFetchError,
    [createAdminUserRequest.type]: handlePostRequest,
    [createAdminUserSuccess.type]: handlePostSuccess,
    [createAdminUserFailure.type]: handlePostError,
    [updateAdminUserRequest.type]: handlePostRequest,
    [updateAdminUserSuccess.type]: handlePostSuccess,
    [updateAdminUserFailure.type]: handlePostError,
    [updateAdminUserPasswordRequest.type]: handlePostRequest,
    [updateAdminUserPasswordSuccess.type]: handleUpdatePasswordSuccess,
    [updateAdminUserPasswordFailure.type]: handlePostError,
    [deleteAdminUserRequest.type]: handlePostRequest,
    [deleteAdminUserFailure.type]: handlePostError,
    [deleteAdminUserSuccess.type]: handleDeleteSuccess,
});

function handleFetchRequest(state: AdminUsersState) {
    state.isFetching = true;
    state.fetchError = null;
}

function handleFetchError(state: AdminUsersState, action: PayloadAction<string>) {
    state.fetchError = action.payload;
    state.isFetching = false;
}

function handleFetchAllSuccess(state: AdminUsersState, action: PayloadAction<AdminUser[]>) {
    state.adminUsers = convertArrToObj(action.payload);
    state.isFetching = false;
}

function handlePostRequest(state: AdminUsersState) {
    state.isPosting = true;
    state.postSuccess = false;
    state.postError = null;
}

function handlePostError(state: AdminUsersState, action: PayloadAction<string>) {
    state.postError = action.payload;
    state.isPosting = false;
}

function handlePostSuccess(state: AdminUsersState, action: PayloadAction<AdminUser>) {
    state.isPosting = false;
    state.postSuccess = true;
    state.adminUsers[action.payload.id] = action.payload;
}

function handleFetchSingleSuccess(state: AdminUsersState, action: PayloadAction<AdminUser>) {
    state.adminUsers[action.payload.id] = action.payload;
    state.isFetching = false;
}

function handleUpdatePasswordSuccess(state: AdminUsersState) {
    state.isPosting = false;
    state.postSuccess = true;
}

function handleDeleteSuccess(state: AdminUsersState, action: PayloadAction<number>) {
    state.isPosting = false;
    state.postSuccess = true;
    delete state.adminUsers[action.payload];
}
