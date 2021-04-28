import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SidebarOption from './SidebarOption';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontsize="large"/>}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
    </div>
  );
}

export default Sidebar;
