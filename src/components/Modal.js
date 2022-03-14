import React from 'react'
import Modal from 'react-modal';

const ModalComponent = (props) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          width: '70%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      };
    const afterOpenModal=(e)=> {
        props.onAfterOpen(e, 'After Modal Opened');
    }
    
    const onModalClose=(event)=> {
        let data = { name: 'example', type: 'closed from child' };
        props.onCloseModal(event, data);
    }
  return (
    <div>
         <Modal
            isOpen={props.IsModalOpened}
            onAfterOpen={e => afterOpenModal(e)}
            style={customStyles}
            ariaHideApp={false}
        >
            <h2>{props.dynData.title}</h2>
            <button onClick={e => onModalClose(e)}>close</button>
            <div>
            <ul>
                {/* {props.dynData.body.product.name} */}
                hello
            </ul>
            </div>
        </Modal>
    </div>
  )
}

export default ModalComponent