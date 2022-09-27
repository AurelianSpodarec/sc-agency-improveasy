import Rating from '@components/epc/Rating';
import EPCRatingWrapper from '@components/epc/EPCRatingWrapper';
import { EPCRatings } from 'src/types/shared/Properties';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import ActionButton from 'lib/src/components/button/ActionButton';

const CreatePropertyEPCSuccess = ({ potentialEPC, currentEPC, closeModal }: IProps) => {
    return (
        <section className="flex-column align-center space-x-4">
            <h2 className="heading">EPC Check Complete</h2>

            <div style={{ width: '50%', margin: '25px 0' }} className="epc-graph">
                <EPCRatingWrapper className="potential-wrapper">
                    <Rating rating={potentialEPC} text="Potential" />
                    <Rating rating={currentEPC} text="Current" />
                </EPCRatingWrapper>
            </div>

            <p className="flex-column align-center text-center semi-bold-content">
                Your EPC certificate has been located.
                <br />
                You may now view your property
            </p>

            <ButtonRow>
                <ActionButton className="winged" onClick={() => closeModal()}>
                    Close
                </ActionButton>
            </ButtonRow>
        </section>
    );
};

interface IProps {
    potentialEPC: EPCRatings;
    currentEPC: EPCRatings;
    closeModal: () => void;
}

export default CreatePropertyEPCSuccess;
