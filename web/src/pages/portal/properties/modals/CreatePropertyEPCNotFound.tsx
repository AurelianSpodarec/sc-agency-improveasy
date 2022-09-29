import { ModalContent } from '../../../../types/shared/Properties';
import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';

const CreatePropertyEPCNotFound = ({
    addressString,
    setModalContent,
    closeModal,
    handleContinueAnyway,
}: IProps) => {
    return (
        <section className="flex-column align-center space-x-4">
            <h2 className="heading">Unable to locate EPC for {addressString}</h2>

            <div className="flex-column align-center text-center semi-bold-content">
                <br />
                Unfortunately, we were unable to locate your property’s EPC rating.
                <br />
                <br />
                This may be due to:
                <div className="list-wrapper">
                    <ol>
                        <li> Incorrect address information</li>
                        <li> An EPC has been done in the last 3 months</li>
                        <li> The property does not have an EPC</li>
                    </ol>
                </div>
            </div>

            <ButtonRow>
                <ActionButton className="winged" onClick={() => setModalContent(ModalContent.Form)}>
                    Edit Address
                </ActionButton>
                <ActionButton className="winged" source="secondary" onClick={() => closeModal()}>
                    Cancel
                </ActionButton>
                <ActionButton className="winged" source="positive" onClick={handleContinueAnyway}>
                    Continue Anyway
                </ActionButton>
            </ButtonRow>
        </section>
    );
};

interface IProps {
    addressString: string;
    setModalContent: (content: number) => void;
    closeModal: () => void;
    handleContinueAnyway: () => void;
}

export default CreatePropertyEPCNotFound;
