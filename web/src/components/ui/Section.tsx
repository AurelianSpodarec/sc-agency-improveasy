function Section({children, size}:any) {

    const options = [
        'fluid',
        'sm',
        'base',
        'xs',
        'md',
        'lg',
        'xl',
        '2xl'
    ]

    if(options[size]) {
        console.error("section - provided value", size, "doesn't exist");
    }
    return (
        <div className={`section ${size ? `section--"${options[size]}` : "section--base"}`}>
            {children}
        </div>
    )
}

export default Section;