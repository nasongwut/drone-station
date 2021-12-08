def cmdcode(msg):

    cmd = {
        "None": 0,
        "STA_CLAMP_OPEN":1,
        "STA_CLAMP_CLOSE":2,
        "STA_COVER_OPEN":3,
        "STA_COVER_CLOSE":4,
        "STA_UAV_CHARGE":5,
        "STA_UAV_UNCHARGE":6,
        "STA_UAV_INIT":7,
        "STA_UAV_UNINIT":8 
    }
    return cmd[msg]