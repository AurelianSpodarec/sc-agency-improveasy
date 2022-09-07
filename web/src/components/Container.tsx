function Container({children, size}:any) {

    const options = [
        'fluid',
        'sm',
        'xs',
        'md',
        'lg',
        'xl',
        '2xl'
    ]

    if(options[size]) {
        console.error("Container - provided value", size, "doesn't exist");
    }
    return (
        <div className={`container ${size ? `container--"${options[size]}` : "container--xl"}`}>
            {children}
        </div>
    )
}

export default Container;