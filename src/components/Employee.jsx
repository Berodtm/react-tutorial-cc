function Employee(props) {
  return (
    <div className="flex flex-col border border-gray-500 p-1.25 m-1.25 rounded min-w-[300px] bg-blue-300 gap-4">
      <h3>Employee: {props.name ? props.name : 'Guest'}</h3>
      <p>Role: {props.role ? props.role : 'New Employee'}</p>
      <p>Pay: {props.pay ? props.pay : '£10,000.00'}</p>
    </div>
  );
}

export default Employee;
