import Text from "./Text";

function PageHeading({className, title}:any) {
    return (
        //  text-center
        <header className={`${className} page-header`}>
            <Text type="h2" size="2xl" weight="bold">
                <span>{title}</span>
            </Text>
        </header>
    )
}

export default PageHeading;