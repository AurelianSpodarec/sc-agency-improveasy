import Title from 'lib/src/components/typography/Title';
import Form from 'lib/src/components/form/Form';
import useConfirmEmail from './hooks/useConfirmEmail';
import MainPublic from '@pages/public/_components/MainPublic';
import { Container, Section } from '@components/ui';

const ConfirmEmail: React.FC = () => {
    const { isPosting, error } = useConfirmEmail();

    return (
        <MainPublic>
            <Section>
                <Container>
                    <Title>Confirm Email</Title>

                    <Form onSubmit={() => {}} isPosting={isPosting} error={error} omitButtons>
                        {isPosting && <i className="fal fa-spinner fa-spin"></i>}
                    </Form>
                </Container>
            </Section>
        </MainPublic>
    );
};

export default ConfirmEmail;
