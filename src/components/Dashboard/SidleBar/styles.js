const drawerWidth = 240;


const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    zIndex: 99,
    minHeight: '100vh',
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuLink:{
    textDecoration:"none",
    color: "black"
  },
  menuLinkActive:{
    '&>div': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  }
  });
  
  export default styles;
  