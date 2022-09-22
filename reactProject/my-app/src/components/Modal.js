function Modal(props){
  function cancelHandler(){
    props.onCancel();
  }
  function confirmHandler(){
    props.onConfirm();
  }

  return (<div className='modal'>
    <p>Are you sure? </p>
    <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
    <button className='btn' onClick={confirmHandler}>Confirm</button>
  </div>);
  //Tambien podria haber hecho en el onClick={props.onCancel}/ onClick={props.onConfirm}
}
export default Modal;