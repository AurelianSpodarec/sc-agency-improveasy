// import { IconLogoPublic } from '@content/icons/logo/IconLogoPublic';

import { PageHeading, Text } from '@components/ui';

function AuthHeader({ children, title }: any) {
    return (
        <header className="authLogin__header">
            <PageHeading title={title} space="sm" />
            {children}
        </header>
    );
}

export default AuthHeader;
