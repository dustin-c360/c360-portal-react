import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import StorageIcon from '@material-ui/icons/Storage';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {NavLink} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

const aboutC360Link = "https://wiki.grab.com/pages/viewpage.action?spaceKey=BDP&title=Customer+360";
// eslint-disable-next-line
const slaStandardsLink = "https://wiki.grab.com/display/BDP/00.01.+SLA+Standards";
// eslint-disable-next-line
const crowdsourceLink = "https://wiki.grab.com/pages/viewpage.action?pageId=295123781";

const styleObj = {
  color: "#000000",
  textDecoration: "none"

}

export const homeListItem = (
  <div>
    <NavLink exact to='/' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      </NavLink>
  </div>
);

export const getStartedListItems = (
  <div>
    <NavLink to='/discover' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Discover Attributes" />
      </ListItem>
    </NavLink>
    <NavLink to='/datastore' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Access Datastore" />
      </ListItem>
    </NavLink>      
    <NavLink to='/api' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Access APIs" />
      </ListItem>
    </NavLink>
  </div>
);

export const learnMoreListItems = (
  <div>
    <NavLink to='/about' style={styleObj}>
      <ListItem button component='a' href={aboutC360Link} target='_blank'>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About C360" />
      </ListItem>
    </NavLink>
    <NavLink to='/sla' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Our SLA Standards" />
      </ListItem>
    </NavLink>
    <NavLink to='/crowdsource' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Crowdsource Guide" />
      </ListItem>
    </NavLink>
    <NavLink to='/releases' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <Badge color="secondary" variant="dot">
            <NewReleasesIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Release Log" />
      </ListItem>
    </NavLink>
</div>
);

export const poweredByC360ListItems = (
  <div>
    <NavLink to='/integrations' style={styleObj}>
      <ListItem button>
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="Powered by C360" />
      </ListItem>
    </NavLink>
  </div>
);