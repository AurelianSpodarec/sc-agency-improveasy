import useModal from './../../../../src/context/useModal';

function ModalInput({ data }: any) {
    const modalContext = useModal();

    return (
        <input
            name={data.name} //@ts-ignore
            onChange={e => modalContext.onValueChange(e)}
            className={data.col}
            placeholder={data.placeholder}
            type={data.type}
        />
    );
}

export default ModalInput;
