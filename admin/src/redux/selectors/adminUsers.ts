import { RootState } from '@reducers/index';
import { AdminUser } from 'src/types/shared/AdminUser';

export const getAdminUsers = (state: RootState): Record<number, AdminUser> =>
    state.adminUsersReducer.adminUsers;
export const getAdminUser = (state: RootState, id: number): AdminUser =>
    state.adminUsersReducer.adminUsers[id];

export const getAdminUsersIsFetching = (state: RootState): boolean =>
    state.adminUsersReducer.isFetching;
export const getAdminUsersError = (state: RootState): string | null =>
    state.adminUsersReducer.fetchError;
export const getAdminUsersPostError = (state: RootState): string | null =>
    state.adminUsersReducer.postError;

export const getAdminUserIsPosting = (state: RootState): boolean =>
    state.adminUsersReducer.isPosting;
export const getAdminUserPostSuccess = (state: RootState): boolean =>
    state.adminUsersReducer.postSuccess;
