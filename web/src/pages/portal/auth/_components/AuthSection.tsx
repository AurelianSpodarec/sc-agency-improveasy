import { ReactNode } from 'react';

function AuthSection({ children }: AuthSectionProps) {
    return <section className="authLogin__section">{children}</section>;
}

export default AuthSection;

interface AuthSectionProps {
    children: ReactNode;
}
