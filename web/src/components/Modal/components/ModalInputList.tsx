import ModalInput from "./ModalInput";

function ModalInputList({data}:any) {
    if(data.length == 0) return <></>
    return data.map((input:any, index:number) => {
        return <ModalInput key={index} data={input} />
    })
}

export default ModalInputList;