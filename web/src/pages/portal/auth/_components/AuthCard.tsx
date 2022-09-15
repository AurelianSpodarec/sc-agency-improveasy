import { IconLogoPublic } from '@content/icons/logo/IconLogoPublic';
import { ReactNode } from 'react';

function AuthCard({
    children,
    image = 'https://www.solarpanelinstallers.co.uk/wp-content/uploads/2021/11/Row-of-red-brick-english-houses-with-solar-panels-installed.jpg',
}: // image = 'https://media.istockphoto.com/photos/conserving-the-environment-during-his-commute-picture-id1349671527?k=20&m=1349671527&s=612x612&w=0&h=Dw1C6Rc_QBXbL9KckGbwtlFYrsl-8tgdEXzN0nRanFA=',
// image = 'https://media.istockphoto.com/photos/architect-and-engeneer-on-construciton-siteconstruction-manager-and-picture-id936399142?s=612x612',
AuthCardProps) {
    return (
        <div className="authLogin">
            <div className="authLogin__image">
                <img className="w-full" src={image} alt="yes" />
                <div className="overlay__black"></div>
            </div>

            <div className="authLogin__main">
                <div className="authLogin__logo-wrap">
                    <IconLogoPublic className="authLogin__logo" />
                </div>

                <div className="authLogin__content">
                    <div className="authLogin__content-inner">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default AuthCard;

interface AuthCardProps {
    children: ReactNode;
    image?: string;
}
