import { IoIosFolder, IoIosMenu } from 'react-icons/io';
import './style.scss';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li className="active"><IoIosMenu size={'2rem'}/></li>
        <li><IoIosFolder size={'1.8rem'}/></li>
        <li><IoIosFolder size={'1.8rem'}/></li>
        <li><IoIosFolder size={'1.8rem'}/></li>
        <li><IoIosFolder size={'1.8rem'}/></li>
      </ul>
    </aside>
  )
}

export default Sidebar;