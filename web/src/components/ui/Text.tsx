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

const weights = {
    "thin": "thin",
    "extralight": "extralight",
    "light": "light",
    "normal": "normal",
    "medium": "medium",
    "semibold": "semibold",
    "bold": "bold",
    "extrabold": "extrabold",
    "black": "black"
}

{/* <Text type="h1" size="xs" weight="bold"/> */}

function Text({title, children, type, size, weight, className, style}:any) {// @ts-ignore
    const Tag = types[type] || types.p// @ts-ignore
    const customClassName = `${className} text--${sizes[size] || sizes.base} font-${weights[weight] || weights.normal}`

    if(!Tag) return <></>
    return <Tag style={style} className={customClassName}>{title ? title : children}</Tag>
}

export default Text;