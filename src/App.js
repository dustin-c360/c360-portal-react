import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { homeListItem, getStartedListItems, learnMoreListItems, poweredByC360ListItems } from './common/Navigation';
import {
  Route,
  HashRouter
} from "react-router-dom";
import HomePage from './pages/home/Home.js';
import DiscoverPage from './pages/Discover.js';
import DatastorePage from './pages/Datastore.js';
import APIPage from './pages/API.js';
import AboutPage from './pages/About.js';
import SLAPage from './pages/SLA.js';
import CrowdsourcePage from './pages/Crowdsource.js';
import ReleasesPage from './pages/Releases.js';
import SegmentExplorerPage from './pages/integrations/Integrations.js';
import './index.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Infosec review is complete. C360 data does not contain any PII, but access to this information must still be protected. Compliance with the policy '}
      <Link color="inherit" href="https://docs.google.com/document/d/13YhuchO4rqIz51g1kM_uwveNvNOX94-Mdx15rfGYYTY/edit?usp=sharing" target='_blank'>
        <b>here</b>
      </Link>
      {' must be strictly enforced.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Customer360 Portal
          </Typography>
          <IconButton color="inherit" href="https://grab.slack.com/archives/CQQQ9JF43" target='_blank'>
              <ContactSupportIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <HashRouter> {/* Need to surround nav links and main content container with HashRouter for routing to work */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>{homeListItem}</List>
          <Divider />
          <List>{getStartedListItems}</List>
          <Divider />
          <List>{learnMoreListItems}</List>
          <Divider />
          <List>{poweredByC360ListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/discover" component={DiscoverPage}/>
            <Route path="/datastore" component={DatastorePage}/>
            <Route path="/api" component={APIPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/sla" component={SLAPage}/>
            <Route path="/crowdsource" component={CrowdsourcePage}/>
            <Route path="/releases" component={ReleasesPage}/>
            <Route path="/integrations" component={SegmentExplorerPage}/>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </HashRouter>
    </div>
  );
};