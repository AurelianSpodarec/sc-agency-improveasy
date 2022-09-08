import { Text } from '@components/ui';

function CreateAccordion() {
    return (
        <details className="accordion">
            <div className="accordion__heading flex">
                <button>What is MMES?</button>
                <div>X</div>
            </div>

            <summary className="accordion__summary">
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                </Text>
                <Text>
                    Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </summary>
        </details>
    );
}

export default CreateAccordion;
