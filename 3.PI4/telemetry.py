import serial,time,argparse

parser = argparse.ArgumentParser()
parser.add_argument('--action')
parser.add_argument('--port')
opt = parser.parse_args()

msg = opt.action
TELEMETRY_PORT = opt.port

SERIAL_PORT_UAV = serial.Serial(
    port=TELEMETRY_PORT,
    baudrate=57600,
    bytesize=serial.EIGHTBITS,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    timeout=0.1, 
)





bytesOff_uav = b'SET,STA,X8,OFF\n'
bytesOn_uav = b'SET,STA,X8,ON\n'




print('--------------TELEMETRY--------------')
print(msg)
if msg=='OFF_UAV':
    print('UAV OFF')
    SERIAL_PORT_UAV.write(bytesOff_uav)
    time.sleep(2)
elif msg =='ON_UAV':
    print('UAV ON')
    SERIAL_PORT_UAV.write(bytesOn_uav)
    time.sleep(2)


# print(msg)
# print(TELEMETRY_PORT)

# msgOn = b'SET,STA,X8,ON\n'
# print(msgOn)
# print(type(msgOn))

# print(msg)
# print(type(msg))



# SERIAL_PORT_UAV.write(xxx)
# time.sleep(2)
# SERIAL_PORT_UAV.write(yyy)
# time.sleep(5)

# print('end telemetry')


# while True:
#     SERIAL_PORT_UAV.write(msgOff)
#     time.sleep(5)
#     SERIAL_PORT_UAV.write(msgOn)
#     time.sleep(5)

