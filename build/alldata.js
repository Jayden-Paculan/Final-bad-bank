function AllData() {
  const [data, setData] = React.useState('');
  const [body, setBody] = React.useState([]);
  React.useEffect(() => {

    // fetch all accounts from API
    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBody(getBodyInfo(data));
        setData(JSON.stringify(data));
      });

  }, []);
  function getBodyInfo(data) {
    return data.map((user, i) => {
      return [<tr key={i}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>];
    });
  }

  return (<>
    <h5>All Data in Store:</h5>
    <AllDataCard
      bgcolor="primary"
      header="All Data Stored"
      body={
        <div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {body}
            </tbody>
          </table>
        </div>
      }
    />
  </>);
}
