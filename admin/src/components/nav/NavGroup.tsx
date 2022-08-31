const NavGroup: React.FC<NavGroupProps> = ({ children, text }) => (
    <>
        <li className="nav-group">
            <p>{text}</p>
        </li>
        {children}
    </>
);

interface NavGroupProps {
    children: React.ReactNode;
    text: string;
}

export default NavGroup;
