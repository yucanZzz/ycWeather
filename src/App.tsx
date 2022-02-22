import React from "react";
import "./App.less";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./redux/store";
import {Typography,Box,Tab,Tabs} from '@mui/material';
import { REQUEST_WEATHER } from "./redux/action/action";
import WeatherInfo from "./components/WeatherInfo";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = React.useState<string>("ottawa");
  const [value, setValue] = React.useState(0);
  const weather = useSelector((state: RootStore) => state.weather.weatherData);

  React.useEffect(() => {
    dispatch({ type: REQUEST_WEATHER, city });
    setCity(city);
  },[city]);  //eslint-disable-line

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    const cityName = newValue===2?"tokyo":newValue===1?"moscow":"ottawa"
    setCity(cityName);
    setValue(newValue);
  };
  
  return (
    <div className="App">
        <Box sx={{ width: '100%'}}>
          <Box sx={{ margin:"0 auto",width:"600px"}}>
            <Tabs value={value} onChange={handleTabChange} variant="fullWidth" aria-label="Temperature tabs">
              <Tab label="OTTAWA" {...a11yProps(0)} />
              <Tab label="MOSCOW" {...a11yProps(1)} />
              <Tab label="TOKYO" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={value}>
            <WeatherInfo data={weather}>
            </WeatherInfo>
          </TabPanel>
        </Box>
    </div>
  );
};

export default App;