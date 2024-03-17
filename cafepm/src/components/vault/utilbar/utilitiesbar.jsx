//Style
import './st-ub.scss';
//Complements
import UtilBar_User_pfp from './user-port/ub-pfp.jsx';

function VaultUtilBar() {
    return (
        <div class="pa-utils">
            <div class="utils-displayer">
                <div class="left-ud">
                    <div class="left-ud-cont">
                        <div id="pm-actions">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="auto" height="46" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mid-ud">
                    <div class="mid-ud-cont">
                        <div class="mid-ud-sb">
                            <input type="search" placeholder="Search in:"></input>
                        </div>
                        <div class="mid-ud-pa">
                            <div id="pa-1" class="pinned-action">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
                            </div>
                            <div id="pa-2" class="pinned-action">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
                            </div>
                            <div id="pa-3" class="pinned-action">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
                            </div>
                            <div id="pa-4" class="pinned-action">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-ud">
                    <div class="right-ud-cont">
                        <UtilBar_User_pfp></UtilBar_User_pfp>
                    </div>
                </div>
            </div>
        </div>   
    );
}
  
export default VaultUtilBar;