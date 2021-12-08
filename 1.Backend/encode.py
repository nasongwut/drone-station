import base64,struct
import cmd_guild

def encode_sta(msg):
    payload = struct.pack('iiiii',msg['src'],msg['dst'],msg['seq'],cmd_guild.cmdcode(msg['cmd']),msg['uav_type'] )
    packet = base64.standard_b64encode(payload)
    


    # struct.pack('BBBBB',values[0],values[1],values[2],values[3],values[4])
    # packet = base64.b64decode(payload)
    # unpack_st = struct.unpack('iiiiiiiiiii',packet)
    # json_web = {"src":unpack_st[0],
    #             "dst":unpack_st[1],
    #             "seq":unpack_st[2],
    #             "cmd":unpack_st[3],
    #             "sta":unpack_st[4],
    #             "motor_x":unpack_st[5],
    #             "motor_y":unpack_st[6],
    #             "sta_volt":unpack_st[7],
    #             "sta_amp":unpack_st[8],
    #             "uav_volt":unpack_st[9],
    #             "uav_amp":unpack_st[10]}
    return packet