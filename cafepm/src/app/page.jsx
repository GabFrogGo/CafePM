import '../components/appstyle/styles/bodydef.scss';
import GlobalButtons from '../components/buttons/globalbuttons.jsx';

export const metadata = {
  title: 'CafePM | Home',
}

export default function Base_Page_CPM() {
  return (
    <div>
      <Header_Page_CPM />
      <Body_Page_CPM />
      <GlobalButtons><style color='white'>Hola gente</style></GlobalButtons>
    </div>    
  );
}

function Header_Page_CPM() {
  return (
    <div className="header">
      <section>
        <a>About</a>
        <a>Help</a>
      </section>
    </div>
  );
}

function Body_Page_CPM() {
  return (
    <div className="body">
      <img></img>
    </div>
  );
}