long randNumber;
typedef struct
{
  uint32_t  src=100; 
  uint32_t  dst=0;
  uint32_t   seq=0;
  uint32_t   cmd=0;
}packet_header;
  

typedef struct{
  packet_header h;
  uint32_t sta = 0;
  uint32_t sta_motor_x = 0;
  uint32_t sta_motor_y = 0;
  uint32_t sta_volt = 0;
  uint32_t sta_amp = 0;
  uint32_t uav_volt = 24.2*100;
  uint32_t uav_amp = 16000;
}packet_station_sta;

packet_station_sta packet; 

#define STARTBIT 0x55
#define STOPBIT 0x2E

void setup()
{
  Serial.begin(115200);
}

void write_packet(){
//  Serial.println("----------START____________");
  packet.sta = random(10,50);
  Serial.write(STARTBIT);
  Serial.write((unsigned byte*)&packet, sizeof(packet));
  delay(100);
}


const int BUFFER_SIZE = 20;
char buf[20];
char finaldata[9];
void read_packet()
{
       if (Serial.available() >= BUFFER_SIZE) 
       {
          Serial.readBytes(buf, BUFFER_SIZE);
       }
       

          for (int y = 0; y<BUFFER_SIZE;y++)  //ค้นหาข้อมูล 0x55
          {
            if(buf[y]==0x55)                      ///HEADER
            {
//              Serial.print("HEADER ----");
              for(int i=0; i < 9 ; i++)     // i<BUFFER_SIZE
              {        
                       
                if(buf[i] == 0x2E)
                {
//                  Serial.println("---END FRAME---");
                 break;
                }
                if (buf[i] ==0x00)
                {
                  i--;
//                  Serial.println("---ERROR MSG---");
                }
                else if(i <= 6)
                {
                  finaldata[i] = buf[y+i];
//                  Serial.print(finaldata[i+1], HEX); 
//                  Serial.println (i+1);
                }
             }
              delay(100);
            }
            y=20;   
        }
        delay(100);   
}

void loop() 
{
  read_packet();
  write_packet();
}