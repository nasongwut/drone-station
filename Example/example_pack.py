import websocket,serial,base64,struct,time,json
import _thread,base64

# data = {"type": "Station", "bin": "ZAAAAAAAAAAAAAAAAAAAAHkAAAAAAAAAAAAAAAAAAAAAAAAAdAkAAIA+AAA="}

# payload = data['bin']
# packet = base64.b64decode(payload)
# unpack_st = struct.unpack('iiiiiiiiiii',packet)
# print(unpack_st)
# print(type(unpack_st))

values = bytearray([255, 2, 3, 4, 5])
packet = base64.encodebytes(values)
unpack_st = struct.pack('BBBBB',values[0],values[1],values[2],values[3],values[4])
packet = base64.standard_b64encode(unpack_st)

print(packet)

