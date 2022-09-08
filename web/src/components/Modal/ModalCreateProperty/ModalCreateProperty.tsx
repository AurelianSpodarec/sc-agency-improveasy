import { PageHeading } from '@components/ui';
import ModalInputList from '../components/ModalInputList';
import useModal from './../../../../src/context/useModal';

function ModalCreateProperty({ config }: any) {
    const modalContext = useModal(); //@ts-ignore
    const modalData = modalContext.data;

    function handleAction(e: any) {
        e.preventDefault(); //@ts-ignore
        onAction(modalContext.formState.values); //@ts-ignore
        modalContext.close();
    }

    function handleCancel(e: any) {
        e.preventDefault(); //@ts-ignore
        modalContext.close();
    }

    return (
        <div className="modal-createProperty rounded-primary">
            <div>
                <PageHeading title="Create Property" size="md" />
                <div onClick={handleCancel}>X</div>
            </div>

            <section>
                <ModalInputList data={modalData.inputs} />
            </section>

            <footer onClick={handleAction}>
                <button>Submit</button>
            </footer>
        </div>
    );
}

export default ModalCreateProperty;
