function Employee(props) {
  return (
    <>
      <h3>Employee: {props.name ? props.name : 'Guest'}</h3>
      <p>Role: {props.role ? props.role : 'New Employee'}</p>
      <p>Pay: {props.pay ? props.pay : '£10,000.00'}</p>
    </>
  );
}

export default Employee;
