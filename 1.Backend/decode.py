import base64,struct

def decode_sta(payload):
    # print(len(payload))
    packet = base64.b64decode(payload['bin'])
    # print(packet.de)
    unpack_st = struct.unpack('iiiiiiiiiii',packet)
    json_web = {"src":unpack_st[0],
                "dst":unpack_st[1],
                "seq":unpack_st[2],
                "cmd":unpack_st[3],
                "sta":unpack_st[4],
                "motor_x":unpack_st[5],
                "motor_y":unpack_st[6],
                "sta_volt":unpack_st[7],
                "sta_amp":unpack_st[8],
                "uav_volt":unpack_st[9],
                "uav_amp":unpack_st[10]}
    return json_web