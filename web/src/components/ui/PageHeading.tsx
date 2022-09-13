import Text from './Text';

function PageHeading({
    className,
    title,
    type,
    size = '2xl',
    border = true,
    space = 'md',
}: PageHeadingProps) {
    const isBorder = border ? 'page-heading--border-bottom' : '';

    return (
        <header
            className={`${
                className ? className : ''
            } page-heading ${isBorder} page-heading--space-${space}`}
        >
            <Text type="h2" size={size} weight="bold">
                <span>{title}</span>
            </Text>
        </header>
    );
}

export default PageHeading;

interface PageHeadingProps {
    className?: string;
    title: string;
    type?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    border?: boolean;
    space?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
}
