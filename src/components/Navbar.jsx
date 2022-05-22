import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'
import avatar0 from '../data/avatar.jpg'

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  return <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">Navbar</div>
}

export default Navbar
