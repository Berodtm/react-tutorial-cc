import EditEmployee from './EditEmployee';

function Employee(props) {
  return (
    <div className=' min-w-[350px] max-w-[350px] m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <img
        className='object-cover h-[100px] w-[100px] block mx-auto rounded-full sm:mx-0 sm:shrink-0'
        src={
          props.img
            ? props.img
            : 'https://www.pinpng.com/pngs/m/80-805308_placeholder-person-hd-png-download.png'
        }
        alt={'name:' + props.name}
      />
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>
            {props.name ? props.name : 'Guest'}
          </p>
          <p className='text-slate-500 font-medium'>
            {props.role ? props.role : 'New Employee'}
          </p>
          <p className='text-slate-500 font-medium'>
            {props.pay ? props.pay : '£10,000.00'}
          </p>
        </div>
        <EditEmployee
          id={props.id}
          name={props.name}
          role={props.role}
          pay={props.pay}
          updateEmployee={props.updateEmployee}
        />
      </div>
    </div>
  );
}

export default Employee;
// {
//   /* <h3>Employee: {props.name ? props.name : 'Guest'}</h3>
// <p>Role: {props.role ? props.role : 'New Employee'}</p>
// <p>Pay: {props.pay ? props.pay : '£10,000.00'}</p> */
// }
