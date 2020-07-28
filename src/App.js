import React from "react";
import {
  Box,
  Text,
  ThemeProvider,
  Grid,
  Checkbox,
  CheckboxGroup,
  Textarea,
  Collapse,
  Heading
} from "@chakra-ui/core";
import Mysearchbar from "./components/Mysearchbar";
import { Player, ControlBar, ReplayControl } from 'video-react';
import drivevideo from "./media/drivevideo.mp4";
import "video-react/dist/video-react.css";
import Eventtimeline from "./components/Eventtimeline";
import Linechart from "./components/Linechart";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Mymap from "./components/Mymap";
import 'leaflet/dist/leaflet.css';
import './App.css';
import Transcript from "./components/Transcript";

function App() {
  const position = [51.505, -0.09]
  return (
    <ThemeProvider>
      <div>
        <Heading>
          Participate: XXX  Recorder: XXX
      </Heading>
      <Transcript/>
        <Mysearchbar />
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Collapse startingHeight={20}>
            Hard break at this moment and speak negative.
        </Collapse>
          <Box w="100%">
            <Player
              playsInline
              poster="/assets/poster.png"
              src={drivevideo}>
              <ControlBar autoHide={false}>
                <ReplayControl seconds={5} order={2.1} />
                <ReplayControl seconds={10} order={2.2} />
                <ReplayControl seconds={30} order={2.3} />
              </ControlBar>
            </Player>
          </Box>
          <Textarea placeholder="Trancripts" />
        </Grid>
        <CheckboxGroup variantColor="green" defaultValue={["naruto", "kakashi"]}>
          <Checkbox value="naruto"> more than 5 Bicycles</Checkbox>
          <Checkbox value="sasuke"> less than 5 Bicycles</Checkbox>
          <Checkbox value="kakashi"> more than 5 Cars</Checkbox>
          <Checkbox value="sasuke"> less than 5 Cars</Checkbox>
          <Checkbox value="kakashi"> more than 5 Trucks</Checkbox>
          <Checkbox value="sasuke"> less than 5 Trucks</Checkbox>
        </CheckboxGroup>
      </div>
      <Textarea placeholder="My Notes" />
      <Grid templateColumns="1.5fr 1fr" gap={2}>
        <Box w="100%" h="100px" bg="blue.500">
          <Eventtimeline />
        </Box>
        <Box w="100%">
          <Linechart />
        </Box>
      </Grid>
      <Mymap/>
    </ThemeProvider>
  );
}

export default App;
