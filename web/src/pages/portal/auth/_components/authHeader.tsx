// import { IconLogoPublic } from '@content/icons/logo/IconLogoPublic';

import { Text } from '@components/ui';

function AuthHeader({ children, title }: any) {
    return (
        <header className="authLogin__header">
            {/* <div style={{ width: '100px' }}>
                <IconLogoPublic />
            </div> */}
            <Text size="xl" type="h2" weight="bold">
                {title}
            </Text>
            {children}
        </header>
    );
}

export default AuthHeader;
