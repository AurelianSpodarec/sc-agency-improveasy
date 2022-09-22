import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';

const PropertyCertificate = () => {
    return (
        <div className="flex-6">
            <ButtonRow>
                <ActionButton className="winged dark-green">Upload EPC Certificate</ActionButton>
                <ActionButton className="winged" source="positive">
                    Request Updated EPC
                </ActionButton>
                <ActionButton className="winged">Request Survey</ActionButton>
            </ButtonRow>
        </div>
    );
};

export default PropertyCertificate;
