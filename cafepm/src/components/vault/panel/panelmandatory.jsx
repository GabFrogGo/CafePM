//Page
import './panelmand-st.scss';
//Components
import WidgetRenders from './panel-set/widgetrender.jsx'
import VaultUtilBar from '../utilbar/utilitiesbar.jsx';
import PMain from './panel-set/panelmain.jsx';
import PElements from './panel-set/panelements.jsx';
import PInfo from './panel-set/panelinfo.jsx';
import { ACContextProvider } from '@/src/context/AddCancelElementContext.jsx';
import { SNEContextProvider } from '@/src/context/SaveNewElementContext.jsx';
import { PopupContextProvider } from '@/src/context/InvokePopupsContext.jsx';

function PMandatory() {

  return (
    <>
      <PopupContextProvider>

        <WidgetRenders></WidgetRenders>
        
        <div className='panel-utilities'>

          <VaultUtilBar></VaultUtilBar>

        </div>

        <div className='panel-container'>
          
          <PMain></PMain>

          <ACContextProvider>

            <PElements></PElements>

            <SNEContextProvider>

              <PInfo></PInfo>

            </SNEContextProvider>

          </ACContextProvider>

        </div>

      </PopupContextProvider>
    </>
  );
}

export default PMandatory;