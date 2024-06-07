function Employee(props) {
  return (
    <div className='m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>

      <img
        className='object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
        src={props.img ? props.img : 'https://www.pinpng.com/pngs/m/80-805308_placeholder-person-hd-png-download.png'}
        alt={'name:' + props.name}
      />
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>{props.name ? props.name : 'Guest'}</p>
          <p className='text-slate-500 font-medium'>{props.role ? props.role : 'New Employee'}</p>
          <p className='text-slate-500 font-medium'>{props.pay ? props.pay : '£10,000.00'}</p>
        </div>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          Update
        </button>
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
