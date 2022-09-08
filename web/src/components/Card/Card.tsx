import { Text } from "@components/ui"

function Card() {

    const theme = {
        'primary': 'green',
        'secondary': 'orange',
        'yellow': 'yellow'
    }

    return (
        <div className="rounded-primary">

            <Text type="span" title="Jack Smith" />
            <img src="" />
        </div>
    )
}

export default Card;