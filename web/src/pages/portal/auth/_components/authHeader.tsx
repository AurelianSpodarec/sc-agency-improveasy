import { IconLogoPublic } from '@content/icons/logo/IconLogoPublic';

function AuthHeader({ title }: any) {
    return (
        <header>
            <IconLogoPublic />
            <span>{title}</span>
        </header>
    );
}

export default AuthHeader;
