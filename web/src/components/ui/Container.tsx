function Container({ children, style, size }: any) {
    const options: any = {
        fluid: 'fluid',
        sm: 'sm',
        base: 'base',
        xs: 'xs',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        '2xl': '2xl',
    };

    // if(options[size]) {
    //     console.error("Container - provided value", size, "doesn't exist");
    // }
    return (
        // @ts-ignore
        <div
            style={style}
            className={`container ${size ? `container--${options[size]}` : 'container--fluid'}`}
        >
            {children}
        </div>
    );
}

export default Container;
