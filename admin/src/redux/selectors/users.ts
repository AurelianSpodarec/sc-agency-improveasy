import { RootState } from '@reducers/index';
import { User } from 'src/types/shared/User';

export const getUsers = (state: RootState): Record<number, User> => state.usersReducer.users;
export const getUser = (state: RootState, id: number): User => state.usersReducer.users[id];
export const getUsersIsFetching = (state: RootState): boolean => state.usersReducer.isFetching;
export const getUsersError = (state: RootState): string | null => state.usersReducer.error;

export const getUserIsPosting = (state: RootState): boolean => state.usersReducer.isPosting;
export const getUserPostSuccess = (state: RootState): boolean => state.usersReducer.postSuccess;
