import '../../../components/appstyle/styles/bodydef.scss';

function Register() {
  return (
    <div className='register-space'>
      <div className='logo-space'>
        <img id='logo' src='../../../components/appstyle/assets/imgs/CafePM_Logo.png'></img>
      </div>
      <div className='inputs-space'>
        <form>
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
          <br></br>
          <span>
            <label htmlFor='userpwd'>Enter again yor Master Password</label>
            <br></br>
            <input type='password' name='userpwdck' id='userpwdck'></input>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;