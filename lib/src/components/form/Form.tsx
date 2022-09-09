import { useDispatch, useSelector } from 'react-redux';

import { clearFormError, showFieldErrors } from '../../redux/actions/fieldErrors';
import { getFieldErrors, getFormError } from '../../redux/selectors/fieldErrors';
import ActionButton from '../button/ActionButton';
import ButtonRow from '../button/ButtonRow';
import { isEmpty } from '../../utils/generic';

const Form: React.FC<FormProps> = ({
    children,
    onSubmit,
    onCancel = () => {},
    omitButtons = false,
    isPosting = false,
    error,
}) => {
    const dispatch = useDispatch();
    const fieldErrors = useSelector(getFieldErrors);
    const formError = useSelector(getFormError);

    return (
        <form onSubmit={_handleSubmit}>
            {children}
            {!!formError && <p className="form-generic-error">{formError}</p>}
            {!!error && <p className="form-generic-error">{error}</p>}
            {!omitButtons && (
                <ButtonRow alignment="right">
                    <ActionButton
                        source='secondary'
                        type="button"
                        onClick={_handleCancel}
                        disabled={isPosting}
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton isPosting={isPosting}>Submit</ActionButton>
                </ButtonRow>
            )}
        </form>
    );

    function _handleCancel(e: React.MouseEvent) {
        e.preventDefault();

        if (!isPosting) onCancel();
    }

    function _handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!isEmpty(fieldErrors)) {
            dispatch(showFieldErrors());
        } else if (!isPosting) {
            dispatch(clearFormError());
            onSubmit();
        }
    }
};

interface FormProps {
    children?: React.ReactNode;
    isPosting?: boolean;
    omitButtons?: boolean;
    onSubmit: () => void;
    onCancel?: () => void;
    error?: string | undefined | null;
}

export default Form;
