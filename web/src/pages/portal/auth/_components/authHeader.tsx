// import { IconLogoPublic } from '@content/icons/logo/IconLogoPublic';

import { Text } from '@components/ui';

function AuthHeader({ title }: any) {
    return (
        <header className="authLogin__header">
            {/* <div style={{ width: '100px' }}>
                <IconLogoPublic />
            </div> */}
            <Text size="xl" type="h2" weight="bold">
                {title}
            </Text>
        </header>
    );
}

export default AuthHeader;
