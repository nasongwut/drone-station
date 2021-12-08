import json
import asyncio
import struct
import websockets
from websockets.exceptions import ConnectionClosed

import random
from time import sleep

# data_from_uav = {"type": "uav", "bin": "ZAAAAEgAAAAAAAAAAAAAAIIDAQD+/wEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="}
station_data = {"type": "Station", "bin": "ZAAAAAAAAAAAAAAYAAwAGQCAPi4="}

async def connect(uri):
    async with websockets.connect(uri) as websocket:
        print("Connected..")
        while True:          
            msg = json.dumps(station_data)
            await websocket.send(msg)


            strpack = station_data['bin'].encode()
            byte_array = bytearray(strpack)
            remove_b = byte_array.decode("utf-8")
            # convertb =bytearray(remove_b)



            print(strpack)
            print(type(strpack))
            print(len(strpack))
            # a = struct.unpack('HHBBBHHHHHH',byte_array)
            # # print(byte_array)
            # # print(len(byte_array))
            # # print(type(byte_array))
            # print(byte_array)
            # size = struct.calcsize('HHBBBHHHHHH')
            # print(size)
            
            # ws_sub = await websocket.recv()
            # print(ws_sub)
            # sleep(0.2)
            await asyncio.sleep(0.05)
            # action = json.loads(message)
            # print(action)
# async def command():


async def main():
    uri = "ws://localhost:8000/ws/station_sim"
    while True:
        try:
            await connect(uri)
        except ConnectionClosed:
            await asyncio.sleep(2)
            print("Not able to connect.. Retying in 3 seconds")
            await connect(uri)

asyncio.get_event_loop().run_until_complete(main())

