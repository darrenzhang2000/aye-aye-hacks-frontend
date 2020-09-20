import React from "react";
import { styled } from "@material-ui/core/styles";

import Controls from "./components/Controls/Controls";
import LocalVideoPreview from "./components/LocalVideoPreview/LocalVideoPreview";
import MenuBar from "./components/MenuBar/MenuBar";
import ReconnectingNotification from "./components/ReconnectingNotification/ReconnectingNotification";
import Room from "./components/Room/Room";

import useHeight from "./hooks/useHeight/useHeight";
import useRoomState from "./hooks/useRoomState/useRoomState";

const Container = styled("div")({
  display: "grid",
  gridTemplateRows: "auto 1fr"
});

const Main = styled("main")({
  overflow: "hidden"
});

export default function App() {
  const displayVid = false;
  const roomState = useRoomState();

  // Here we would like the height of the main container to be the height of the viewport.
  // On some mobile browsers, 'height: 100vh' sets the height equal to that of the screen,
  // not the viewport. This looks bad when the mobile browsers location bar is open.
  // We will dynamically set the height with 'window.innerHeight', which means that this
  // will look good on mobile browsers even after the location bar opens or closes.
  const height = useHeight();

  const videos = {
    1: "8V6IBmD1qeI",
    2: "rxEMKXW2Wqs",
    3: "kzAi0fnElCA",
    4: "E3ODVGAjePg",
    5: "WJm9zA2NY8E",
    6: "qfoW2PKugyk",
    7: "RjexvOAsVtI",
    8: "6jHsraw2NIk",
    9: "vPhg6sc1Mk4"
  };

  const setVideo = (videoId: any) => {
    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    );
  };

  return (
    <Container style={{ height }}>
      <MenuBar />
      <Main>
        {roomState === "disconnected" ? (
          <LocalVideoPreview />
        ) : (
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/${videoId}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <Room />
          </div>
        )}

        <Controls />
      </Main>
      <ReconnectingNotification />
    </Container>
  );
}
