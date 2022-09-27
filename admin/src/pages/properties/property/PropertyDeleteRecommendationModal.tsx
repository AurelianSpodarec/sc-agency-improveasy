import React from 'react';
import ConfirmModal from 'lib/src/components/modal/ConfirmModal';
import useDeletePropertyRecommendation from './hooks/useDeletePropertyRecommendation';

const PropertyDeleteRecommendationModal = () => {
    const { recommendation, handleSubmit, closeModal, isPosting, error } =
        useDeletePropertyRecommendation();

    if (!recommendation) return <></>;
    return (
        <ConfirmModal
            isPosting={isPosting}
            title="Delete recommendation"
            description="Are you sure you want to delete this recommendation?"
            handleSubmit={handleSubmit}
            closeModal={closeModal}
            error={error}
        />
    );
};

export default PropertyDeleteRecommendationModal;
