import ActionButton from 'lib/src/components/button/ActionButton';

const PropertyCertificate = () => {
    return (
        <div className="flex-6">
            <p className="font-semibold">
                In order to accurately assess the current energy efficiency of your property and
                continue on your journey and book a survey
            </p>
            <ActionButton className="winged">Request Survey</ActionButton>
        </div>
    );
};

export default PropertyCertificate;
