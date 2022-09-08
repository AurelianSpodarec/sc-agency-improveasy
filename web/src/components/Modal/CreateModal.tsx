import * as ReactDOM from 'react-dom';

import ModalCreateProperty from './ModalCreateProperty/ModalCreateProperty';

import { useState } from 'react';
import useModal from './../../../src/context/useModal';


const doc = document.getElementById('root');

function CreateModal() {
    const modalContext = useModal()// @ts-ignore
    const modalData = modalContext.data;

    const modalOptions = {
        createProperty: <ModalCreateProperty config={modalData} />,
    }

    if(!doc) return <></>// @ts-ignore
    if(!modalContext.isOpen) return <></>
    return ReactDOM.createPortal( // @ts-ignore
        <aside role="dialog" className={`modal ${modalContext.isOpen ? 'is-open' : 'hidden'} `}>
            <div className="m-auto top-1/2 translateY-[-50%] modal__inner">
                {// @ts-ignore
                modalOptions[modalData.type]}
            </div>
        </aside>
    , doc)
}

export default CreateModal;