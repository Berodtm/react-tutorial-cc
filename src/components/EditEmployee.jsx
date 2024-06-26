import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [pay, setPay] = useState(props.pay);
  const [img, setImg] = useState(props.img);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
      >
        Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              handleClose()
              e.preventDefault();
              console.log('Debugging: Hello from edit Employee');
              console.log('Debugging:', props.id, name, role, pay, img);
              props.updateEmployee(props.id, name, role, pay, img);
            }}
            id='editmodal'
            className='w-full max-w-sm'
          >
            {/* first */}
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  htmlFor='name'
                >
                  Name
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='name'
                  type='text'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* new */}
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  htmlFor='role'
                >
                  Role
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='role'
                  type='text'
                  defaultValue={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                
              </div>
            </div>
            {/* pay */}
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  htmlFor='pay'
                >
                  Pay
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='pay'
                  type='text'
                  defaultValue={pay}
                  onChange={(e) => {
                    setPay(e.target.value);
                  }}
                />
                
              </div>
            </div>
            {/* image */}
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  htmlFor='img'
                >
                  Image
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='img'
                  placeholder='http://example.com'
                  type='text'
                  defaultValue={img}
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            form='editmodal'
          >
            Update
          </button>
          <button
            className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;