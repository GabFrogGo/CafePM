//Style
import './st-ub-pfp.scss';
import user_def_pfp from '../../../../../public/ups/native/cafepmboceto_white.svg'
//Function
import Script from 'next/script';
import Image from 'next/image';

function UtilBar_User_pfp() {
    return (
        <>
            <div class="image-standards pfp-content" id="user-pfp">
                <input id="input-pfp" type="file" accept="image/jpeg, image/png, image/jpg" placeholder="Custom your pfp"></input>
                <label class="edit-pfp" for="input-pfp">
                    <Image id="user-pfp-img" src={user_def_pfp} width={100} height={100}></Image>
                </label>
            </div>
            
            <Script src='./pfpfunct.js'/>
        </>
    );
}

export default UtilBar_User_pfp;