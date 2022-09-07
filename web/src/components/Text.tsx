const types = {
    p: 'p',
    span: 'span',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

const sizes = {
    xs: 'xs',
    sm: 'sm',
    base: 'base',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
    '4xl': '4xl',
    '5xl': '5xl',
}
{/* <Text type="h1" size="xs" /> */}

function Text({children, type, size}:any) {// @ts-ignore

    const Tag = types[type] || types.p// @ts-ignore
    const className = `text--${sizes[size] || sizes.base}`

    if(!Tag) return <></>
    return <Tag className={className}>{children}</Tag>
}

export default Text;