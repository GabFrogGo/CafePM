import '../../../components/appstyle/styles/bodydef.scss';

export default function Login() {
  return (
    <div class='register-space'>
      <div class='logo-space'>
        <img id='logo' src='../../../components/appstyle/assets/imgs/CafePM_Logo.png'></img>
      </div>
      <div class='inputs-space'>
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
      </div>
    </div> 
  );
}