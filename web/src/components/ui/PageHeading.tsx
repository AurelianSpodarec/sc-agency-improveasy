import Text from './Text';

function PageHeading({ className, title, size, border = true }: any) {
    const isBorder = border ? 'page-heading--border-bottom' : '';
    return (
        <header className={`${className ? className : ''} page-heading ${isBorder}`}>
            <Text type="h2" size={size ? size : '2xl'} weight="bold">
                <span>{title}</span>
            </Text>
        </header>
    );
}

export default PageHeading;
