import React, { useState, useEffect, useRef, state } from "react";

import Select from "react-select";

const Station = (prop) => {
  const [isPaused, setPause] = useState(false);
  const [staData, setsta] = useState("no data");

  let options = { one: "One option", two: "Another option" };
  let [value, setValue] = React.useState(options.one);
  function changetypeUAV(value){
    console.log(value)

  }

  const ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8000/ws/monitor");
    // ws.current = new WebSocket("ws://127.0.0.1:4000");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    return () => {
      ws.current.close();
    };
  }, []);
  function sendOpenCover() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_COVER_OPEN",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendCloseCover() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_COVER_CLOSE",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendCharge() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_UAV_CHARGE",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendUnCharge() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_UAV_UNCHARGE",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendInitUav() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_UAV_INIT",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendUavoff() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_UAV_UNINIT",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendClampClose() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_CLAMP_CLOSE",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function sendClampOpen() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_CLAMP_OPEN",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }
  function ChangeUAVtype() {
    const msg = JSON.stringify({
      type: "remote",
      src: 101,
      dst: 100,
      seq: 3,
      cmd: "STA_CLAMP_OPEN",
      uav_type: 1,
    });
    ws.current.send(msg);
    console.log(msg);
  }

  // console.log(staData);

  // Websocket Check Connection
  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      if (isPaused) return;
      setsta(JSON.parse(e.data));
    };
  }, [isPaused]);
  // console.log(staData);

  return (
    <div className="h-screen w-screen bg-red-100   flex-auto text-4xl text-white ">
      <div className="bg-blue-800  text-center p-10">
        <div>Station {staData.src}Controller</div>
      </div>
      <div className="bg-blue-500 h-4/8 text-center">
        <div className="text-xl font-bold">
          ----STATUS : {staData.sta} ---- MORTOR X : {staData.motor_x}----
          MORTOR Y : {staData.motor_y}---- STATION VOLT : {staData.sta}----
          STATION AMP : {staData.sta_amp}---- UAV VOLT : {staData.uav_volt}----
          UAV AMP : {staData.uav_amp}----
        </div>
      </div>

      <div class="grid justify-items-center p-10">
        <div className="text-xl space-x-5 py-2">
          <button
            class="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96"
            onClick={sendOpenCover}
          >
            OPEN Cover
          </button>
          <button
            class="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96"
            onClick={sendCloseCover}
          >
            CLOSE Cover
          </button>
        </div>

        <div className="text-xl space-x-5">
          <button
            class="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96"
            onClick={sendCharge}
          >
            Charger
          </button>

          <button
            class="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96"
            onClick={sendUnCharge}
          >
            Uncharger
          </button>
        </div>
        <div className="px-10 py-10 space-x-5">
          <select class="appearance-none text-black" value="value">
            <option value="1" >Tarot S500</option>
            <option value="2" >Tarot S650 Sport</option>
            <option value="3" >Tarot X8</option>
          </select>
          <button
            class="bg-blue-500 hover:bg-red-700 text-white  py-5 px-20 "
            onClick={sendClampClose}
          >
            Lock
          </button>

          <button
            class="bg-blue-500 hover:bg-red-700 text-white  py-5 px-20 "
            onClick={sendClampOpen}
          >
            Unlock
          </button>
        </div>
        <div className="text-xl space-x-5">
          <button
            class="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96"
            onClick={sendInitUav}
          >
            Initialize UAV
          </button>

          <button
            class="bg-gray-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96"
            onClick={sendUavoff}
          >
            Turn off UAV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Station;
