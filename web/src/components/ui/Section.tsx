function Section({ className, style, children, size }: any) {
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
    //     console.error("section - provided value", size, "doesn't exist");
    // }
    return (
        // @ts-ignore
        <section
            style={style}
            className={`section ${className ? className : ''} ${
                size ? `section--${options[size]}` : `section--${options.base}`
            }`}
        >
            {children}
        </section>
    );
}

export default Section;
