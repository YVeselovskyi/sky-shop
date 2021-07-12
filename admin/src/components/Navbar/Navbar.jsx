/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
// eslint-disable-next-line import/no-cycle
import { Products } from '../Products/Products';
// eslint-disable-next-line import/no-cycle
import { Users } from '../Users/Users';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
let useStyles;

const Nav = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <Tabs
        orientation={props.tabsVariant}
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Products" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Users
          state={props.state}
          addUser={props.addUser}
          deleteUser={props.deleteUser}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Products
          state={props.state}
          addProduct={props.addProduct}
          removeProduct={props.removeProduct}
        />
      </TabPanel>
    </div>
  );
};

const Navbar = (props) => {
  let tabsVariant;
  return (
    <>
      <Media query="(max-width: 990px)">
        {(matches) => {
          tabsVariant = (matches ? ('horizontal') : ('vertical'));
          useStyles = (matches) ? makeStyles((theme) => ({
            root: {
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gridTemplateColumns: '1fr',
              backgroundColor: theme.palette.background.paper,
              height: 224,
            },
            tabs: {
              borderRight: `1px solid ${theme.palette.divider}`,
            },
          }))
            : makeStyles((theme) => ({
              root: {
                display: 'grid',
                gridTemplateRows: '1fr 1fr',
                gridTemplateColumns: '1fr 7fr',
                backgroundColor: theme.palette.background.paper,
                height: 224,
              },
              tabs: {
                borderRight: `1px solid ${theme.palette.divider}`,
              },
            }));
          return (
            <Nav
              state={props.state}
              addUser={props.addUser}
              deleteUser={props.deleteUser}
              addProduct={props.addProduct}
              removeProduct={props.removeProduct}
              tabsVariant={tabsVariant}
            />
          );
        }}
      </Media>
    </>
  );
};

export { Navbar };
