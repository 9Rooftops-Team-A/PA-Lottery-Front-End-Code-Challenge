import SideBarLinks from './SIDEBAR/index';
import PICK2 from './PICK2/index';

import './components.scss';

export default function Dashboard() {
  return (
    <div className='components-container'>
      <SideBarLinks/>
      <PICK2/>
    </div>
  );
}