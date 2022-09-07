function Container({children, size}:any) {

    const options = {
        'fluid': 'fluid',
        'sm': 'sm',
        'base': 'base',
        'xs': 'xs',
        'md': 'md',
        'lg': 'lg',
        'xl': 'xl',
        '2xl': '2xl'
    }

    // if(options[size]) {
    //     console.error("Container - provided value", size, "doesn't exist");
    // }
    return (// @ts-ignore
        <div className={`container ${size ? `container--${options[size]}` : "container--fluid"}`}>
            {children}
        </div>
    )
}

export default Container;