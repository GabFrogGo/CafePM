import '../../../components/appstyle/styles/bodydef.scss';

export default function Login() {
  return (
    <div className='register-space'>
      <div className='logo-space'>
        <img id='logo' src='../../../components/appstyle/assets/imgs/CafePM_Logo.png'></img>
      </div>
      <div className='inputs-space'>
        <span>
          <label htmlFor='usernm'>Username</label>
          <br></br>
          <input type='text' name='usernm' id='usernm'></input>
        </span>
        <br></br>
        <span>
          <label htmlFor='userem'>E-mail</label>
          <br></br>
          <input type='email' name='userem' id='userem'></input>
        </span>
        <br></br>
        <span>
            <label htmlFor='userpwd'>Master Password</label>
          <br></br>
          <input type='password' name='userpwd' id='userpwd'></input>
        </span>
      </div>
    </div> 
  );
}