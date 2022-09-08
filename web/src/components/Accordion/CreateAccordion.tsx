import { Text } from "@components/ui";

function CreateAccordion() {
    return (
        <details className="accordion">
            <div className="accordion__heading flex">
                <button>What is MMES?</button>
                <div>X</div>
            </div>

            <summary className="accordion__summary">
                 </summary>
        </details>
    )
}

export default CreateAccordion;