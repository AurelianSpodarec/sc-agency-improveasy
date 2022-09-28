import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';
import { logout } from '@actions/auth';

function UserAvatar() {
    const history = useHistory();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
        clearJwtAndRefreshToken();
        history.push('/');
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="userAvatar__trigger">
                <div className="userAvatar__image">
                    <svg className="userAvatar__placeholder-avatar" viewBox="0 0 448 512">
                        <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                    </svg>
                </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="userAvatar__menu">
                    <Link to="/portal/profile" className="userAvatar__menu-button" type="button">
                        View Profile
                    </Link>
                    <Link to="/portal/properties" className="userAvatar__menu-button" type="button">
                        View Properties
                    </Link>
                    <button
                        onClick={() => handleLogout()}
                        className="userAvatar__menu-button"
                        type="button"
                    >
                        Logout
                    </button>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
export default UserAvatar;
