import '../../../components/appstyle/styles/bodydef.scss';

function Register() {
  return (
    <div class='register-space'>
      <div class='logo-space'>
        <img id='logo' src='../../../components/appstyle/assets/imgs/CafePM_Logo.png'></img>
      </div>
      <div class='inputs-space'>
        <form>
          <span>
            <label for='usernm'>Username</label>
            <br></br>
            <input type='text' name='usernm' id='usernm'></input>
          </span>
          <br></br>
          <span>
            <label for='userem'>E-mail</label>
            <br></br>
            <input type='email' name='userem' id='userem'></input>
          </span>
          <br></br>
          <span>
              <label for='userpwd'>Master Password</label>
            <br></br>
            <input type='password' name='userpwd' id='userpwd'></input>
          </span>
          <br></br>
          <span>
            <label for='userpwd'>Enter again yor Master Password</label>
            <br></br>
            <input type='password' name='userpwdck' id='userpwdck'></input>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;