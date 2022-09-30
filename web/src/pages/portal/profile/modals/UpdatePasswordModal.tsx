import useForm from 'lib/src/hooks/useForm';

import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import {
    selectPatchPasswordError,
    selectPatchPasswordIsPatching,
    selectPatchPasswordSuccess,
} from '@selectors/account';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '@actions/account/updatePassword';
import { useCallback, useEffect } from 'react';
import { PageHeading } from '@components/ui';
import ModalHeader from '@pages/portal/modals/ModalHeader';
import usePrevious from 'lib/src/hooks/usePrevious';

const UpdatePasswordModal = ({ closeModal }: IProps) => {
    const dispatch = useDispatch();

    const [form, handleChange] = useForm({ newPassword: '', confirmPassword: '', oldPassword: '' });

    const isPatching = useSelector(selectPatchPasswordIsPatching);
    const patchSuccess = useSelector(selectPatchPasswordSuccess);
    const prevPatchSuccess = usePrevious(patchSuccess);
    const patchError = useSelector(selectPatchPasswordError);

    const isSubmitDisabled = !form.newPassword || !form.confirmPassword || !form.oldPassword;

    const handleSubmit = () => {
        const { newPassword, oldPassword } = form;

        dispatch(updatePassword({ newPassword, oldPassword }));
    };

    const customValidate = useCallback(
        (value: string) => {
            if (value && value !== form.newPassword) {
                return 'Passwords do not match';
            }
        },
        [form.newPassword],
    );

    useEffect(() => {
        if (prevPatchSuccess && !patchSuccess) {
            closeModal();
        }
    }, [patchSuccess, prevPatchSuccess, closeModal]);

    return (
        <Modal>
            <ModalHeader text="Change Password" closeModal={closeModal} />

            <Form
                onSubmit={handleSubmit}
                buttonClassName="winged"
                onCancel={closeModal}
                submitDisabled={isSubmitDisabled}
                isPosting={isPatching}
                error={patchError}
                postSuccess={patchSuccess}
            >
                <TextInput
                    name="oldPassword"
                    value={form.oldPassword}
                    placeholder="Old Password"
                    onChange={handleChange}
                    className="winged font-sm"
                    type="password"
                />
                <TextInput
                    name="newPassword"
                    value={form.newPassword}
                    placeholder="New Password"
                    onChange={handleChange}
                    className="winged font-sm"
                    type="password"
                />
                <TextInput
                    name="confirmPassword"
                    value={form.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="winged font-sm"
                    type="password"
                    customValidate={customValidate}
                />
            </Form>
        </Modal>
    );
};

interface IProps {
    closeModal: () => void;
}

export default UpdatePasswordModal;
