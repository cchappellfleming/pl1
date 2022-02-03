# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Newamarket+Ontario&destination=Lake+Clear+Ontario&waypoints=Fleming+College+Frost+Campus|Kawartha+Dairy+Bancroft&avoid=tolls&departure_time=1653066000&traffic_model=optimistic&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJTwGu8AvSKogRj9xyAHO_Ocs",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq6p6ZumM1YkRwlenRs5y5SY",
         "types" : [ "establishment", "point_of_interest", "university" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJhVlriTuE1EwRy-0iBfeYHdI",
         "types" : [ "establishment", "food", "point_of_interest", "store" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJVYJZfMTi00wR9P_23NuSbFA",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 45.4655801,
               "lng" : -77.22771089999999
            },
            "southwest" : {
               "lat" : 44.0592041,
               "lng" : -79.46119089999999
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "76.2 km",
                  "value" : 76176
               },
               "duration" : {
                  "text" : "1 hour 6 mins",
                  "value" : 3948
               },
               "end_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "end_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "start_address" : "Newmarket, ON, Canada",
               "start_location" : {
                  "lat" : 44.0592041,
                  "lng" : -79.46119089999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "29.9 km",
                        "value" : 29933
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1708
                     },
                     "end_location" : {
                        "lat" : 44.1398003,
                        "lng" : -79.1037992
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eDavis Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 31\u003c/b\u003e toward \u003cb\u003eDavis Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 31\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Davis Dr\u003c/div\u003e",
                     "polyline" : {
                        "points" : "_i|kGlw~cNXMw@sGOwAYsBE]E[Ko@CSIg@G[Mg@Q_Ae@oCCOWaBK_AKw@Q_BYgCIq@Im@Mm@COMw@MgAQoAQ_BWsBa@mCWgBc@{CaAiFCQI]i@qDCYG]EYc@cDg@yDIw@Gi@COMw@]yBWsA_@gCWiBQoAAO_@kCcAwHq@_F]mCk@yD_@oCiAmIG[O}@a@iCAE]mCCKCQi@yDCMMy@a@yCSqASyAG_@OoAESU_BMy@S}A[aCc@}Cu@mFa@_Di@aEaA}G[cCAI]cCS_Bo@sE_AiHQmACOIo@U_B]}BOkAAGCEGQoBeOiAkI@e@o@uFUmBCUQkBE[w@qFOeAQkAE_@i@oDg@wC]yBcAyGOaAa@iCqAyIy@aG]_CIk@i@qD[uBo@iEK[Mw@w@mFS}Aa@qCG_@E[a@oCuAmJeC{Pi@iDM{@EWOgAKo@a@mCw@cGSqAe@wCCQKs@Gg@[yBWgBo@yE]iCmAgJKq@?Ga@qC]oCiAmI{AaLGe@iAeIYqBKq@gAeIi@wDy@_GESgAaIoA{ICSCOg@mD[sBKq@q@aFuByNCQkDkVCMa@oC_@mCc@_Ds@cFWiBoAgJgA}HU}Aa@mCu@eFAGc@{CMaAOcAq@iFYkBu@kFo@qEg@mDUyAGa@Gg@Ig@SqA_@mCCMGe@Kk@Im@AESyAKm@qB}MM_AQiAACKy@SsAKs@_@kCIg@OaAGc@Ga@]iCCSEUs@cF_@iCScBSqAAMOgAOgAEUYsB_@mCE]CQOeAKu@Ii@AEIi@?EACQuAE[EYGi@AAo@cFAIAES_BG_@M_AAMIo@Ga@M}@?AG_@CUOiASyAUcBUiBKo@ScB}@{GS{A?EQgAKw@Kq@SqAWiBKo@AG?AO}@EWKu@ACIk@CUQiA_@gCAEk@}DEWEWGg@Mw@Im@UyAKu@UwAu@cFc@wCIo@oAkIa@oCyAcKu@kFQkAYqB_@oCaA}GwA}J_@qCc@uC_@gCu@mFw@mFs@cFCK_A}GKo@Io@Ga@M{@g@sDCKyB{O[yBOaA[eCKm@Io@U_BIo@U_Bi@{DIq@Im@AAi@}D?AIo@U_BIo@k@}DsA_Kk@}D_@oCGk@ACGi@YoBO_AMaAIo@_@oCWuBEYa@mCIo@QkAQmAQsAE[U_B]cCG_@c@}CAOSqACYACCUWiBm@mEg@sDWsBe@oDUaBKo@_@qCSaBKq@k@eEcAuHAMQiAIo@Im@AGIg@Gi@AEGa@AMAGIg@Io@QmAc@cD_@iC?Ai@eESyAESE[Iq@Io@Kw@OaAMcASyAS_BUeBACGk@Ko@Im@?AIo@Im@?AIo@ESGa@]gCAI}@uGIo@?A_@sCCUCSAGIi@a@_DEYUcBGa@AMKm@Mu@Gi@COIq@SwAQuAIo@EWAGCQE]COEYCUCSCQSiBIo@ACIk@Io@M{@WaB[_CKo@Io@U_B_@oCIo@U}AIo@CSE[Ko@Io@Io@Io@Ko@Io@Io@Io@Ko@i@_EKs@Gk@Ko@CQ]oCG[WsB_@mCOiAc@eDe@gDiAoIOgACWe@eDCYEU_@oCIo@EYCUYwBEWU_BIo@CUKo@UaBOgAOiACUg@mDCQE]a@qCAMGa@CMIo@u@oFE[cAqHEWEWCUKo@UcBCOIo@S_Bs@oFSuAAIGe@_@oCAIIo@{@uGAGg@wDa@uCq@_FAGAIe@iD}@yGCOu@kF?CGa@g@oDE[Io@EUOiACQQmAMcAQkAi@}DCSQkACSE[MaAQmACQo@}ECQQmACQo@{EKo@CSeA{HsA}Js@oFm@yEEUIo@EYCW]qCIm@Io@Gi@Ku@SyA?E]oCOcAC[Ko@Io@i@eEGg@i@cEE_@Kw@AGWqBU_BS_BU_BIo@Io@Ig@Is@G_@CSSwAYuBQkAACM}@QmA?CKo@AIQoAACIo@Gc@AGKs@Gc@AGKs@_@iC?CGe@Mu@?CGe@CIE[COIo@ACAKSmA?CG_@AKAC?CGa@AIa@iC?CIk@Ks@Ik@ACIo@Ii@AC_@kCACOeACUACKq@Ig@?Ca@sCWcBaCsPAGu@mFSwAa@sCACi@yD?CIc@AKOeAEYGe@AIG_@CO_@mCAGSwAk@}DM{@YoBMcAKo@AEGg@Mw@SwAIo@Ko@AEGi@U}AKo@?EKo@_@iC?EKo@U_BIg@Ku@Gi@G[U}AIo@CSKo@Io@G_@COE_@COG_@CO[}BKo@COGg@AGSuAAIAI_@eCCQe@kDESE[CSQiA?Ai@{DAAIm@UaBIm@AAM}@_@kC]aCIq@CME_@COG_@Ig@OgAIm@EYCWKm@?CIk@Ko@?CSuA?EKo@Io@?AUcBIg@Iq@CQSyAa@sCE]QoAWmBM{@Gc@MaAg@mD?CIi@QmAE[SuAM{@UcBWmBCOS}AM{@Ge@EYWmBYkBIi@E[E]Ie@Iu@COES?EKo@YsBEYGg@AG[}BMy@?GIg@Gi@CMGe@Mw@?CQsAAGU}ASyAKw@YkBOiAWgBE]OcAAEM}@?CIi@QqAQmAEYQmAg@gDEUEYGe@W}AWiBa@mC"
                     },
                     "start_location" : {
                        "lat" : 44.0592041,
                        "lng" : -79.46119089999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.1 km",
                        "value" : 8118
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 349
                     },
                     "end_location" : {
                        "lat" : 44.2101141,
                        "lng" : -79.125647
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLake Ridge Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Regional Rd 23\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w`llGv}xaNiA^_Bh@q@To@RqA`@w@V]LaA\\i@PA?_@Le@N_AZm@RSHA?eCx@A@mBl@eEtAeBl@a@Lc@Na@LOFs@TcA\\A?A@cBh@IBYHQFoA^qBl@_AZ_@JSHa@LODs@TE@]JOFQDa@Ly@V[Ja@LiAZMDOFQDOFQFc@LODIBGBODQFOFQDc@LMFA?qA`@a@Lc@Lo@RA?QDeAXA@aATkB^MBSDSDOBc@HeAR]HC@c@Hc@Ha@Fu@NODc@HiB^mCr@G@WHqA`@eBf@ODQFWFIDeAXa@LWFKDKB{Ad@C@]HYFI@IBWDI@YDQBQ@UBM@Y@I?S@C?K?]?E?c@AIAYAKAIAo@GAAa@GC?_@GSEe@Km@Ma@IAAeAUw@QAAKCgB]AAOCwA[c@ICAuBc@wBe@mB_@QEOCc@KoAYsCm@_Ds@mAWWCk@I]Cw@Cq@?W@u@Bo@Fg@HE@SDc@HSFIBa@L[JE@aBh@mCz@OFyC~@E@]La@LE@EB}Ad@cCx@EBC?WJ_Bf@u@TUFIBA@UF?@IBiBj@UHUHcBh@sAb@_@Lc@La@Nm@RmInCA?sBr@UHaAZC@oExAuAb@uBn@UH}FhBw@Vo@Rw@Vm@P{Ad@}FjBcAZUFKDeA\\WHuDjAUFqAb@UFKDePdFc@NgA\\yDlAwBp@c@La@LsAb@SFa@Lq@R_Bf@[Ja@Lc@LE@[Ja@La@LG@[Ja@La@LEB[Ja@Lc@LGBkA\\wAb@a@LeA\\a@La@LODQFa@Lc@La@LODs@Tc@NMDu@Ta@Ly@VKBa@LcAZgBj@}Ad@IBa@LcAZYJyFdBa@LcAZcCj@o@Hi@F"
                     },
                     "start_location" : {
                        "lat" : 44.1398003,
                        "lng" : -79.1037992
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.6 km",
                        "value" : 13553
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 624
                     },
                     "end_location" : {
                        "lat" : 44.245389,
                        "lng" : -78.9628551
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDurham Regional Rd 13\u003c/b\u003e (signs for \u003cb\u003eRegional Rd 13\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Rd\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "exylGhf}aNKo@AOG_@S_BM_AG_@COE_@COeA_ICOE_@COQoACOE_@COS_BKo@Ea@UeBIi@AEAGIo@Ga@?EAGGa@?EAGIg@AGIo@S_BGa@AEAG]oC_@oCIg@Gi@Ku@AGq@gFsBiOAK_@qCi@_ECM[aCKo@MaAE[YsBe@kDKo@QuA_@oCAIGe@AIG[m@sEIo@CMQqAc@aDAKYqBE]OaAIo@E]MaAKo@S_BKo@_@mCAOCOCOIo@Ko@AOg@oDCOi@_EG_@Io@CO[_CIo@Ko@AMGa@Io@Ko@Iq@CKEa@U_BAMQqAIo@Io@CMGa@AMGa@AMKo@Ea@Io@CO[_CIo@Io@U_BIo@Io@Io@Ko@Io@S_BIo@Ko@SaBIo@Io@_@oCIo@S_BKo@S_BIo@U_BIo@EYU}AKo@Ko@Io@Ko@Km@E[CSIo@Ko@S_BIo@Ko@Io@S_BKo@Io@Io@Io@U_BIo@w@_Gs@eFIo@i@_E_A_H]kCm@aEU_Bk@}DIc@m@wDAEsAiK_@eCcA}GgAuHMs@Ks@s@oFGg@Go@e@aEE]CQIo@U_BS_BU_BS_Bm@iEIc@m@kEGc@aBmLAKKo@Ks@Ik@Ks@U}AIk@Io@ACIk@Io@OkAO_AKm@UyAU_BIu@Gk@Go@AEGo@Go@Io@Kq@COQmAIo@G]OaAa@mCAKEUAMIo@Io@AKGc@SaBAKGc@UkBCQMaAu@}ECOAKk@wECMAKWoBQoAGa@YkBWiBOiAKo@[gCw@wFIm@?AiAoI]oCi@_EIm@?AIm@AAIo@]mCAAIo@CScBkMGc@AKACS{AS_BKo@QsAK{@EYEWCWEWIo@y@gGc@gDy@gGEWCWk@gEGQMeAEUEYcAuHEYCUEWOgAEWIo@EWS_BEWCWEWEWIo@_@oCEWIo@CSACEWCWEWEWIm@EYIo@gAuHYwBEWqAgJOeAEYCUCYMgAEWm@sFCUEYQ_BQgBg@yDs@qFCUYyBOeAMiAi@}DIq@Io@CMQqAIo@Io@CMQqAIq@}@_Ha@{CKo@E]AEMcAE[WkBQsAIo@UeBAGGe@]iCCQE]k@oEE[Iq@Iq@Io@Io@AAE]AQIo@?AOaB?AIo@Go@?A?AACOyAy@aHE]AQKw@AKe@mD?C?AIi@?CUaBCQCWAC?AQyA?EIk@?EGi@ACGk@E[CS[uCKw@?EIo@e@gEE]CQOmAASIo@E]CQIq@Go@E]CQQaBOkACSGo@CSE]UsBOmAAQIo@s@oGCSE]CQe@aEEe@Gg@Io@CQOmAOkAMeACKIo@Iq@Ea@CMIo@a@eDCYEWMiAEUCYc@eDk@{EIo@yAqLCUEYIo@S_B"
                     },
                     "start_location" : {
                        "lat" : 44.2101141,
                        "lng" : -79.125647
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 362
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 44.2485232,
                        "lng" : -78.9640929
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSimcoe St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 2\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ut`mGzl}`NiCt@a@Lc@LgBf@aBd@EBqEpA"
                     },
                     "start_location" : {
                        "lat" : 44.245389,
                        "lng" : -78.9628551
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "21.8 km",
                        "value" : 21823
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 972
                     },
                     "end_location" : {
                        "lat" : 44.3246358,
                        "lng" : -78.7395085
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLittle Britain Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 4\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ghamGpt}`NKo@Im@a@oCKo@U_BIo@Km@U_BKo@mB}MKo@Ko@[}BCOIo@_A_HKo@Io@u@oFIo@_@oCGg@Kw@Ko@s@oFKo@Io@Ik@mAqIKo@yBmOIo@Ko@CQOmAU_B}CoU_@oCu@oFS_BIg@AG_@mCk@_EaA_HU}Ak@_ES_Bk@_Ek@}DKo@U_BU_BIo@_@oCKo@w@uF_@mCIo@U_B_@oC_@oCIo@U_BEWoAkIEYIo@Io@kAyIGe@oAmIKo@a@mCa@oCIm@}BmOKm@U_B_AmGCOU_BIo@Ko@kAmIKo@i@_Ei@uDAIa@mCU_ByA}Jk@}DKo@yBmOKo@mAmIIo@Km@Iq@Ko@S_BKo@Im@Ko@s@iFMu@Mm@Ko@CKK_@Oa@CGm@mAIOi@s@Y]uAy@q@Ok@OuAGYBc@FWBKBa@La@La@NeAZa@LeAZeBj@}Bp@MDqF~Aa@LgBh@a@La@LgBh@eAZgBf@iCv@a@LgBh@ODgANcA?_Ca@eAm@u@y@]o@KOo@kAWcASu@aBcLKo@a@oCIm@U_BW_BOeAEYIo@a@mCIo@U_BKo@k@_EKo@_@mCyBmOIo@w@oFIo@w@mFU_BwA_KU}AIo@c@oCgBkLa@mCKo@Ko@Io@y@kFm@_Ea@oCYmBm@}Da@oCIo@oAmIi@mDW}Aq@mE}@qG}@aG_AiFwA}JAIKo@aCsPAIwA}JCOmAmIIk@SsAAOKk@?CyA}JQoACMW_BIo@G_@YoBKm@Ga@eAkHs@_FCKOy@i@sDKo@w@mFcA}Ga@mCW_BU_BYmBG_@Io@i@_Ek@_EIo@_@oCKo@Io@q@}Ee@aDaBmLm@eEQ_AMk@_@cAWg@c@s@]g@_@e@m@i@{Au@a@O]IA?s@Gu@Ci@@a@Ds@NsAb@a@LkDhAa@NcAZaNnEa@NoFfBc@NaB\\E@WDK@QB[?]@]?A?WAUC{@KyC_AQMqA}@IKg@g@kA_Bi@_A]{@O_@AEOa@U{@Ia@[}AIo@uBoOU}AIo@eD{USsA_@oC_@oCQeA{BgP}@kGg@sDk@}DIo@Ko@Io@Ko@Io@Ko@Io@{@kGWwBIeAEkAEoAUuIA{@Ci@Eq@Gw@MeAk@}DKo@}E{\\Io@a@oCa@oC_@mCKo@a@oCk@_EIm@{@cGW_BIo@Ko@Io@Ko@aBmLaA_HKo@Im@Ko@wBiOKu@Km@_@oCKo@Io@_B}KqAwI?EKo@_@oCKo@Io@m@_EE_@oAmIKo@Io@Ko@Ko@a@mCk@_EKo@yA{JKo@k@_EKo@U}AKo@Ko@a@oCIo@{A{JyA}JKo@w@oFaAuGs@{EcA_HIo@W}AAGiAgIIo@Ko@m@eEOiAIm@CQ?Ec@}CQqAIi@E]EW}@yG_BqLKu@AIAIGeAAs@?EAQDwAb@iF?IFm@@ODc@D[Bm@?O?EAKCMEMAGA?We@"
                     },
                     "start_location" : {
                        "lat" : 44.2485232,
                        "lng" : -78.9640929
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1752
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 131
                     },
                     "end_location" : {
                        "lat" : 44.339681,
                        "lng" : -78.74589209999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAngeline St S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_dpmG|xq_N[GG?W?C?I@E?[F[Hg@NcA\\C?mA`@WHwAf@kDjAMDQFoA^WLQFiE|AuIxCa@NiC|@eC|@mA`@}C`AgBh@yBr@iDdAc@PIDsAh@eCx@u@VqFfB}@XeA\\eA\\"
                     },
                     "start_location" : {
                        "lat" : 44.3246358,
                        "lng" : -78.7395085
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 438
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 44.3420667,
                        "lng" : -78.7433776
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAuk Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_bsmGx`s_N_@iCWsBEOEEA?KCSBSH_@Ja@NcAZo@R]LM?SAMEMKIQgA_H"
                     },
                     "start_location" : {
                        "lat" : 44.339681,
                        "lng" : -78.74589209999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}psmGbqr_NJKHIFKXaAr@}BPm@BM"
                     },
                     "start_location" : {
                        "lat" : 44.3420667,
                        "lng" : -78.7433776
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_N^V"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{ksmG|hr_Nj@qA"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "129 km",
                  "value" : 129031
               },
               "duration" : {
                  "text" : "1 hour 40 mins",
                  "value" : 5975
               },
               "end_address" : "29572 ON-28, Bancroft, ON K0L 1C0, Canada",
               "end_location" : {
                  "lat" : 45.0369542,
                  "lng" : -77.89345779999999
               },
               "start_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "start_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ojsmGjfr_Nk@pA"
                     },
                     "start_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{ksmG|hr_N_@W"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 461
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 97
                     },
                     "end_location" : {
                        "lat" : 44.3445376,
                        "lng" : -78.7408128
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_NBK@MAOE[SsAUyAEQEQM[MWQWsAc@ICWESAODQD{Bx@eA`@mC~@MF"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 833
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 44.3469849,
                        "lng" : -78.7309563
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMary St W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 19\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`tmG`ar_Nk@qAK[Ww@YeB_@iCYkCWsAo@qEIo@_BoL{@kGaA}GS_B"
                     },
                     "start_location" : {
                        "lat" : 44.3445376,
                        "lng" : -78.7408128
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2060
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 148
                     },
                     "end_location" : {
                        "lat" : 44.329332,
                        "lng" : -78.723125
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLindsay St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sotmGncp_N`Bm@`@OfBm@`@OjE{AxAg@bA_@bA]dBm@z@[rBu@bA_@`@OdBm@DAnCcAJCbA_@dA]`@OTKJC`@O`@OtAg@fC}@PGxAi@~CcAl@SxDoARIpAc@jDiAd@MdIiC`JmCZKj@QVKdBs@"
                     },
                     "start_location" : {
                        "lat" : 44.3469849,
                        "lng" : -78.7309563
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3304
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 168
                     },
                     "end_location" : {
                        "lat" : 44.3309319,
                        "lng" : -78.68748000000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-7\u003c/b\u003e (signs for \u003cb\u003ePeterborough\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iaqmGnrn_N}@iGUaB]gC]cCe@cD_@iCGk@ACk@{DM}@Q}@WoAS}@Qq@Su@c@yAi@cBq@qBi@}AAEc@uAACOg@Qm@Oi@GW]uAYgAYmAWgAI_@Ie@Q_AKm@M{@My@E]CIKk@Ik@CMQkAIw@Ge@Gg@Gi@AKO_BEk@c@wFWwF?ECwAE_BAa@EqBACCoA?CGeAC_@Ck@Gw@Ei@Eq@C]EYEi@Gm@Gq@WwB?CYuBAOmAoIm@qEYmBK{@G_A?AEq@Ao@CiA@mAB{@D}@NuAHm@DYVoADQLe@Pk@Pc@N]Te@Xe@BGRYPYRUTY`@a@^YXSFGl@]j@WbA_@dBk@bA[v@Wn@Sb@OJC|@Yj@St@W"
                     },
                     "start_location" : {
                        "lat" : 44.329332,
                        "lng" : -78.723125
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 km",
                        "value" : 3465
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 174
                     },
                     "end_location" : {
                        "lat" : 44.32191359999999,
                        "lng" : -78.6463768
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSlanted Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ikqmGvsg_NMg@AW?a@JoA^iBv@kCdFyPZgAvAoF`CeJ`BmGt@qCp@uBbDeK^gA^iB`AiED]ZsBJkATeC`@wHf@{I^iHXwCXqCZiDVmDn@yI^wFZcEXeEj@uIb@gEl@iGp@{FHaA`AgKHs@XeEv@yL@SImA"
                     },
                     "start_location" : {
                        "lat" : 44.3309319,
                        "lng" : -78.68748000000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 523
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 44.3185592,
                        "lng" : -78.6419782
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSettlers Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}romGzr__Nb@uAxBwGJS\\w@j@s@V]@CvCeCtD_D`Ay@"
                     },
                     "start_location" : {
                        "lat" : 44.32191359999999,
                        "lng" : -78.6463768
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1997
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 113
                     },
                     "end_location" : {
                        "lat" : 44.3235929,
                        "lng" : -78.61797849999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePeace Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_~nmGjw~~Mc@aDU_BU_BKo@U}Au@oFc@uCK{AAY@iABaACa@Ew@w@iFU}AyA}JcA_Hk@}Dm@_E_@mCg@gDIo@yBmOU_BIg@Kw@MeAQsCAoA?q@?m@WeCCOY}AiA{Go@{D"
                     },
                     "start_location" : {
                        "lat" : 44.3185592,
                        "lng" : -78.6419782
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 308
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 44.3261774,
                        "lng" : -78.61814919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHeights Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "m}omGjaz~Mc@o@UQYM[GWHA?cA^YHkAb@WHIDc@LSFMDC?SDK@K?SAUGOG"
                     },
                     "start_location" : {
                        "lat" : 44.3235929,
                        "lng" : -78.61797849999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.1 km",
                        "value" : 7115
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 374
                     },
                     "end_location" : {
                        "lat" : 44.343236,
                        "lng" : -78.53336689999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003ePeace Rd\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "smpmGlbz~Mg@aACEYcAM}@sA_KU_B?A[cCMy@U_BU_BIo@a@oCIo@Ko@Io@UcBIk@m@}Dw@oFU_BU}AU_Bw@oFKo@U}Aa@oC}CmT}@yGIo@i@_E_C_QIo@Ko@?G_@gCKo@m@}DIo@W_Bm@aE_@kCIo@mAqIKm@wBmO[wBgCuQc@wCGg@Io@}@aH_AoGuA{IaAmHIo@iAoIs@oFGc@eAkHm@}Da@oCKu@s@iF_@oC_@oCiAoIi@_Eu@qF_A_Hi@_E_BsL[oAAE_@kA]o@OWgA}AOSYa@[a@Ya@m@w@[u@Yu@WmAKc@OoB?}BBULaBRaC@QHuBE}Ag@sDIo@ACMoB@eBJoALcBv@mFDYV}BBw@F{BAq@KgEE_CAOGkB?GGgAMuCCq@GcBIcBKsCAQEwAIoBCq@Cs@Eo@A_@CQC]Gq@CQEWMy@CKo@}Ce@uB?A[sA"
                     },
                     "start_location" : {
                        "lat" : 44.3261774,
                        "lng" : -78.61814919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.2 km",
                        "value" : 13156
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 616
                     },
                     "end_location" : {
                        "lat" : 44.3873154,
                        "lng" : -78.39982069999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eYankee Line\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 14\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Yankee Line\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gxsmGppi~M}@P]HK@OBk@@[?_@Cc@I[Io@Uu@c@[Y_AsAk@iAIQW{@Ms@a@sCa@mCa@oCKo@Io@y@mFYqBo@kEKo@U_Ba@oCIo@Ko@Io@qCkRKo@Ko@Ie@cA{GyA}JKo@a@mCKo@YiBGe@Io@y@}FIk@q@qFKo@Q_Bi@_Es@qFKy@Ic@Ko@e@kCMo@s@cEk@cDkAyGaAiFMm@Y}AGWGUSq@_@aAg@aAOOe@e@s@i@GEi@Ui@Qk@KWC[CC?m@?UBG?YD]H_@LeA`@qDvA_@La@Pa@NOFs@XcA^a@PE@gBt@yAh@cHpCq@VoBv@oCbAuBx@sBx@_@Lk@No@H_@@s@C]CYGSEe@QUKGE]We@]AA]_@CEU[KQa@q@Ws@Ss@Mq@UmAKo@CIGc@W_BKm@CKSsAY}AIm@AAW}AKo@W}AsAkIY}Ac@oCKm@c@mCKo@o@}DW}AMo@gDuSuAkI}CgRKo@W}AaAaGQiAY}AKo@SqAO{@]sBEYKo@UuAi@iD_@{BIo@W}Ak@sDKo@a@mCa@oCKo@{A{JKo@y@mFa@oCuGwb@[sBMaAEw@CaAAy@@}@Bu@Ds@Hy@Jo@Ps@\\uAdBiG`B}Fz@kDBUVyB@WN_CBsAAkAAKKoBMyAIk@]qCE_@mAkHa@cCWiBw@mFq@wE]wBa@mCm@}Di@kDy@mFy@iFeA}Ga@mCKo@a@oCeB_LCKIo@W_BIo@Km@U_BcA}GW_BIo@Ko@Ko@U_BU}AKo@Ii@AEIo@Ko@Io@U_BKo@a@oCIo@Ko@Io@U}AKo@kAoImAoIiBgM{A{JAG_@gCe@iDSuAU_BIo@U_BIo@a@oC_@oCIo@U_Ba@}C}@wGIo@_BoL_@oCIo@kAqI_@oC}@_HIg@AGoAmIuA}JE_@EWYqBIq@G_@G]Ke@GY?CI]CKAEGM"
                     },
                     "start_location" : {
                        "lat" : 44.343236,
                        "lng" : -78.53336689999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1352
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 83
                     },
                     "end_location" : {
                        "lat" : 44.3848966,
                        "lng" : -78.38366619999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBridge Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eJames A. Gifford Causeway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 14\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Bridge Rd/\u003cwbr/\u003eCounty Rd 14\u003c/div\u003e",
                     "polyline" : {
                        "points" : "wk|mGzmo}MOo@Om@AA_@wA?AACGWESEWCUIk@Ce@C[AWA_@A]?A@s@B{@Dw@H}@VyC\\}CB[`A}JPaBPiBPeBD_@d@{EB[D]@KX}BBSDWVoB@GJi@?CJm@Lq@D[BMLm@DUFWZ}ALm@@CJi@DMR{@T{@Ni@Tw@Pk@VeATiA"
                     },
                     "start_location" : {
                        "lat" : 44.3873154,
                        "lng" : -78.39982069999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1840
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 44.3978244,
                        "lng" : -78.37355269999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWard St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 18\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow County Rd 18\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "s|{mG|hl}MPk@Ng@eAO}@MkAOGAeASiB]gAQa@IiB]KCc@GSCeAQeAOICeAWu@UOGcA[gBk@cA]a@MgBk@a@Ma@O{@WICcA]{@YICgBk@wGsBkBg@{Ac@k@Q]QQKQQSYGGEIGKGOEOEQCK?CGWIc@M}@Mw@QaAIo@Ko@YiBWcBG_@y@eFKs@E]UsA"
                     },
                     "start_location" : {
                        "lat" : 44.3848966,
                        "lng" : -78.38366619999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "14.8 km",
                        "value" : 14807
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 738
                     },
                     "end_location" : {
                        "lat" : 44.4820137,
                        "lng" : -78.2496039
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSelwyn Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow County Rd 20\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "km~mGtij}Mi@NWH[LOFs@XuAh@QHQDQBWDk@BS?IAKAWCMAKAQECA{@OKAiB_@a@Ic@IYGqAWeB]CAYGEAKCYKYKm@YUMAA[OyC}Aq@_@_@SyC}A_Ag@m@[SKKGy@a@i@Y_@Sy@a@yAw@y@a@UMaF}C_@Uc@YcFaCcAe@aAe@oAm@wCyA}@a@ECiAo@a@Sw@c@_CmAeBaAa@UyAw@GEaB}@g@WKIKGIIKIIGSQUWOOa@c@kBwBoAsA]]kDsD}HiIcEwE_CiCiAoA[]i@o@cBkBy@_AsAyAqAyAaCiCeBmBGG}@_AUUWUWSQMOIUMSIQGMECAUI[I[G[GcBUsAQWGi@M[GMEMEECGCMEIEMGKGKIKGMMMMk@o@y@qAWg@GMEKEKCKEMEOIWAKCKIa@ACIk@Ko@k@}DQeA_A_HAAIm@U_BMaAG]CSG[?EG_@GYEQEOEOGQISGOKQSYqByBuA{A[]uA{AoCwC[_@]]sA{A}@_AwB_CyA_BgAmA]]AAY[uA{Ao@q@e@i@[]]]EEmAuAGGmAuA?A[[kAqAy@}@[]]]_AcAq@u@[_@y@}@[]IK}CoD[_@g@i@OUw@_Au@_A[a@i@o@MOY_@w@aA[_@iAuAqAaB[_@OSg@k@Y_@[_@oA}ACCkC_DoB}BACYWKKUUQOMKMGKGAAUKs@Y{@[_A_@iBq@eAa@}BaAmAg@}DmBcGuCEAiFeCaAc@UMqE{BeB{@gHoDcCmAeDcBsJ{EuAs@A?w@c@oBcA]Oq@]q@YAA_@KICSEWEs@Ce@AE?s@BwBJ[ASAMEKECAGAIIIGCEEEMSMYIUGSEUAEAOQoAS}Aa@sC?Ao@kESoAs@{EOcAc@mCmBiMCSm@_Ey@uFk@wDQcAs@yEE[[sBQsAM{@YoB]_Ca@mCwC_Ss@}EIg@sAmIi@aEcA}Ha@cD_AmHkAwJUiBkAyIuA}JE]EQ}A{KOcAU_BKo@i@uDgAgHiBkLc@oCeA{Ga@oCW_BKm@Ko@Ko@U_B}C_SE[Km@WgBIg@c@oCIo@UyAc@sCSqACMi@kDs@oEKo@Ko@g@{CGa@Ko@aAgG]sBIo@CGGg@Km@Ge@WyAO}@E[ESk@kD]oBKo@c@mCKo@c@mCiDySKm@c@qCiAyGy@_F"
                     },
                     "start_location" : {
                        "lat" : 44.3978244,
                        "lng" : -78.37355269999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1529
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 116
                     },
                     "end_location" : {
                        "lat" : 44.4903578,
                        "lng" : -78.23605289999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eYoungs Point Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q{nnG~br|MMEcAe@_@Qa@QeAe@qB_AOK_@UCCYWQOk@y@Q[Ug@Q]cAcCIQIUoAsCIIaBaEc@gAEIk@cBa@qAAEg@qBEUCKCUCM?ECWCSAWG_AA{@AICwAC}AAICgAKs@Kg@?CEOEQEKI[ISGSESGUGUGSEUEUGUESESGUGOGMQ[WSIEKEMCg@Eq@CSCMCOGKCUK[SQKi@]GE]Y[U_@c@?ASc@Ka@EOOm@"
                     },
                     "start_location" : {
                        "lat" : 44.4820137,
                        "lng" : -78.2496039
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "76.2 km",
                        "value" : 76220
                     },
                     "duration" : {
                        "text" : "51 mins",
                        "value" : 3060
                     },
                     "end_location" : {
                        "lat" : 45.0369542,
                        "lng" : -77.89345779999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eON-28 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wopnGhno|MyAj@QHu@VA?yAh@g@RoBr@E@a@Pe@NmAb@u@XE@_A\\A?_@LuAh@k@Ro@TYJg@P_AR]FO@s@Dk@Ag@A]E[C_@Kq@UWKWKc@Wc@YQOOOe@e@_@e@Yc@GK[m@]u@[{@I]GSGYMi@SkAc@uCO_Aa@qCW{AIo@c@oCKo@Ik@?CKm@e@{Ck@qDAIIe@Ko@QcAQiAKo@Ko@E[OcAKm@O{@k@qDO}@Ga@}@uF{@gFU{AKo@Ie@AIo@wDSoAOu@UaAQo@AEK[Ma@KUACQ_@Qa@Q]OWS[IOCCW]SYSQUWYYCAYUe@[c@W]QECo@Uo@Sw@Sk@Og@Oa@KoA[wA_@_ASo@Qa@KSGOCiAY]Ky@QKEc@Ks@QOEmBc@}Bk@}A]YIc@KmBc@qBg@SEuA]oBc@iBc@wCq@e@KqCo@uBe@KCmAYeDu@qA[sA[mA[_Ci@kBg@a@KC?{EoAaEgAeAWeAYuCw@WG_HmBmBi@m@Qc@Ma@KkGgBGAgBi@}Ac@aGcBy@UkBg@uAa@UIi@Q_@Qq@]WMOIe@[k@a@s@i@a@[o@e@cAu@iA{@SQy@o@AA}@q@GEWSWQEEWSc@[CA]YGE_As@UQ_@WQMKKWQGEy@o@]Wa@[A?_@YKIQO_@YSOi@a@i@_@SQ_@WyAiA_BmAw@m@e@_@}@q@UQWUYW][[[s@s@w@w@k@k@MM][UWEE_@_@c@c@q@o@QO[Ye@YIEMISKIEWK[K_@K_@Ia@IWCWAe@CS?M?C?W@W@O@SB[F[FWDIBi@L[HYFG@]HE@ODQDA@c@Je@J]J]HC@]HE@a@JUFo@Nk@Li@No@PgATGBa@JG@YHSFOD]LC@a@NIDa@PUJYLGD_@RWNID_@REBYPaAh@C@e@X_@Rs@`@a@VKDULi@Xm@Xa@Nc@N[JwAd@MD]Lg@NMDSHG@YLE@m@Va@R_@RCBc@Vc@Zm@h@k@f@SR]ZA@c@`@yBxBwDxDcAdAmAlAGFu@v@c@`@[\\WVEDWVCDWVSROL[\\IFSRQR_@^SROPKJIHQRIHSTKJORABEDSTABEFQVGJCDc@r@A@Yj@Q`@CBUf@MVMTINk@nAQXKTYd@Ud@Yj@ABS`@Wd@a@x@Wb@EHUb@a@l@Y^QRSTKJONSPUPEDMHWP[PULUJSH_@Lc@LODSB[F[Dc@B]@W@Y?YAa@Ca@CQCOC_@IYIWGSISIUKYOQKECa@WWQYUOMOMACKKMMW[U[[c@We@We@Ue@ACSe@Qg@I[KYI[Mc@UmACKKm@k@_DSmAKo@Mm@AMIa@Ko@e@iC?CMm@W_BMm@CQG]e@mCKm@EUkAyGm@iDMw@Ie@e@mCMm@EWEWKo@Mm@UsAOy@Ko@Ko@Km@Ke@k@gDi@}C]mBKm@Ie@AIY}Ac@iCi@{CUsAY_BACIi@e@kCY_Bg@sCWyAa@}B}@gF_AgFk@cD_@qBm@gDMo@W}ACIUsAY}A[eBIg@aBeJqAkHGa@UkAUmAG_@e@kCUqAQcAMo@q@{DESk@}COy@Km@?A_@uBSeAAKIa@Y}A[kBI]Ow@Ie@ACKg@?AMi@Mg@K_@IUCGMa@M_@EKWm@[q@Yk@Yi@W_@IOMQMOIMY_@QSKMOOGGUUCCYWSQIG_@WGEWQUOIEa@SCCk@[o@]a@UGCWO?ASMIGKIKGIG?AOKUSQQ[[CEIIKMEGIIQSIKGMIIIMMSMSOYQ[Ua@CEQ]CGISIUEGOa@IUGSEKIUGUK_@CMGSGWIa@AEKg@CIGe@ESSiAIc@AKKm@Ko@QaAG]Km@W_BQ_AG]Ko@Ko@Km@Y_BAEIg@{@cFMy@Ia@AKIg@AGM{@Ge@Ge@Iu@Ec@AQAQC_@G{@Eq@Ag@ASA_@Cw@A_AA{@?aA?y@@}@?]?e@?KAk@?G?k@?EAUA{@KyBGw@Ek@Ee@ASE[AOIm@MaAOaAAEIi@EQE[YcB[mBcAgGESe@oCW}AW_BSiASoAe@mCSkAO}@ACUsAc@kCWyAq@{DG_@e@oCO}@WwAI[EYMo@U_AOq@Qq@ACOi@AEMa@ACI[Wu@Og@Qe@Ww@[s@Wo@ACc@_ASc@Q]c@y@CEa@s@OU]m@_@k@o@}@Yc@g@m@y@aAu@u@SUUUUSUU[WKIEEq@i@WSUQy@i@o@_@c@Ww@a@SKUKo@Yo@Wi@Qc@O[Ia@MWGUEa@Kc@I_@G[G[E[Eg@Ec@EKAYCI?YAc@CI?c@A{AEM?c@AmAE]?c@AaACmAEyACu@Cc@?yISwBE{@Cm@AuEKqCGYAY?m@Ac@?A?a@@c@@A?a@BM?U@I@YBC?c@DSBSBUDC?ODSBG@YFC?_@HE@[HC?[JC?}@XE@c@NWHIDKDSJa@PUJKFOHOHULKDYPEB_@TGBWRMHQLA@SN[TKHEDSPg@b@OPGDONMLUTEF[^QPIJ[^EBUZ[\\GFUV[^CBw@z@UZWXc@h@YXMLQNSROLOJED]TA@a@T]PA@[LE@YLGB[JE@_@Je@JC@]FOBSBWDK@YBI@O@S@O@_@@[?]AA?a@Cc@EIAYCc@EOASCc@EC?_@EC?_@EKAUCc@E[CGAc@Ec@EQCQAWCKAe@Ee@Ee@EqD[C?cAIc@Cu@GgFk@{AOuAOOCSAeAISAaBGu@@w@BeBLcBRM@eEl@aCZ{CZUBq@Fc@Fg@FaAJuBVkCb@aBLYB_BRw@Jc@DgANeALc@Fc@Dc@Fc@DeALi@FSBI@c@Dc@DE?kAL_BLc@BE@A?{AJM?}BJaCN[BE@c@@a@BA?gA@A?a@?gAAE?qEIU?}CMc@Cc@Cc@AgAEgAGc@Aa@Cc@Ac@Cc@C_CI_HYc@Ac@Cc@Aw@EOAc@AgAEyFUSAO?gBGC?c@Cc@Ce@Eo@EUEa@GIAYGSCq@QQEOEc@Ma@Mk@UWKa@OGCaAa@[M_@Ss@[oBw@cAYm@OUGWGw@O_AO}AKiAEyAEwACuBEaBCcACeAIyBYsBa@{EiAa@KWG{EmAeAW[IGCiBq@[S_@Ss@_@MIuBuAkBqA[U}AkASOk@]aBaA_@Qa@S_@QqAe@UGc@Ka@Mg@MeCo@A?gBc@QEOEc@KcAWIA_Dw@EAeAWa@Mc@KuGaBeAW}Cw@mEoAe@MyCeAoFkBSG{EeBa@OeBo@a@OqG}Ba@OgC_Aa@OiAa@kJsDkD_BWMwE{BoAi@c@M_AUy@McBMg@AYAI@gABC?]Bs@Fm@JIBg@LaAX_@LEB[NC@k@Xc@ZKH_@Vy@r@A@]Z[Zy@`AY^o@x@GFY`@QVGHSVe@d@OPi@f@]ZGFWN_@VKHu@`@s@\\MDa@NgBd@qAPi@De@Bo@@}@AaBM}@Q{A_@gA_@cA[SGo@SAA{@Ug@MYGMACA_@EIAiAIUAw@CcA?a@AU?UAk@Ey@Ku@Oy@UiAe@kAm@oAu@kAw@MIk@_@ECWOGCa@SOG]Ow@[CAeAa@_@MkAY{@Qa@IaIu@MAUE}@Q}Bo@kDsAiDoAu@YqAg@eC_AyAk@o@Uu@[cAa@GC_C_AmCcA{@]mAc@WKc@QuAg@uBy@i@S}Ak@}B}@k@Sa@QwBy@uBw@_A_@w@Wq@Wa@Qa@OqAg@SIeBo@uEeB{@[a@QwBy@OGcA_@a@OaBq@eBq@oBw@wBy@i@SsDsACAUIGCiAe@[KYKQIWIcBq@{B}@m@UkDqAa@Q}Ak@GCa@OEC[McA_@SIEAi@ScA_@_A]u@YQGMCKEICa@M{@SA?GCYG_@K[Iu@Qk@KqA[eBa@}Bi@UEWGSG]G_AWu@Uq@UCCaA]}@a@mAs@g@]UQe@[]YA?g@c@KKgBcB}BqCMQsAoB_@q@w@{ASe@Yo@MYa@aAYo@Wy@EMQk@iAaE[iAo@cCACOg@q@iCK_@gA_EEOYeA]oAUy@Uw@]iA[y@c@cAACWg@Ym@m@y@c@q@MO]a@w@y@OO]Ym@e@w@g@OGk@Yk@SaA[g@S[Gi@Ka@GAAk@G}@GUAC?sAGc@AA?_@Ac@AgAAK?c@Ag@Ac@?c@A[A]AgACc@AgAAm@EuAAcBEcAEiACiBG_DISAwEOeAAmAE{DMyA?a@?g@?Y@G?K@c@Dm@FeANi@Ja@HIBm@Pm@Rc@NYJs@Zw@d@ULeBfACB_@Tu@b@cDrByA~@aDrB_F|C_@VQJMH_@Ta@T[RC@_@T_@Ta@Rm@^k@VGDcAb@WLGBa@Pa@NIDWHa@Nc@Na@Na@LQFOFgBj@cAZa@Nc@LOFQDa@NSHMBa@Nc@LgCz@kDhAc@La@NYHGBa@LoEvAuC~@}CdAc@LOF{Ah@e@RWJ_@R]Ne@TiAj@WLcB|@cCpAEB{@b@qGhD{DrBGDa@ReExBIDiDdBsAt@cAd@YJiAb@c@LIBqAZg@JG@a@Fw@H_CNqABy@CoCGA?a@AeJOkAC_@Ac@?YAm@@U?M@a@@y@Fo@Fm@Fs@Lm@N[FGBa@Ls@Ts@RyBr@ODa@NoBn@{@VeA\\g@NcCt@OFaBf@aBf@uDlA]JC@i@L[Hc@JA?w@No@Fc@DI@Y@K@{@BE?]@u@?i@AKAc@CI?w@Ig@G{@MKCa@IC?eB]c@KWEsBc@wGyAc@IICYEkCk@a@KeAUc@IeAUc@IwGwAc@KeASc@KCA]IiBa@[GEAc@Ic@IEAUEi@GaAKwAGYAsA?W?a@@G@cAFm@HUBc@FKBgATwBn@C@eAZoH`D_@Pa@ReBt@_@Pa@PmH`DgChA_@PcAb@a@PaAb@eBt@a@PaAb@cAd@cBt@cAb@a@PeCfAkGpCa@Po@XgAd@wFjCa@PcBv@eCjA_@Pa@ReBt@_@P}@`@g@Pc@NaA\\A?oATeARYDc@FSDM@aAJi@D[BG?gAFsCAgAGsDQc@AeAGc@Cc@Ac@CgAGc@Cc@Ac@CsDQc@Cc@Aa@Cc@Cc@Cc@Ac@CmBIqCKkBGoCIsDMc@AoCK_BEK?kCIe@?c@?c@AgA?Q?u@Cc@Cc@AgAEc@Cc@AkBGa@Cc@Ac@Cc@Ac@Cc@Ac@AkBIoCKc@A{FSiBIwAES?gACsDEc@AO?w@Ac@AOAS?oBGcAEgAEc@AkBIc@AgAEa@Cc@CMA[EWEg@GYGo@Ke@Ka@MUGk@Qa@OcA_@GCaA]aCaAa@QcBq@a@QiDuAgCcAeCcAqCiAy@]IE_@QWMGCm@]wBoAu@c@GEWQ_Am@EAYUECs@i@EC]WGE[S_@Wi@]g@W_@Se@Wq@[iAg@uAm@aAe@a@Qa@QkB}@y@]GE{@_@KGu@a@ECYO_@UECYQWOm@_@}B_B}ByA}@m@OIoBsA_@W_C}A]W_Am@_@WcAq@kCcBeCaBeBkA}LiIyByA_C}A_Ao@_@W}EeD_@U_@W_@W_Ao@_@U}AgA_@W_DuB_@W}B}A_Ao@_@U_@WkD_Cq@e@oBoAoBsAc@[{ByA_@W_@U_BgAOKiBoAaAu@s@i@YWUQi@g@mAkAi@k@MO[]WYyAcB[_@qB}B[]}F{GuDkEk@o@GISU[][]y@}@ECWYWWCCw@w@CCOMe@c@aAy@US{@q@{@o@m@a@UQIE_@Uq@c@c@WWMSKMGSKOKOIQIq@[cAc@cBm@c@Oa@OcA]gC_Aa@OkDmAa@OcA]eA_@a@Oa@OcA_@a@Ma@OiC_AeBm@a@OyAg@KGgBm@GCYIa@Ou@Uq@UcA_@a@OiC}@YKi@ScDmAw@[{@[YKw@U_AYm@SUKcA_@UICA_@McA]a@Oa@MGCYKcA_@g@SaCaAGCWMQIOKaF{C_@U?AiAq@WMu@a@o@a@}BuA_BcAYQEE_@U_@UGCy@g@_@U_Am@_@U_Am@_@S?AaAk@_@U_@U_Am@a@U_@U_@UAA}@i@a@U_DoBQIoAu@aAk@IGcBeAaCyAq@a@_BcAa@U_@U_@U_@U_Ak@a@U_@U[SCAsBmAm@_@_@UGCOKGGSMKICC[UyAkAAAYUCC]]}@}@oB}B[_@]_@Y[sAeBKOMQgAyA]g@W_@QYsA{BOYaAkBo@qAQa@wAeDg@oA]}@cA_D_A{CAA[gA_A_EOu@[}AKm@CGIg@Ko@Y}ACMGa@Ko@CKIc@Y}Ao@iD_@qBKo@Mm@W_BMo@Km@Ia@CMKo@Y}Aq@}Dg@mCeB{Js@}De@oCKm@[gBKe@q@_Ee@mCe@iCg@wCMm@Ko@Ko@Mo@W}AMo@G_@k@}CKo@Mm@Ko@Y{AMq@e@mCY_Bo@mDO_A]oBKm@Ko@}@cFq@}Ds@}DqBkLw@uDMq@]wAGSk@qBu@qBc@gAgAuBy@wA]g@w@iAoCyDsBoCOUwAmBsAiBm@w@GIu@eACCQWCEKOKQIMOWq@eA?AUc@AC{A{CWe@Ug@We@_@u@MWSc@Yk@Ue@We@Ug@Q]]o@Ue@We@eAuB]q@kBuDYi@yAyCUg@eAsBiCiF{A{Cm@mAeAuB_AkBaBcDUg@MUGQUc@Yu@GQ]_AWy@IWSs@GUEMi@oBi@qBOk@GSIY_@yAKa@Uw@Om@i@qB[gAm@aCOk@Om@Qk@Om@Ok@Qm@Ok@Me@AG_AgDSq@AEIWGSEKs@oBQ_@EKAASc@_@u@MWWe@ACWa@CES]CES_@Yc@OY{@mAoAeBcA{A]g@GIIKOUSWQY_@g@QUMUMOOUU]U[QWQUCEQWCCQUOU[c@QW]i@mA_By@kASYYc@QYuAoBcCkDg@s@MQeA{AGK_DkEkAgB[e@cCkD[a@s@eAcCkDu@cAYa@s@eA[a@{@mAQYu@cAGKa@m@IKs@cAeCkDQUc@m@CCa@g@Yc@OWMOIKc@g@e@k@OOMMMMUSCA_@YCCiAw@cAq@SOKI]Sy@i@_BaA]U]YcAq@m@c@iAu@e@[UOaBeAwA}@wA}@aEiC{CuBoA_AUUk@i@u@y@q@u@k@y@eA{Ak@}@We@AA}@{Ag@u@aBmCm@aAEEkAkBWc@KOaA{AEIQYk@}@c@s@U]Yc@gIiM]i@q@iAWc@aC{DcCyDi@{@u@kAiEyGy@uAeAmBcAkBYg@OYk@eAk@aA_@s@]m@_@q@S]EGCGOYQ]Yg@AAYk@O[m@qAa@_Ae@sAc@uAIUACEQMe@YkAWqAa@iCY{BAQE[CSEi@YqCi@wFc@oEC[CM?Ec@oEs@}HKcAGq@E]q@mHGk@KeAC]CSQoB]oDSsBO}AGo@[yCSqBKiAi@wDYeBKq@UeAS{@]sAg@yAo@wAEKm@sAW_@[e@{@kAQW[_@c@i@mAsA[][_@sAyAAAy@y@A?[_@IIQS[_@u@y@CC[]WYCE]_@WYCCw@_A[]IIkAsA?A[][_@GGkAwAw@_Ai@y@c@q@o@_Ai@}@c@q@_@o@[e@U_@}CaFcBiCo@iA[g@c@u@S[OW?Ac@q@c@s@_@m@c@s@g@w@?Ae@s@_@m@EG_@k@QYAAk@cACEYc@EKk@}@We@Wc@AAaBqCWe@IOMUq@iAWe@OYGIq@kAYg@QYCGYc@Wc@Ye@Wc@q@eAm@gA]g@iB}CiAoBAAo@gAEISYYa@IMOS[a@MQg@m@SUII[_@GISS][MMOO][][AC[Wc@a@UU[W][_@]k@i@_@a@y@}@Y]QY[a@SYUYS]i@}@s@mA}@{AqAqByA}BcC{DYe@kDuFoBmCm@w@o@m@s@w@eAcAmDaD][kAcAuCkCgC_CMMmC_C{CqCcB{A}@w@aA}@e@c@y@w@GGoBgBGGaC}BGG"
                     },
                     "start_location" : {
                        "lat" : 44.4903578,
                        "lng" : -78.23605289999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "95.8 km",
                  "value" : 95763
               },
               "duration" : {
                  "text" : "1 hour 11 mins",
                  "value" : 4265
               },
               "end_address" : "Lake Clear, ON K0J 1T0, Canada",
               "end_location" : {
                  "lat" : 45.4655801,
                  "lng" : -77.22771089999999
               },
               "start_address" : "29572 ON-28, Bancroft, ON K0L 1C0, Canada",
               "start_location" : {
                  "lat" : 45.0369542,
                  "lng" : -77.89345779999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "45.6 km",
                        "value" : 45645
                     },
                     "duration" : {
                        "text" : "33 mins",
                        "value" : 1971
                     },
                     "end_location" : {
                        "lat" : 45.21260780000001,
                        "lng" : -77.4402139
                     },
                     "html_instructions" : "Head \u003cb\u003enortheast\u003c/b\u003e on \u003cb\u003eON-28 N\u003c/b\u003e toward \u003cb\u003eOtter Lake Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}g{qGbqlzMAA]]e@c@cB_BwBsBcB_B[[MMq@k@o@c@aAs@}@o@_@Wi@WCAUKKE_@QYMGCWIICc@Oy@SKAWIC?EAc@IWGKCa@EWCKAc@CWCE?E?c@CWAYCy@GWAKAKAUAc@EaAIaAME?g@KYECAEAeA[{Ac@i@UWOe@UoAu@IGkA{@{@u@GEAAq@q@OOKMGGmAsAGISUsA_Bc@e@?AaAmAKMEICEa@q@[c@KSMYQ]Ym@cAeC_@eAOc@AEYaAc@yAUeACIIe@Km@CQUuAQyAe@gCAGAKGYG_@Gg@Gc@Ee@Eu@AECaACaACq@?E?MEeBAM?KCwAAICa@?MC[?OAECk@ACA[CSGaAE_@Iu@?AIaAAEE]Gk@CMMaAG]CMGa@CMGa@Ki@AEMm@Om@[}AEMQi@M_@CKSk@GQc@sAUm@g@mAc@aAAEw@yAc@y@OWIKYc@QWU_@W]o@_Aa@o@k@y@o@aAq@iAYg@a@gAQk@EOESKg@CUSqAGk@Ec@Ee@Ca@Gq@OeBGi@Eo@Eo@CmACg@As@AcACiBAg@C_B@S@WHi@Jg@Pq@DMHONc@l@yAVk@bAaCz@mBBEPa@Tg@Zo@JSJWFOBM@[A]?GC]ASAWA[Ei@Eq@IuAC_AACCg@Ck@AMAIAQCOACEKEMQm@IWI[So@Ww@?AQk@ACMg@I[EQIa@CKMo@ACMi@AEMw@E[Os@[oBO}@[wBKo@UoAEMG_@CGAICICICGCGACGKQWS_@S[IQISGQA?EUGWEe@E_@C]GcAC_@Cs@CYCQCO?AEUGU?AAEKYCIAAM[EI?AKWGOAAUg@Ue@Q]CKSe@AAIUMa@Ka@Mg@?A?AIc@AIKq@?ASwAAEU}AACOu@Sw@IYSi@CKM_@Uk@M_@CGAASg@[y@MYKUQe@i@uAM[IYK]IYGY?CACIe@CG[aBIc@AGMm@I_@COKe@SaAIc@Kg@AEEQSeAOu@WuAKo@CSG]?AE]Ec@C]ACCu@Ci@AGASAW?GCq@Ci@?C?CCk@AGCq@AQAW?GCi@?KCg@?GCi@?GCq@?ICi@Ci@Cy@?GCk@Ci@E}@Ce@IoACSIq@?GAGG_@AGGi@E]EQAEKg@Ki@CKMc@Qk@K_@CMi@kB[eAK_@CKW}@K[Ok@AE]gAEISi@Qg@m@qAKUg@q@KQ[c@g@o@EEo@{@IIo@{@_@g@QYKQ_@k@_@m@We@CG_@m@k@aAk@aAYa@CGOUOUMSMUIOCEMUMWMWKWKUKYIYK]Ki@Mg@Ga@Ia@AGkAsGMm@Y_BMm@Ko@g@mCMo@s@{DMo@Y}AYyAAEMm@Mo@Mm@Mm@Mo@I_@CMe@wBa@wAISSi@KYkAeCwBsDCEYa@oAcB[a@IMwBcD_@o@_@w@Q_@KS[_AYiASiAOqAEgA?[?UBkA?CFq@@OTyAJc@Lo@Z{@^{@Zg@NWt@_AHMZ]x@}@x@}@V[BCZ]\\]Z]\\]bAeA~AuAl@e@^WRMj@_@XQDE~@k@^U@A~@m@^Uj@_@rBsA~@k@^W^UZSBC^U^W`Ak@n@a@NK^U^W^UBAZWNK`@a@V[d@k@HMPWDKRc@Ra@Vs@`@wADOLo@@GHg@Fe@H{@BOBe@Bm@?o@?m@Ay@Cg@AKEq@CUa@oCIYU}@e@oA}@yBe@gAwAaDu@gB_@{@_AyBGMw@mBSg@k@sA}@yBi@sAUg@_AyBCEQc@Si@M[W{@Ki@ACKq@OkACk@Ag@?o@B{@Fy@N}@VqATs@b@kAf@mATi@Tg@?Ah@oATi@Rg@Ti@Tg@h@qATi@Rg@Ti@Vm@Rc@Rg@Tg@Ti@Tg@Ri@DIL_@Rk@J[DMPm@DOF]Je@@GLq@R_BD_@@QLuCBs@JuCBg@@KDcBBs@FcBBm@?EDq@Bq@PwEBe@Bq@Bq@HeBBq@Bq@FeBDq@Bq@Bs@@Q@_@PiEDo@?A@s@@e@?K?i@AGCeBCs@?KYaHCs@KuCMqCi@kOCe@Cs@Cq@GeBGcBCg@?KGcBCq@Cs@EiAKoAUiB]eCy@qFIo@Io@?EM}AAGCk@AU?[@q@?s@?[?U?s@?q@?s@?q@?Y?cF?s@?q@?s@@a@AO?s@AeB?q@?[AWGcBAs@C_@?QEq@Ca@AOCs@Eq@?EKoB]}FEs@YgESuCMkBMoAAKOyAWgBE[EUIo@Ko@m@aEKo@a@oCw@qFw@qFIo@Kq@Ig@?GO_AG_@Ko@Iq@AIIe@Io@Ko@Gg@i@qDEWIo@Kq@Ko@U_BIq@AGIg@Ko@CQG[UkACSYsAAI[uAOu@Mm@CGKe@Mo@Mm@AC_@eB_@cBi@gCI]Mm@Mo@Om@ScA[qACQWiAAAOu@c@yBCG?AG_@CMAAKm@ACQcASaAACMk@AGMe@Mm@Oo@Oo@Mk@Om@CGKe@Mm@Mi@ACKo@Mm@AAKm@EQE]?AIm@AA?AGg@?EEi@AE?CGm@?CEm@?C?ACm@Ce@AK?ACo@Eq@?CCu@Ck@?ACo@Co@?CAACo@Cs@Ca@?MCs@AAAk@Eu@Cm@O}C?GIaACW?AGo@Gq@AKGc@?AIm@ACIm@CWEW?AKm@Io@?CIa@AK?AIm@Ko@?AEWe@aDKu@AAWgBSwAKu@CMGa@QkAgBeMe@}CIo@m@aEIo@Ko@?AKo@aAaHIq@U_BAIGg@Gk@?CGq@GcAIqAEiAEmC?g@Aq@A_AA{BCaAAe@?MIcBAWIy@MmAGe@Ga@CMMu@Kg@Kg@Su@EOI[[eAe@}AEKu@aCQm@c@yAQk@?Ao@sBu@iCy@qCOg@Qm@c@wAQk@Qk@AEa@qAQk@kA_EM]a@wAQk@M_@Uw@Qk@Qm@c@wAGQIYQk@Qk@Qk@AEOe@a@yAM_@CKSi@Wy@_@aAg@sA_@u@i@aAi@aASa@CCq@iAS_@_@e@Ya@w@gAeIoLcAyAe@oAaBiCIOOUMYMWSi@wAiEGUQm@GUGUOm@Om@CIMa@Om@?COg@IUIUMa@CISi@Ug@AAWc@GMOUYa@GKa@m@IKMQMOQUIIYWCC{@u@CA[Wa@][S_@UAA_Ag@m@]u@_@aBy@u@g@]YKISQQQW[oC}D[a@Ya@Yc@Ya@[a@Ya@s@eAaAuAgAaBEG_@g@U[[_@GKaAiAoBkBiBgB]Y][_@YyBmB]Y{@u@USe@e@]]UUEEiAeAaA_A]]_@a@k@w@a@i@GIS]Ye@]q@]m@[s@Wm@e@uAo@kCAGMo@Mm@[_BMm@Mo@kBwJMo@Mm@Mo@Mm@Mo@Mm@Ko@Kg@AGMm@Mm@AC[uAACOk@ACKc@M]KYSg@Q_@Se@yAgDc@_A]w@k@qAaAwBSi@Ug@Uk@KWEOACISGSGUGWCIOm@Kc@Ia@CKKo@Mm@Ko@Y_BMo@Km@Mo@Ko@Mo@Km@Mo@Ko@Y}AMo@_AkF]oBMm@Mo@U}@Og@M_@M]EKEI?AMYAAKUISKQo@iAk@aASYWe@EIQYYe@]m@S[]m@Wa@MUMSKQIQEIIQGKKUCEEKAEQ_@K[IUIYAACKEOEOEKAEKc@I_@AECKESCOAI?AESCOAIGe@AG?CIo@?AEm@ACAWAKASA_@AWAYAY?YAg@@oA?gADqD@c@?s@@_A@e@?I?A@e@?M?u@?a@?O?c@?C?c@A_@Ci@Ck@AEC_@AQC[Is@Gg@Ii@Ii@Kg@?AI_@CKKc@Oi@CKKYAGISQe@KYGKUg@O[?AQ[EGKSKOCCCCYc@MSIIMQGIGGAAOOSSMKGGSQAAGE}@u@UQGGWQoBaBWU[WCA[WUSOOOKIIMMKMOMMOA?MQMM?AMOSYQWA?MSOWk@cASc@MWISMYIUKUCMCCGUGOAEK[Om@CIEUIW?CUkA_B{IeD}Qw@qEc@kBs@}Da@}BMo@O{@Ia@Ko@Y_By@wEEUW}A{AqIkAwGKo@s@}DiAwGOu@WwAQ_AIg@o@uDCGIg@AG_AmFWoAg@mCMm@qA{Gy@aEcAgFe@}BUiAUaAGYGSIWMe@Uo@ISIUM[Q_@CGUc@We@We@?CWa@MSKMY_@]c@WW?AMMQMQOGEy@s@WSs@m@o@g@ECcCsB}BmB]Ys@o@eA{@}AqAe@c@UQ][]Y_@[]Y][][WSGEy@y@a@]WUyCoCKKQOg@e@q@m@KKQOEEaA}@m@m@MIkBeBWWOQk@g@i@k@]e@EG_@g@KQ[g@CG[m@Q[Qa@KUISMYYy@Sk@I[EOQm@AEKg@Om@CKYoAMo@Mm@ESGYqAcGm@wCCGMo@Mm@Mi@ACMm@Om@EWIWMk@Qo@Ok@]qAAGuA_FIYGSOk@Qm@Mg@ACYeAGSOm@Om@Om@EQI[Mm@Oq@Mi@Oo@Mm@]{A]}AMw@Q{@Mo@Mk@K]Ka@Oc@Qe@O_@Sc@MYWc@]g@Ya@AAu@_A[a@u@_A[a@Y_@[a@EEUY[a@GGSWUYEE[]AA[[AA_@]SQEESOIIUQ]WKGYQEEi@]UMEC[Qo@[]Oa@Qi@Qg@Q_AUq@Qa@I_@IeAUkBa@q@OSEc@KEAi@MSGMEc@Oa@Q{@a@qAq@_CmA{@g@GECA[WCAYWYWCCOOMOSWU[IOIK[k@KQGOSc@M]EKM]O_@u@yBgAyCQ_@[gAW_AIWG]GUEWIg@AGG_@Gi@Ca@KmBC_A?c@?a@@]?S@I@i@Ba@@OBUB[Fm@ReBHo@DWH{@De@@[@[@S?S?g@?QAOAa@Ee@Gs@CGGa@CMMi@Ka@M]e@qAg@uAu@sBe@qAUk@Sk@Si@Si@Qi@Si@?ASi@Si@CE[kAAGMo@Iq@Ge@?IAOCa@?GA]?a@?c@@e@Dm@Du@R_Cf@iGl@uHVwCDq@BUB[?GDg@@[@_@?g@?m@?]Ca@E{@KcB_@uFI{AUgDUwDGq@E}@Ee@Es@KcBAICg@Eq@Eq@Eq@Eq@CQC_@Gi@?GIi@?GG[G_@Ia@EUGYGUMe@K]EKM]I[GOKUYm@c@y@m@aAiAaBsAqBYa@Yc@CEm@_AYc@Yc@Ya@Yc@Yc@Ya@Yc@Yc@_@i@S[Yc@aDyEiEsGs@eAYc@Wa@o@cAU_@KUQ_@IUIWKYKa@EWKc@S{ACQIo@EWEYE]Ig@GYCOI]CKQw@e@_Bq@cC{@yCOk@CGMe@CIIc@CIMs@OcAAMGi@G_ACc@EgA?eA?eAAo@?A@s@?q@?W?mA?s@?C?aB?m@?CAk@A[ASAIEq@?AEs@Gi@E]EUKo@?AKg@S_ASu@Ma@a@kASk@Wq@w@wBg@sAKWGQg@sAM[GMCESe@QYS_@Ya@SW]a@m@o@m@s@g@i@[][]SUaAgASSoAwAwBeCGG[_@OQKMcAoAMSm@y@]g@]g@_@i@yA}B}@uAe@w@Wg@q@iAq@iAWe@Yc@aAaB_@q@Yc@k@_A_@m@i@}@_@o@IMOUWe@o@eAc@w@MUWe@IQKUGIO]?ASg@CGOa@CIa@mAu@aCIU[aAe@uASm@K]Uy@]}A]kBQgAMy@EYM}@My@CWIi@Ie@Ik@Mo@YeASi@M[GQGMSe@We@?Ac@q@MSoAgBaB}BaBaCkAaBm@{@[a@Ya@W_@}A}BkAcBOUYa@[a@CEU]w@kAS_@Uc@AAYm@w@cB}@oBkAqCi@qAWm@Qc@Ui@KWk@_BCEQk@EKQi@?AUw@Me@Ka@c@cBWmAIYO{@Ow@[}Aw@{DOq@iAsFaA}EKc@SaAWoAKe@GUGWSs@Us@g@}Ae@kAe@cAc@{@e@w@Ya@a@k@W]WYCCY[QQa@c@_@Yg@c@_@YSOOKQKCAi@Yq@[}@]q@UEAs@SoDw@OEc@KeAWa@Ic@KCA]IeAWOEu@SKC_AW[M{@Yi@UIEWMGEi@We@YIE_@UOKo@c@IEUQIG{AsAo@o@EEWUy@{@]]II_AaAMK[]][{@y@o@o@IIYWCE]YQOMIk@a@SMWQe@SSG[M]M_@Ka@G]Ga@ESA]AW?M?c@BC?_@BQ@QBm@JWFOBQFs@TOH_EdBIDqB|@yAj@YLG@cAZA?a@Hc@H}@Lk@DYBm@Bc@Be@BqAFG@kBFQ@I?Y?W@g@Gs@CA?YCa@Ca@CM?eAGA?a@CYCUAMAc@EWAGAq@G"
                     },
                     "start_location" : {
                        "lat" : 45.0369542,
                        "lng" : -77.89345779999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.6 km",
                        "value" : 12562
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 591
                     },
                     "end_location" : {
                        "lat" : 45.30513639999999,
                        "lng" : -77.4930301
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eRenfrew 514\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSchutt Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRenfrew County Rd 514\u003c/b\u003e (signs for \u003cb\u003eSchutt Road\u003c/b\u003e)",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "yq}rGh`twMiAAeBGmACU?KAc@?O?S?c@@c@?c@@c@?c@@Q?Q?c@?c@?c@@oC@G?[?c@?c@?gB?sABgAF[DUBMB_@FA?m@Nu@L{@XmA`@a@Lc@Na@La@NMDSFa@LKDWFa@Na@L]Ja@No@RSFQFOJGBQJQNOLUX]b@[f@ABYb@EHSZYf@W^Wb@GJk@z@Yb@_@l@y@nAKPYb@?@m@`ACBYb@OVGJY^A@YZABWTWPMHGDSJg@Pi@JQ@M@U?I?YAE?[Ec@KC?]QECWOAASQKGIGSQAAY_@ACWc@W_@QY]o@Q[GIU]CC[_@KKQOWSGC_@SOIQI_@SSKMGa@Q]Ou@YQEYKG?MAe@@Q@A?QBQBA@QHMDC@SJGFOHOLA@SVEDSXEFY`@Yh@o@bAA@Wd@QX]j@A@U^CB[`@Wb@Yd@Wb@Yb@Wd@A@W`@kAjBi@x@CDg@v@KPs@fAIJOVc@p@e@l@YZ_@\\ED[TCB[VA@_@XMLONYXABWXCDQVEJQZEJWd@ABOf@GNI\\Ml@CJI`@Mn@Ol@CPG\\Ml@Mn@I`@CLMl@Mn@UpACJMn@Kj@ABKn@W~AQx@ENG\\GVGTQl@?@Sf@ELMZMVILYb@GJSRGHSRQPKHWTGB_@Re@TmAj@s@Z{@`@iAd@GBYLa@P_@PA?_@RQFOHa@PSHMDa@Na@LYP_@RYPg@TaAd@KDUJa@Pa@PIDWJYLGBa@L]LC@a@LKDWFa@La@HA?a@Jc@H[FE@c@Jc@Ha@Hc@Ja@HA?a@Hc@Fa@Hc@F_@FC@a@Fc@Fc@Hc@Fa@FI@YFc@H]FSFc@FE@[Dc@F_@FiAVa@JiB`@a@Jc@JA?cATc@Ja@JQDQDYHi@TA@]RQJMJIF[ZSTON_AvAs@hAW`@Yb@EFc@p@IJ[`@ILQP[\\GFUTIJQP]\\MLOL_@V]XOJgAt@i@X_@RMHw@\\]La@NGB[JQFODa@La@Nc@L?@a@Ja@La@Nc@La@LA?_@Na@LQDQFa@La@Ny@V}@Xa@Na@La@NG@YJeA\\KDUJIDWNYTABKJONORKNA@QZCHMXELIVGTEPIZCJI`@EXCVGn@EXCVGp@E`@CNIn@Ip@Il@KfAWtBKx@Gp@K`AWbCADSzAQ|AIt@Gp@CVOhAEVCXK|@Y|BQhBGf@AHGp@EZCTIn@ANI`ACPEXETGZSt@Sd@Sj@AB[h@YZc@b@OPIHQJQHGDYJUHKBSFMBWHKBa@JQDOFA@YLEB_@VEBSTCBSXSXIPKPKREDKXM`@GPQb@CFSf@GLKPCDIJQRIHUNEBYPEBSHGBMDSFOBSDa@HA?a@DA@c@Fs@HODWFKB]LC@_@TCBUPCBMLKNC@MRINEHQ\\CFM^A@I`@CLAJGb@ADCXAPAFCZALAXCVATEZAJI`@?@GPGTGTITABS^CDo@lAEJOXWd@A@Ud@Wd@ABU`@Yj@k@fAINMTWd@INMTWd@U`@ABYd@Wd@?@W`@m@dAq@fAa@r@o@hAYd@Wb@Wd@iAnBYb@Wd@Yb@GL]h@_@\\KHSNWLUH]Jg@LeAV]HE@a@Ja@JgAXa@La@Jo@PUJ_@PKDi@Xe@^EBg@Zk@\\k@`@_@TKFSL_@VWPg@ZQLMFUJo@Ra@HMBm@@q@@a@Is@OqASEAc@GgAOa@GWEo@Ic@GmC]c@Ga@GC?_@Ec@Ec@CQCQAc@C}AMo@Ec@EA?kAE]BM@UBG@[HA?_@Ju@Hg@DM?W?c@IICa@OKEc@Yo@g@][][AA[WAA]QAAg@U[IMESAgAMA?a@C{AMOAa@Cc@CWAKAc@GgAM]EE?a@Gc@Ec@EOASEiBYA?eAIoAKYEc@Es@KSAgAMa@Ec@EMA}AUQCOAgAMc@EWCqAQc@Gc@Gc@G_@GA?c@IUEMCoA]WG]KCAc@K_@MA?a@Mc@MUIm@Qc@Ma@Ma@OGC}@UKEw@WWIIC}@[i@Q[KECcA]ICYIcAYSGOEICQKCAEAOK"
                     },
                     "start_location" : {
                        "lat" : 45.21260780000001,
                        "lng" : -77.4402139
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "27.9 km",
                        "value" : 27933
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1255
                     },
                     "end_location" : {
                        "lat" : 45.4337988,
                        "lng" : -77.3164048
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePalmer Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRenfrew County Rd 515\u003c/b\u003e (signs for \u003cb\u003eOuadville\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 515 E\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Renfrew County Rd 515\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ctosGlj~wMtCsD`FoG`AgA\\]v@}@x@}@l@q@zBiCJKhAsAdCsCdCuCLQpAaBlBeC\\c@vAqBn@gA|AiDFQRi@Ri@`@gAbAkCPc@j@yAnAiDf@qAh@uAnCcHh@sARi@Ti@z@}Bj@yARi@z@_CbBiEj@{AnAcDvAoDx@yBh@sAJWZ{@Na@BGN_@BIDKFWH]BYD_@@S@W@U?w@Aq@ACM}@WgAa@wAsAmDe@mAWo@kAmCu@mB]w@q@cBIUc@oASi@?AQk@KYUu@AGOm@KiAGwAAg@?_@?Q@s@JuAXuBb@yCLoABc@?a@?A@e@?KA]Iw@SyAGS_@qAe@_B?AQi@e@_B_@qAOg@So@Qk@GOQwAEk@A[EmA?m@CmAG}B?SA]As@AmACiACcACa@Es@?AMuCCq@AKOiDIcCI{AIiACYEq@Gq@OcBMcBGq@UuCMcBOcBImAIgAGq@Gq@Es@Gq@SuCGq@Gq@[gEEq@]gEEq@Gs@Gq@Eq@k@kHMm@Ko@CGMc@CGOa@CIUg@CES_@Ue@A?[_@GG_@_@SQ[Y_@YECYWq@k@g@c@_@YYUCEo@k@MI][][EEUWSQIK[_@EEU[SYEGWa@U_@CEQ_@EG]s@c@cAACYw@KW]}@_@_AKUq@gBm@yAs@eBk@wAm@_BQk@Qg@Qo@WcA_@kBOy@c@kCo@eEo@_EW_BWaBc@oCKo@c@oCKq@G]q@qEq@oEi@}CIe@Ko@q@eEU{AKo@[uB]{BKo@G[ESE[Mk@Qy@Og@Yy@Qa@[m@s@eACGq@y@IMQSg@m@e@k@EEc@q@Wc@Yo@Wo@AEKYQs@SaAWsBQ}AKeAI_AGo@AKGe@Gq@Iq@?Ag@qEOsAQaBIq@Gq@_@aDKaAKsAOoAMoAS{AQcASeAAIKc@Me@[gASm@Sk@_@{@Ug@ISg@}@o@cAmAgBKMOUi@u@wAyBWc@S]CGWg@Q_@Yw@Ma@WeASkAOaAMiAC[Iu@KqAMkAAKMsAKuAUoBKmAMqAGk@Gk@Iw@C]CQIk@AEQ_AI]Ic@w@oCq@sBEO]{@a@aAe@qAGKi@uAa@iA[}@Sy@AEWcAQ{@YgBQuAI}@AEQ}AQoBZSx@_@hAe@`@O`@QbAa@pB{@`@O`@Q`@Q`@O`@QJERIFEHCNMBU?G?CAECU?ECa@Cs@IwBGgBCg@Aa@AOCs@AUC[Ce@I_AIo@AKIc@SkAk@aDIo@Ie@C_@E_@Cc@A_@Ao@?a@?[@W?Y@W@_@By@?K?w@AgA?Y?q@?A?eAAkA?G?m@A}@AW?Y?i@AI?eAAqA?A?q@?[@W?m@@C@s@@U?[@Y?Y@m@?C?m@?g@AO?[AWA_@CQAQG_@AIGe@Iq@ACKi@I_@Me@GWESOo@CK_@cBAIKo@EWEYGk@SkBEm@Ea@AOEq@c@oGa@}EKqAI_AAMKiAKoAEs@IcAC_@Gq@?EGk@Eg@AIIo@G]CQK}@Kc@AIKc@EMKWACK[Qg@IQSc@ACYc@Wc@Ye@q@iAWc@Ye@Wc@We@IK}@yACEs@iAWc@?A{@qAk@w@[a@KQMO[a@OQKOYa@W_@AAYe@IM]o@]o@Wi@CGQ_@GKO[Q[EIUi@Ug@?AQg@CEOe@Me@AGOk@?AKo@CMEa@E[CUCSC]C_@Eu@Go@Gw@I}@Gg@AGGi@AEKc@Sm@Y_Aa@{@]o@W]AA[_@CCY[CCs@y@[a@U_@ACWe@ACSe@Qe@ACI_@EMKm@AAKo@?CMs@Gg@K}@OeACOGe@CIQ_AI]G_@EMI_@EMMo@EMG_@Kc@AKMm@?AIc@AKCWGs@COEa@Ii@Kw@?AIm@C[EUE[CSEYCWGg@AGIq@AOEa@AGOkAIo@CMC]McA?AKo@CKIc@EUGWGUGWEMM[IUISIS_@s@CGS]CE[c@CEWYCEWWQO[Wo@c@o@c@oAy@UW[][_@?Ao@gAs@wAEIQ][o@S[We@We@Ug@We@IOMU_@o@O[S_@CE_@o@a@y@EIs@oASa@MU]q@s@oAIQMSWc@Wg@We@OWGMe@y@KOWe@AAs@aAIOQOSQ_@Yq@[e@SWGc@IOAeAKA?y@CKCu@G[EYCc@EEA]Cc@Ea@EIAYCc@GI?YCc@EMAUAc@EKAWCc@CGAYE[EGCeAWAA_@MWIIEa@Oa@Q{@]sAi@}Ao@a@Qk@U{B}@a@Qe@Q]Oa@QuB{@eA_@q@Wa@OQGOI_@OA?a@OA?_@SSKKG_@W]U_BmAA?]W]UA?wA_AGEa@SKGSIMGSI_@MC?a@Mc@ICA]Ic@M[Ei@Im@Gm@CI?a@Ac@AOAS?QAQ?[AG?}@AI?c@AW?KA}@AqAE_ACG?c@CC?_@AOASCYCWESEAAm@QUKUIIGs@c@g@]e@Y_Am@s@e@KG_@WeAq@YS_@WUOIEo@[QGUISGWCSAO?C?GAM?M?G@S?W@g@BO?W?K@I?Y@M@U?Q@Q@W@K?[@G?_@@C?c@@I@Y?c@BG?[@K@W@W@m@@E?]@c@Ba@@U@YBSDOBOFGBIBQFEBUJKFIFKFIFOLONOPIHEDKLIJIJQRSVGHY`@qAbBWZKLKLUZKL[b@Y\\KLQPIJ_@^MJA@KJSLED_@TYPKFe@TOFYLGBSFMFSH}@Zi@PSH[JcA\\A@_@JcA`@MD}@^}@^_@Js@VODe@N_@H_@Hu@Fm@BS?O?I?G?W?C?c@CC?[CUEi@Iw@Ue@Sk@YECUOWOQKOIOM_@W_@Y_@W]WIGUQ_@W]YA?]W_@Y_@WOKOK_@UIIUKSKMEGESEEAKCWCCASCYAc@AQ@C?U?M?YBI@UBK@c@DQ@QBgAJ]Bi@F[Bm@F_@Dc@DA?WDWFYHMFMDk@\\KFEBC@CBWXEDWVEFIJQXGFWd@A?S^CBKRKPCBS^Wd@Wd@KPKRCDQVCFY`@A@ONKJQPKFYPGB[LYJIDC?a@LA?a@FYDI?c@B[?G?c@@c@?c@@K?U?c@AgA?c@?C?cAAc@?A?a@?c@?c@?I?Y@c@Bc@@[BGBa@JYHIBa@PUJID_@VQJMJ_@XSRIFYZA@e@r@[h@INUf@A@Sf@Sh@ABQd@Sj@Sh@ADOd@Sj@AFO`@Sj@Sh@Sh@Qh@A@Qh@Sj@Sj@O`@CFSh@?Bc@~@W`@[\\_@\\KFUNIDUJKBc@Hw@BOAI?g@ESGECQGIEIEQICCOKOMY[]e@UY_@g@ACEESWiAwAc@k@GIEGMKGEWQKISKSMMG_@QIEYGKEUEWEKAc@GSCWEc@EMAUEWCKAc@GC?aAMs@KUCOCu@OMEQIKEUKQIcAg@m@]QIo@_@aAe@a@Oa@QC?_@IWEKAa@EIAY?W?K?c@?S?O?c@?U?M?c@?_@?C?c@?c@?c@?c@?I?}@?c@B]DE?SDOBIBWJIBWJa@PEBYLa@RC@]P[PC@a@POHQDODi@FM@G@[?[?g@AAAc@GE?]EGA[Cc@Gc@Ea@G{@KoC[WEIAc@CgAI?Ac@Ec@EQCQA]CE?]?E?SBM@SDOBMBSHODQHOFQJ_@Rk@^SLaAl@EBYNc@TSJIBE@a@P]HIBWDMB_@@Y?A?W?I?MAUCMAUCc@EGA[CiBQUAoCSM?gAAW?K?c@?c@?c@?Y?IA[?GAc@CGAYCMCUEUGm@UCA[UEEUQq@m@k@g@GEWS]UAA_@UCA]MICWGOCSAWCe@@I?O@S@I?YFMBSFUFe@LIBWHa@Jm@Jo@B[?_AAE?a@AgAA}ACy@Ac@AO?S?c@Ac@?_@AC?c@?c@?c@?cAAC?c@A[?G?w@COA_@CCAc@G[I_@Mi@Y_Ai@EC[OGCYKA?SKKCa@OEAq@SWGWEA?c@EQCOAWAK?M?S?A?Q@Q@M?U@U?MBcANkB^gATG@k@HQ?c@@A?q@ESCgAMEA[EgAOc@Ga@Gc@Ic@IIAWIc@M_@QGAYOCA[SCA]SCCYSEEWUGGmAuAQUQQY[[]AC_@_@WWKKQO_@[i@_@UMMIQIa@OIEWIk@O{@Wa@OYKICi@SYK"
                     },
                     "start_location" : {
                        "lat" : 45.30513639999999,
                        "lng" : -77.4930301
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.6 km",
                        "value" : 9613
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 438
                     },
                     "end_location" : {
                        "lat" : 45.4656611,
                        "lng" : -77.2277728
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eFoymount Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRenfrew County Rd 512\u003c/b\u003e (signs for \u003cb\u003eCounty Rd 512 E\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gxhtGnz{vMF[DY@]@M@I@W?O?M?U?O?G?SAW?AASAW?CAOEa@EYCWACE]EKKg@CECOM[GMK]GQKWSi@EKe@iAa@eAYu@Si@CCQe@]{@o@eBWo@Si@GQ_@cAGMK[c@{Au@aCg@{AOg@K_@EKQk@Mc@CGSk@IYIOQa@CEQa@CEYa@?AY]AA[YOOOMCCKOIEYUCCMMOO][][g@c@u@{@o@{@_@q@QYi@qAUg@?AUg@KW_@aAi@iASi@Sc@Wm@Ug@Uc@Uk@Ui@Ug@GOMYSi@CIK]ACGSGYEOG[AAOw@UwAGYEUKo@AAKk@Os@Mo@g@uCKi@AECQAIESCOOq@GYEQCIGc@Ia@CMIa@AMESE[ACMk@E]EQAGGQEQACK]CKQc@AEIUKQA?KWKMS[EEEGWYKKOMAAUQ_@UGCIEWK]IQG]E[AA?QCO@G?o@DOBE?YJA?SFUHWHA@SHMFIBWLa@PIDa@P_@RcAd@UJ_@PA@a@RC@]N[NCB[LEBa@PC@]NIDUJSHMFSJMFWLc@RYLMFc@Tc@R[La@Pa@RYLG@cA\\E@gAF]Ec@EKAUEg@M]Oa@O?A_Ao@gBiAWO_@W_@Ua@Q[Qg@MQEQCQCQCa@EI?u@EG?c@AEA]?c@?c@@c@?M@U@c@BE@{ALI@c@Du@Hs@Hc@DWDo@Fa@Dc@Fc@Dc@Bc@DK@mANO@c@FC?_@Bc@BO@SAc@EG?YI_@KCAa@QWQEEWW[YU]CE]k@Ug@K[AEMi@Ms@K_AEw@Cc@?S?W?[?Y@YBWBYJo@Ho@Jq@?AHm@Hq@@CJmAHcAFq@BQZuDDk@LoA?KDe@?M@K?Y@K@k@?G?W?Y?C?g@?GAeA?_@?IAi@?A?]AQ?s@?QAwB?OAk@Au@AiB?IAi@?c@C}A?WAgA?qA?e@?M?kA?Y?y@@k@@o@?CBeBBgAFmFHsH@q@@gB@m@FoD@u@Bi@Be@@SPgCFuADgA@aBBaB@M?e@@q@?CAo@?e@?KAo@EqAAWCs@GeBCq@Cs@Aq@Cs@KaFA[Ak@AGCsAG_BG_BA]GaACc@Eq@?KQyBS{CAKEq@Eq@AMCe@CYAWCe@?_@?_@?_@@S@O@Q@QB]F_@DY@GBIDSHYHYNa@FMVg@DIJUDGDKHMHOJUFOFOHWJWNq@BSF_@@ODg@?K@k@?y@?ACq@Ae@C}@A}@Ai@As@?q@?K?yA?C?_B?u@?I@i@?UB]@]@SDg@N{@Jm@Hg@Jy@?ADo@@IBg@?m@?E?q@E{@G}AAYAWKmBOwBKiCGyAI}A?EEs@QyDI{BCoACo@A_AAg@As@?AAc@?MCq@A_@ASGq@AWCYIq@Ok@Om@CGOc@s@wBCIUi@IWISQi@Sk@Sk@Yy@K[Si@Si@EOMYYq@Oa@Wk@Qg@Se@ACQi@EIUw@GWS_AG]Iq@Ga@AMc@eEEYCWYuCIu@YoCIq@Gq@AGIg@Mo@e@oCKo@Mo@[}AMm@?Aq@eCmAqE"
                     },
                     "start_location" : {
                        "lat" : 45.4337988,
                        "lng" : -77.3164048
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10 m",
                        "value" : 10
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 45.4655801,
                        "lng" : -77.22771089999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBuelow Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k_otGppjvMNK"
                     },
                     "start_location" : {
                        "lat" : 45.4656611,
                        "lng" : -77.2277728
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "_i|kGlw~cNyaJubp@isB_eOoXqpBmHm\\aTbHio@nSaaAzVchA{K{jCfz@sk@lQyT~GgWW}Gwg@wSc}AmWqnBojAmqIqz@ktGkR}`B_Hwj@}LRaIiK{K{w@gRktAeZ{vBqa@wrCyKkX{]pHoc@|DyKel@ue@ccDea@koCyN_dA{PwMmk@zP}RqMw]yqCob@azCan@ecFaj@jKas@tU}JwDf@uRsKsHkJkH}I{o@rh@aRb_@kMj`@}LwBe_@aKga@wFaXqFoy@d@o}@bV{J|]muA``@{xDxIcVcCuWuQwpAqK}`@cJFg_@skC}e@whDgZeqB_AwtAsYcl@y]mcCaOqj@uS~Bqt@tMy~@}_GpJ_p@_S}rA{Tq{Auf@_fEtLm|@KeJcNaCwWeHg\\qLoDoSs_@sKu|@ed@kbAg|@ec@}XcNmh@qtAe`Bq|B}hAoiAc{HoYqhBya@}y@{D{[i[uEoc@~@mP_|@kRmx@ol@eQkvCo_Akz@}h@uu@zWar@ns@_T|T{UaKsh@{tCyf@kwBaZqc@}MgwA}SqkAyX{b@{xA}K_d@pZyjDrN{oBqRyiDgmAga@bMyNjJ{YiDkg@oNquAad@_lBsp@mg@gk@{^sq@ao@{BwaApVoeB`t@oaAvM{q@zQez@mNar@xHkrAhk@st@m@izBiJ}gBi_AmmCgvBweB}r@g~Ai~@if@aw@sVcsAy\\}lB}e@m{@e|@izBmdAe}AsxAezAks@qkAuRctAw[_fAk`@gh@mv@onA}qB}wBsx@g\\cUmmAyU}i@kC{m@pF{b@aJsb@iPqo@{Ni|@k^}eA}h@slBh|@ibAiW__A`Kuo@hGogCcNybCg\\ykBm`@itD{|@yzBos@wcAog@ao@yRiv@u`@apAoEys@qZwg@aw@cxDe`A_bAcb@}yA_Sm^}^qNi[ga@Dcc@uMof@d@glAan@gyAwTywAk|@evAmu@{dByXk_Awe@iQi\\wXec@zFmkA~@gn@nd@mPyNmQ`Fcb@pz@gTtXcYhLgy@n\\co@v]yVzjA{\\dYga@dy@}[lN{g@cDkaA{Mm]iJhG{Ur`@ai@|f@grA_Qev@mNqbCyQso@uVce@kj@wkCkf@iuBqHk]tRiIgDgh@aEueA{Hmq@_Wga@kV_z@qOcv@}Xea@iZeUw`As]cw@gQue@tMwV~N}[[mSoIwS~F}h@jPyOvZcRpDwp@aUes@nAyTzFg^{Gqv@oDy\\A{TuNkYeo@uc@c~@gUok@gSzHm]fA_t@iGvAaoAaAe|BlHiz@m_@aoC"
         },
         "summary" : "Davis Dr and Little Britain Rd/Kawartha Lakes County Rd 4",
         "warnings" : [],
         "waypoint_order" : [ 0, 1 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
