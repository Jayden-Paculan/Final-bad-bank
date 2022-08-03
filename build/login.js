// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    
//   const firebaseConfig = {
//   apiKey: "AIzaSyBdIUNvShoDikpsle9H9cQseZcIbE1oXUM",
//   authDomain: "jaydenp-fullstackbanking-c8373.firebaseapp.com",
//   projectId: "jaydenp-fullstackbanking-c8373",
//   storageBucket: "jaydenp-fullstackbanking-c8373.appspot.com",
//   messagingSenderId: "697713472335",
//   appId: "1:697713472335:web:0be3b98a5e620e9184cb3a",
//   measurementId: "G-ZPN3V0B5XD"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            const displayName = document.getElementById("name");
            displayName.innerText = `Welcome ${data.name}`;

            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}