(function(){
    var script = {
 "defaultVRPointer": "laser",
 "class": "Player",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "layout": "absolute",
 "paddingRight": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "borderSize": 0,
 "definitions": [{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -65.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24AB6CE5_3825_0E28_41C0_E476BCCD586E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_camera"
},
{
 "thumbnailUrl": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_131539_00_515",
 "id": "panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "backwardYaw": 36.55,
   "yaw": -112.42,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "backwardYaw": 49.87,
   "yaw": 52.51,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2218E73F_026F_E8B1_4168_BAA4A44A6711",
  "this.overlay_236C03E8_026F_6FDE_417C_31493FF7D188",
  "this.overlay_2072A3C8_0269_6FDE_415A_5DBAA81A0C08",
  "this.overlay_23EBF596_0269_2873_4175_B376E1242C2C",
  "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_tcap0",
  "this.overlay_1DB94355_12C6_7793_4192_E403CACEADEB"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_camera"
},
{
 "thumbnailUrl": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_135849_00_532",
 "id": "panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "backwardYaw": 59.29,
   "yaw": -114.68,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "backwardYaw": -70.72,
   "yaw": 129.38,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "backwardYaw": 89.94,
   "yaw": -38.94,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0EB9497D_01E9_18B1_4175_633D340286EF",
  "this.overlay_11E89235_01E8_E8B6_4152_FC634BA8A8FA",
  "this.overlay_0E0DC5D8_01E7_2BFE_4159_64D8B19BD568",
  "this.overlay_0E079B7D_01E7_18B6_416F_279630E03C10",
  "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_tcap0",
  "this.overlay_06633C31_128B_F05F_41B2_169F086CFED9",
  "this.overlay_0627A36B_128A_D0C2_4182_BC44CBC38506"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_0266479B_179B_1B17_41A8_E0F1A4B35CEB",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_0268679B_179B_1B17_41A5_3CF3FF4BE50A"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window9802"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_221E6267_3825_1A28_41A8_56CA1B8E6720"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23CA4B2A_3825_0A39_4197_3D1AC6C81157"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22024909_3825_37FB_41C8_FE302814FDAC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24BEFD04_3825_0FE8_41C8_C770B477B2AD"
},
{
 "thumbnailUrl": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_140903_00_536",
 "id": "panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "backwardYaw": 74.74,
   "yaw": -24.12,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
   "backwardYaw": 135.53,
   "yaw": 129.38,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
   "backwardYaw": 135.53,
   "yaw": -142.57,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_29D9F18A_0CAF_90C1_41A3_7924D0FB8A43",
  "this.overlay_2826236A_0CAE_B041_4180_66CA34CC4EE6",
  "this.overlay_2A6C48D2_0CA1_7040_41A3_5648E161FB04",
  "this.overlay_28699E27_0CA1_B3C0_419A_2939153B51CD",
  "this.overlay_29C9A930_0CA2_91C0_41A6_CC21BAB063F4",
  "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE026B_FF39_2282_41B5_0F2204858344_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23110C3B_3825_0E1E_41C3_45C9AAF41A8C"
},
{
 "thumbnailUrl": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_140659_00_535",
 "id": "panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "backwardYaw": -130.38,
   "yaw": -30.77,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
   "backwardYaw": -24.12,
   "yaw": 74.74,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "backwardYaw": -4.77,
   "yaw": -136.54,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2D69E456_0CA2_9041_419F_DEF03A4DD1C1",
  "this.overlay_2E34CDDB_0CA1_9047_418B_BD8913E26014",
  "this.overlay_2E5763E3_0CA2_9047_41A0_11C8B0D67A03",
  "this.overlay_2D3B1157_0CA2_9040_419D_ABD01079701A",
  "this.overlay_2FADBC9B_0CA3_90C0_4189_098D9402B8FD",
  "this.overlay_2F089316_0CA3_91C0_41A4_98C72F1CAE84",
  "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_123502_00_503",
 "id": "panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
   "backwardYaw": 108.4,
   "yaw": 127.87,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
   "backwardYaw": 108.4,
   "yaw": -140.18,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_tcap0",
  "this.overlay_034054B1_129D_F05E_41A2_3EE7A2634B38",
  "this.overlay_0144B691_129A_505E_4194_52CEB6F31EA7",
  "this.overlay_06020263_129A_B0C2_417A_791A103E2B9C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22564A27_3825_0A37_41B8_3FA58404C42A"
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD.mp3",
  "oggUrl": "media/audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD.ogg"
 },
 "data": {
  "label": "&#x1F9C8; Lofi (Royalty Free Music) - &quot;BUTTER&quot; by @LuKremBo &#x1F1F0;&#x1F1F7;"
 },
 "id": "audio_3D611975_0DA2_F040_41A8_C7FDBF4C1EDD",
 "autoplay": true
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2397AAC8_3825_0A78_41C0_B646FA42D4E0"
},
{
 "thumbnailUrl": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_134928_00_526",
 "id": "panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "backwardYaw": -19.85,
   "yaw": -45.72,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
   "backwardYaw": -26.78,
   "yaw": 114.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EC113BCF_FF3B_EB1E_41E8_851AC777E9EB",
  "this.overlay_EB52C5C2_FF3B_7F06_41EE_3FCA88748D61",
  "this.overlay_ECA95279_FF39_1503_41D8_5C079C9AB314",
  "this.overlay_ED900D42_FF39_2F06_41D0_B9FD5D0EC0DA",
  "this.overlay_EB5C629C_FF3F_1501_41C8_5E6AE6F010B2",
  "this.overlay_E957125C_FFD7_1502_41E8_A806B05DA206",
  "this.overlay_E73FB609_FFC9_3D02_41DF_575A1F327DC9",
  "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_tcap0",
  "this.overlay_036F3FAC_179B_2B32_419D_A0D96923A8AD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24D46E3F_3825_0A17_41C3_D8C3FABF2247"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24820D55_3825_0E6B_41CC_16EEE622CC07"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.57,
  "pitch": 0,
  "hfov": 114
 },
 "id": "camera_23AF13FE_3825_1A19_41C4_7E38BA597618"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 114
 },
 "id": "panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_E765417E_FFCF_17FE_41DF_8EED84DCE410",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.4vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_E76B017E_FFCF_17FE_41E6_1B349F51464F"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window29046"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2213229A_3825_1A19_41C8_20EF1A302E17"
},
{
 "thumbnailUrl": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_135448_00_530",
 "id": "panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -67.58,
   "yaw": -19.22,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0DE279C_FF59_1B02_41E0_2B0917708254",
  "this.overlay_DE87B9DA_FF5B_7706_41DF_6C794F219CB5",
  "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_122308_00_497",
 "id": "panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "backwardYaw": -11.3,
   "yaw": 94.33,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E1D308CB_FF4B_1506_41E3_75C75AB5CB55",
  "this.overlay_E10EC96D_FF49_1703_41E2_C6A5B4FDBEB1",
  "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -102.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_241F3EE3_3825_0A28_41BF_65C37A82A06E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22229842_3825_3669_41B8_E1C201E41F62"
},
{
 "thumbnailUrl": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_133643_00_523",
 "id": "panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2CF2191E_0CA2_91C0_41A5_A6ADBA298389",
  "this.overlay_2D93A152_0CA3_F040_41A8_EFE27C53870B",
  "this.overlay_2C1526E5_0CA3_7040_41A7_19759B966580",
  "this.overlay_2C92FCC2_0CA2_B040_418A_E3E9D10135B8",
  "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_tcap0",
  "this.overlay_03DA20E1_1785_F532_4192_923BEEE6DE7F"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_132747_00_521",
 "id": "panorama_F581C873_FF39_6E82_41E5_2D1192608196",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": 165.43,
   "yaw": -74.99,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
   "backwardYaw": -85.04,
   "yaw": 22.99,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_10D250E0_0C9E_9040_417E_71C82D3DE870",
  "this.overlay_13E48E2E_0C9F_93C1_4143_C1E438B67980",
  "this.overlay_122BFD14_0C9F_71C1_4194_84A5C0F71C66",
  "this.overlay_124BBAEC_0CA1_9041_4158_84F12D91B6BC",
  "this.overlay_13D84CF5_0CA1_F043_41A7_59E66B2D2697",
  "this.overlay_12B55702_0CA3_B1C0_4194_1B5894DAA553",
  "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_240BBEB8_3825_0A18_41B0_5948DC954EAF"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 98.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25F2D095_3825_16EB_41C5_2CC4EFB91875"
},
{
 "thumbnailUrl": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_132950_00_522",
 "id": "panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "backwardYaw": 22.99,
   "yaw": -85.04,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_11235A0D_0CA2_93C0_41A3_DE1690A97B52",
  "this.overlay_13EA657D_0CA1_9040_41A0_F9AA034AB803",
  "this.overlay_135BA117_0CA6_91C0_4197_35BABF94B2F0",
  "this.overlay_133D1AF4_0CA7_9040_4188_AF27A7B9BAE3",
  "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24102F08_3825_0BF8_41B9_247E704D7A0E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_227DF326_3825_1A28_41CC_41C4E94CD162"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23DFDB49_3825_0A7B_41CB_910A58BA6FC0"
},
{
 "thumbnailUrl": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_131618_00_516",
 "id": "panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": 24.41,
   "yaw": -143.95,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
   "backwardYaw": 52.51,
   "yaw": 49.87,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1D11EE39_026B_38B1_4172_3C11B1168A24",
  "this.overlay_205B82BD_0269_69B6_417E_C447E2ACD52F",
  "this.overlay_1DCF995A_0269_38F2_4180_FAD83E8B9E54",
  "this.overlay_20DC66B5_0268_E9B1_4175_EC8CFC0251FB",
  "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_tcap0",
  "this.overlay_1C358800_129A_703E_41A8_F2C946D45BA0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_252690E2_3825_1628_41B8_6E4813BB920F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_225A93C6_3825_1A69_41C8_800EF2EE1F39"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 41.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23595CC6_3825_0E68_41B3_3DDE6F4F8E62"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2240AA0D_3825_35FB_41B2_B147367F4BF6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -130.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23D39B75_3825_0A2B_41B0_77A851037957"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23A8B417_3825_1E17_41C6_591844D2C48B"
},
{
 "thumbnailUrl": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_122143_00_496",
 "id": "panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
   "backwardYaw": 94.33,
   "yaw": -11.3,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
   "backwardYaw": -42.96,
   "yaw": 84.66,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "backwardYaw": -146.96,
   "yaw": -113.55,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E3A97C4D_FF4F_ED02_41B4_80871D640698",
  "this.overlay_E33B2936_FF4F_770E_41E5_5397A093F6A6",
  "this.overlay_E2731514_FF77_1F02_41C1_DEA13ED93A3A",
  "this.overlay_E20098BD_FF79_3503_41ED_B6DC2CBF62CF",
  "this.overlay_E198D65C_FF49_1D01_41E6_8C376C8BB6B9",
  "this.overlay_E1B06576_FF4F_1F0E_41E5_B5F700D49BA3",
  "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_tcap0",
  "this.overlay_07F73D45_17BB_EF73_41B5_EAB87DA29E3B",
  "this.overlay_0639459B_1785_1F17_41AC_33AC0E1112DE"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -52.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23333BE8_3825_0A39_41B6_05DDE15B3639"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 146.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_221B8924_3825_3628_41BD_6C6838B6609E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 40.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_224839F4_3825_3629_41C2_FB038D1C558E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 49.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25D590C9_3825_1678_41C3_ACA433BC4C97"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 109.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_237B4C71_3825_0E2B_41C3_DC79FB97C9B2"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_250A5118_3825_1619_41A6_4DC073EA7B5D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2446FF8B_3825_0AFF_41CA_FF5F2167A420"
},
{
 "thumbnailUrl": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_135139_00_528",
 "id": "panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "backwardYaw": 48.49,
   "yaw": -136.66,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0",
   "backwardYaw": 118.07,
   "yaw": -33.04,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
   "backwardYaw": 0.13,
   "yaw": 21.61,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "backwardYaw": -14.32,
   "yaw": -11.18,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC",
   "backwardYaw": -19.22,
   "yaw": -67.58,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E7C7CFC2_FFC9_6B06_41EC_9B42E860595D",
  "this.overlay_E6741CAF_FFCB_2D1E_41D6_2B971E778D14",
  "this.overlay_E745B8A6_FFCF_1501_41C7_3B0EBF2424B8",
  "this.overlay_E66BE5D2_FFC9_1F01_41EF_CC4A22315273",
  "this.overlay_E7355D83_FFC9_2F07_41CE_13EACB139F4C",
  "this.overlay_E6974A6A_FFC9_7506_41DD_D0378E25AE7A",
  "this.overlay_E709C0A9_FFCB_1502_41DD_BF0CFE10DD33",
  "this.overlay_E63FE5E1_FFCB_1F02_41E6_84803E41141A",
  "this.overlay_E68B5220_FFCA_F502_41E5_3D6F4923C07F",
  "this.overlay_E6CC868A_FF49_7D06_41DC_D531E419854C",
  "this.overlay_E728A4F0_FF4B_1D01_41E0_E64A76579FEA",
  "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2439EE92_3825_0AE9_41C1_F41118098A34"
},
{
 "shadowBlurRadius": 6,
 "id": "window_008E0B83_1785_6BF7_41AB_6E6C4D1A3160",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_00883B83_1785_6BF7_41A9_ACE3312FB6FB"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window17486"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_114651_00_493",
 "id": "panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "backwardYaw": -161.66,
   "yaw": -127.98,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
   "backwardYaw": 35.17,
   "yaw": 151.74,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1FFB39B4_09D1_B73D_4182_61025A0EBF6F",
  "this.overlay_1F0DD58E_09D0_DFED_41A3_14227C2B22D4",
  "this.overlay_1F3F236B_09D0_5B2B_4160_DA24EC4D1772",
  "this.overlay_1F681347_09D0_5B5A_417C_4C1A2D28E176",
  "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_123412_00_502",
 "id": "panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
   "backwardYaw": -100.11,
   "yaw": -139.55,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82",
   "backwardYaw": 127.87,
   "yaw": 108.4,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_tcap0",
  "this.overlay_03A455CA_129E_D3C2_418B_1F44560DF21B",
  "this.overlay_059BFDE4_14D2_8749_41AD_D011DDBFC904",
  "this.overlay_05F2A37D_14D1_8335_41AD_2BB31DF3CA49",
  "this.overlay_071D9F33_14CE_84CE_41AE_0B2F52662884"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowBlurRadius": 6,
 "id": "window_1D1348C0_129A_B03E_41A5_909AAB9E57B3",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_1D1578C0_129A_B03E_4196_C965F1BBC656"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window3874"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2262D2FE_3825_1A19_41CA_06EEAB0E2807"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24278E68_3825_0A39_41C0_B6577B0F4DFB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27D296A1_3825_3A28_41A3_09C5FFDAEB28"
},
{
 "shadowBlurRadius": 6,
 "id": "window_02CED149_179D_1773_41A2_0980F630CF1A",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_02CCF14E_179D_170E_41AB_153BB5437FFA"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window11809"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 55.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23A12A5E_3825_0A19_41CC_3FC06BBA175B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23A3A432_3825_1E28_416D_F074F3FA379A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2203824C_3825_1A78_41C9_A130ED3F4562"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -139.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25C3C0AF_3825_1637_41BC_4D6998E35358"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24C19E15_3825_0DE8_41C5_12748D62F5C0"
},
{
 "thumbnailUrl": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_134821_00_525",
 "id": "panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "backwardYaw": -138.05,
   "yaw": -108.43,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "backwardYaw": 114.05,
   "yaw": -26.78,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F1FF0DE3_FF5B_2F06_41D9_FFA6427B5FDB",
  "this.overlay_F1B2AE62_FF59_2D06_41E1_FB1767DF8912",
  "this.overlay_EEFF73C7_FF4F_1B0E_41D1_C58D6842B54B",
  "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0",
  "this.overlay_23FAD821_2C77_065C_41B3_F6D7596C543C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_141113_00_537",
 "id": "panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
   "backwardYaw": 129.38,
   "yaw": 135.53,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2F724C7A_0CA1_9040_4191_44420D0395EA",
  "this.overlay_2B87D74C_0CAE_F040_4199_DA03B6C1FCB7",
  "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_tcap0",
  "this.overlay_01766914_1785_1711_41B2_8943F6595C13"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -133.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_225593E5_3825_1A2B_41B8_4C09899493DA"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_135631_00_531",
 "id": "panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "backwardYaw": -17.46,
   "yaw": -103.75,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "backwardYaw": -114.68,
   "yaw": 59.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "backwardYaw": -45.72,
   "yaw": -19.85,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EC9DEACE_FF3B_F501_41E5_13F74E7D124A",
  "this.overlay_EB2B548F_FF3B_7D1E_41EF_A8A66778989A",
  "this.overlay_E9335AE4_FF39_1502_41E4_F0D2A0E71E96",
  "this.overlay_E845A761_FF37_3B03_41D4_00577A8254A5",
  "this.overlay_EAF4AE4F_FFC9_6D1E_419B_4D44AC2FADD2",
  "this.overlay_EAE05920_FFC9_3702_41C4_108C857F0D0F",
  "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24B17D20_3825_0E29_4191_6F28C58505E2"
},
{
 "thumbnailUrl": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_123206_00_501",
 "id": "panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": 21.61,
   "yaw": 0.13,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
   "backwardYaw": -139.55,
   "yaw": -100.11,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E430214F_FF49_171E_41EF_232CEEC3471B",
  "this.overlay_E5552A18_FF49_F502_41DD_F499097CF636",
  "this.overlay_E4192837_FF4B_150F_41EC_8B3D51CBFADD",
  "this.overlay_E32F5B63_FF49_2B06_41CB_4EA362AD0FED",
  "this.overlay_E03B02B6_FF49_350E_41D1_89E35A9709C1",
  "this.overlay_E03EFA70_FF4B_1502_41D4_56FE361EE955",
  "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_131659_00_517",
 "id": "panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
   "backwardYaw": -1.3,
   "yaw": -61.94,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
   "backwardYaw": -79.89,
   "yaw": 106.64,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "backwardYaw": -74.99,
   "yaw": 165.43,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "backwardYaw": -74.99,
   "yaw": -160.15,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "backwardYaw": -143.95,
   "yaw": 24.41,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1EE806F9_0219_E9BE_4141_529AE28F8C8A",
  "this.overlay_23B2DA32_0269_78B2_416F_563237330E2C",
  "this.overlay_1C2F3C32_0269_78B2_4138_39CCF2A71514",
  "this.overlay_1D53939F_026B_2871_4125_2C3AA9984224",
  "this.overlay_17ABF096_0CE1_70C0_41A7_2BC2CE8F2505",
  "this.overlay_17D52562_0CE7_F041_41A0_FFFBAFB05535",
  "this.overlay_1713285D_0CE3_9043_4181_F723C49B4AD1",
  "this.overlay_17BEFE9E_0CE2_90C1_4193_55B1F0561FFB",
  "this.overlay_10ED50E1_0CE2_F040_41A1_416A6E8E9F70",
  "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_114923_00_494",
 "id": "panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "backwardYaw": 151.74,
   "yaw": 35.17,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "backwardYaw": -120.71,
   "yaw": -56.02,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1C7EF1AB_09D7_D72A_4181_81E16EDA0046",
  "this.overlay_1EAA6443_09D0_5D5B_4192_140C9A7CD289",
  "this.overlay_1FA0CC4A_09D0_CD6A_4165_407B015F169D",
  "this.overlay_1EC0B63B_09D0_5D2B_4176_734613D38E29",
  "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_141310_00_538",
 "id": "panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8",
   "backwardYaw": 120.21,
   "yaw": 107.77,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024",
   "backwardYaw": -101.37,
   "yaw": -106.14,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "backwardYaw": -136.54,
   "yaw": -4.77,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_29D3C22A_0CA3_73C0_41A9_A0FADD7003E5",
  "this.overlay_29BCF9E2_0CA2_B041_419C_B0E91240900F",
  "this.overlay_2979DD02_0CA2_91C0_4178_9232DCD18ACA",
  "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_tcap0",
  "this.overlay_39485CF3_0DA1_9040_4188_E7730649CAA4",
  "this.overlay_39C3EB43_0DA1_9040_4192_AFB9B112B820"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23F5EB11_3825_0BEB_41C5_617B0391BD72"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2265098B_3825_36F8_4191_0620616B2F16"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2329CBA7_3825_0A28_41B1_8E4AAEB86FD2"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2570A183_3825_16EF_41C6_77B4C84FB08F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 58.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_257E0168_3825_1639_41AB_668BEE6BBAE4"
},
{
 "thumbnailUrl": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_132521_00_520",
 "id": "panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
   "backwardYaw": -124.61,
   "yaw": 26.55,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
   "backwardYaw": 94.71,
   "yaw": -121.34,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1A456073_0227_E8B2_4153_CBF266E55DBB",
  "this.overlay_1BDACC2B_0229_7852_4173_C793D7888FB2",
  "this.overlay_1BBBF46A_0229_28D2_4169_63526AB437EC",
  "this.overlay_1C4D1399_022B_687E_417A_2BF05E0E47C5",
  "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_256DC14D_3825_167B_41BC_73C54298812C"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24CE4DF0_3825_0E28_41CC_3517D539655B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22186281_3825_1AE8_41A8_095FB4C25F04"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23E1FAF9_3825_0A18_41CB_96397F19E55A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581C873_FF39_6E82_41E5_2D1192608196_camera"
},
{
 "thumbnailUrl": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_145056_00_543",
 "id": "panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
   "backwardYaw": 129.76,
   "yaw": 61.8,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
   "backwardYaw": 26.55,
   "yaw": -124.61,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_15CD63E4_023B_2FD6_4160_891233A13A04",
  "this.overlay_1A786F4C_0239_18D6_4166_24CDF666802B",
  "this.overlay_1B4DFF92_0239_1873_4166_540C39CB3EC7",
  "this.overlay_1B7FAEEF_0239_79D1_4161_9B166A581908",
  "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27DD1685_3825_3AEB_41B2_881262E4125B"
},
{
 "thumbnailUrl": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_134443_00_524",
 "id": "panorama_F581CE96_FF39_6382_41E7_E2755B74444F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "backwardYaw": 73.61,
   "yaw": 92.45,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0BEDBEC_FF5F_EB01_41E0_89A818E0A9A9",
  "this.overlay_DFC19158_FF5E_F702_41E6_B47D1983D700",
  "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22385891_3825_36EB_41BF_77A9F51FCFF7"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 66.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2268F2DA_3825_1A19_41C3_42BF9037688B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_camera"
},
{
 "thumbnailUrl": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_131916_00_519",
 "id": "panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
   "backwardYaw": 106.27,
   "yaw": -95.34,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
   "backwardYaw": -121.34,
   "yaw": 94.71,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1BB2E50A_0229_2852_4171_C1A6C865F894",
  "this.overlay_188B5662_0229_28D2_4161_94FC3A034751",
  "this.overlay_1BAF9E01_0227_184E_4161_2BB5E56F7209",
  "this.overlay_1840B10A_0227_2852_4175_1A8637B31D8F",
  "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_camera"
},
{
 "thumbnailUrl": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_140412_00_534",
 "id": "panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "backwardYaw": -81.4,
   "yaw": 46.6,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "backwardYaw": 40.07,
   "yaw": -105.51,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1311F24C_0229_28D6_417B_1174D06C74E6",
  "this.overlay_137112A6_022F_2853_40EB_C82CE272D480",
  "this.overlay_107FD52C_0229_2856_417F_9447627EDA96",
  "this.overlay_1404A2DF_09F1_B56A_4154_D12FA6EA3EA9",
  "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_125931_00_509",
 "id": "panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5",
   "backwardYaw": -117.31,
   "yaw": 94.96,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
   "backwardYaw": -127.5,
   "yaw": -111.54,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_15ED2950_0CFE_B040_41A3_B9A625214FC9",
  "this.overlay_1A445D72_0CFE_9041_41A2_D4D303A65715",
  "this.overlay_143F21DF_0CE1_907F_418D_67451AEE6971",
  "this.overlay_1492E473_0CE2_9047_4194_9BA2A603CB82",
  "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_tcap0",
  "this.overlay_1D388A17_12C6_119F_4199_713CEA3E3C32"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_135047_00_527",
 "id": "panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "backwardYaw": -103.75,
   "yaw": -17.46,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "backwardYaw": -54.39,
   "yaw": 124.73,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "backwardYaw": -54.39,
   "yaw": -150.98,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E95977A3_FFCB_1B06_41E2_1970B2B6AD06",
  "this.overlay_E9E6092C_FFC9_7702_41B1_5B25AFB25E4C",
  "this.overlay_E8F6D31F_FFC9_1B3E_41ED_90771D56D3CF",
  "this.overlay_E94680C5_FFCF_3502_41E2_8E561DACB48D",
  "this.overlay_E9163482_FFCF_3D06_41C0_A0F70CB8ABD3",
  "this.overlay_E9FC3BDC_FFCF_2B02_41D5_6CC7D919E89A",
  "this.overlay_E7B4027B_FFFF_1506_41CD_594383504EBE",
  "this.overlay_E717144D_FFF9_1D02_41EC_60776BEFCE16",
  "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22070231_3825_1A28_41AA_22B4B06F09B9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_259EC046_3825_1669_41B5_9711F2388E07"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 137.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22711360_3825_1A28_41C6_028F3BC38A1F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_223CE865_3825_362B_41A1_E306800A7A81"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25A83FDA_3825_0A19_41C4_023090801BE1"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22280822_3825_3629_41A6_FDDB7BD6870F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24FB1DC7_3825_0E77_41BA_0CF50CD59183"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.22,
  "pitch": 0,
  "hfov": 114
 },
 "id": "camera_24628F39_3825_0A1B_4187_015223496001"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2215F93E_3825_3618_41A3_CCECF7AA545A"
},
{
 "shadowBlurRadius": 6,
 "id": "window_00F793DD_1787_1B12_4151_6C4A3C478564",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_00F573DE_1787_1B0E_41A6_B502D8C7191E"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window18714"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_camera"
},
{
 "shadowBlurRadius": 6,
 "id": "window_01067F26_1785_6B3E_41AA_5B1E5AE2091B",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_01042F26_1785_6B3E_41A3_4AD6A7494439"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window20114"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_camera"
},
{
 "items": [
  {
   "media": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
   "camera": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96",
   "camera": "this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD",
   "camera": "this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "camera": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
   "camera": "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "camera": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9",
   "camera": "this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
   "camera": "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC",
   "camera": "this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "camera": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
   "camera": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0",
   "camera": "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F",
   "camera": "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
   "camera": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "camera": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "camera": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
   "camera": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "camera": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
   "camera": "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
   "camera": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "camera": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
   "camera": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
   "camera": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E",
   "camera": "this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
   "camera": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
   "camera": "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "camera": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5",
   "camera": "this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
   "camera": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "camera": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0",
   "camera": "this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82",
   "camera": "this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
   "camera": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "camera": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5",
   "camera": "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
   "camera": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
   "camera": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34",
   "camera": "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196",
   "camera": "this.panorama_F581C873_FF39_6E82_41E5_2D1192608196_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001",
   "camera": "this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A",
   "camera": "this.panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "camera": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4",
   "camera": "this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577",
   "camera": "this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "camera": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8",
   "camera": "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_238C9A95_3825_0AE8_41C8_9A86671B8EA0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_camera"
},
{
 "thumbnailUrl": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_115213_00_495",
 "id": "panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
   "backwardYaw": 92.45,
   "yaw": -27.51,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "backwardYaw": -127.98,
   "yaw": -161.66,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71",
   "backwardYaw": -127.98,
   "yaw": 146.59,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38",
   "backwardYaw": -56.02,
   "yaw": -120.71,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E1C75258_FF49_3502_41EB_469040BFA8A0",
  "this.overlay_DB8A29FF_FF37_16FF_41B9_1DDFDC2B066C",
  "this.overlay_1D916582_09CF_DFDA_418D_B65F55B15140",
  "this.overlay_1DDE5CD1_09D0_4D76_4183_C7B9C227DEC6",
  "this.overlay_119E6D0B_09D0_CCEA_41A0_E5A9EA29FC64",
  "this.overlay_1C5F270B_09D1_DCEA_4193_6D5BD9679D63",
  "this.overlay_11F0E92C_09D0_572E_4180_C8114B3E43D2",
  "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 79.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_233DFBCA_3825_0A79_41AD_591431E60B8E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23AC3A44_3825_0A69_419B_C79495732821"
},
{
 "thumbnailUrl": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_130650_00_512",
 "id": "panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34",
   "backwardYaw": -103.88,
   "yaw": -95.34,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
   "backwardYaw": 122.64,
   "yaw": 74.36,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_158DCCAF_0CE1_B0C0_41A3_7361D38E89D0",
  "this.overlay_10E4420C_0CE2_B3C0_4179_BCF9D7E77E61",
  "this.overlay_16237C57_0CE2_9040_4198_473B4DD16FDF",
  "this.overlay_16C78D09_0CE3_B1C3_41A5_1255355A22C3",
  "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581CE96_FF39_6382_41E7_E2755B74444F_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -158.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_227069D8_3825_3619_41A6_54E553F4117C"
},
{
 "thumbnailUrl": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_141653_00_539",
 "id": "panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "backwardYaw": 107.77,
   "yaw": 120.21,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2A8BCD82_0CA6_B0C0_4190_B5099F725DF9",
  "this.overlay_2B7FECF3_0CA6_B047_416C_5B030D326B2B",
  "this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_tcap0",
  "this.overlay_01746767_1785_3B3E_41B6_68C73E902CB8"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_220D18D0_3825_3669_41C1_E3E0329F6669"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2727A6BC_3825_3A18_41C6_4172FBA1AA9C"
},
{
 "shadowBlurRadius": 6,
 "id": "window_0295844A_1785_3D71_41AF_B35BF57028E3",
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "width": 300,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "titleTextDecoration": "none",
 "minHeight": 20,
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "modal": true,
 "borderRadius": 5,
 "headerVerticalAlign": "middle",
 "bodyBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "title": "",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "bodyPaddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "height": 200,
 "closeButtonIconHeight": 12,
 "bodyPaddingBottom": 5,
 "gap": 10,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "scrollBarVisible": "rollOver",
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "bodyPaddingLeft": 5,
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "class": "Window",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_0295E44A_1785_3D71_4153_76B49FBB3BBF"
 ],
 "shadowColor": "#000000",
 "headerPaddingLeft": 10,
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "footerHeight": 5,
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window7372"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_122635_00_498",
 "id": "panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "backwardYaw": -113.55,
   "yaw": -146.96,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F",
   "backwardYaw": 92.45,
   "yaw": 73.61,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -11.18,
   "yaw": -14.32,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E4BD7A25_FF59_7502_41EA_7AD440D14BC8",
  "this.overlay_E4567C35_FF59_2D02_41A8_C1C0499BDD42",
  "this.overlay_E41FE2CD_FF59_1502_41E4_58915321C18A",
  "this.overlay_E4148E91_FF5B_2D03_41E0_DA62496D5BDD",
  "this.overlay_E4415295_FF5B_7502_41DC_29DB4ABA25D3",
  "this.overlay_E44B5EC3_FF5B_2D06_41ED_0AF41A95AF15",
  "this.overlay_115AD6B3_09D1_BD3B_415C_24D291A468DF",
  "this.overlay_10CFB141_09D0_B756_4194_C18B419FE5FA",
  "this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_130011_00_510",
 "id": "panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "backwardYaw": 94.96,
   "yaw": -117.31,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1B21F2EF_0CE3_B040_41A3_F167E1D66066",
  "this.overlay_14F3DF70_0CE3_9041_4199_5A63E0D1E046",
  "this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_tcap0",
  "this.overlay_03C9F41B_1785_1D17_41B6_9FB7464E076A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 68.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25BAA004_3825_15E9_41CB_E229E6BF2460"
},
{
 "thumbnailUrl": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_144834_00_542",
 "id": "panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A",
   "backwardYaw": 61.8,
   "yaw": 129.76,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
   "backwardYaw": -67.08,
   "yaw": -24.24,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_109E218B_022B_E852_4180_5FA72D9736DD",
  "this.overlay_17AE5928_0228_F85F_4178_02919FF21DBD",
  "this.overlay_1518F8C5_023F_39D6_4164_A296A47029F4",
  "this.overlay_1A433FE6_0238_F7D2_4164_1665B8234FC2",
  "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_131455_00_514",
 "id": "panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2",
   "backwardYaw": -112.42,
   "yaw": 36.55,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "backwardYaw": 129.38,
   "yaw": -70.72,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
   "backwardYaw": 77.46,
   "yaw": 138.8,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_23F1F86F_026B_38D1_4174_EDF0BCAF864E",
  "this.overlay_26D08991_026B_184E_4168_AE78D2C15297",
  "this.overlay_24B2A298_0269_287E_416F_34EF08B3E8CC",
  "this.overlay_27BD9C0A_0269_3853_4161_0469CABDF2FF",
  "this.overlay_180859EB_0CA2_9040_41A7_92AD4B861D34",
  "this.overlay_19D11526_0CE1_B1C0_4196_AD0BDEFA4380",
  "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24572FB8_3825_0A19_41A9_16327E3D57F7"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 118.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_231BEC22_3825_0E29_41B8_B98B4DBFA5DF"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_258C6029_3825_163B_41C9_888F8E2EB059"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 33.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_224C3378_3825_1A18_41B4_2F5DF5611DA4"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25E1F07B_3825_161F_41CA_F237202E08FB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_222BD808_3825_35F9_41CA_C238ECC119F8"
},
{
 "thumbnailUrl": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_145706_00_545",
 "id": "panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -33.04,
   "yaw": 118.07,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E18EFF23_FF57_2B06_41DF_8E22A2E227D2",
  "this.overlay_E0AB8398_FF57_1B02_41CD_0571F0A3A65A",
  "this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -61.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23EBAAE1_3825_0A28_41C7_76515A5BFAF9"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_camera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_234F7C8D_3825_0EFB_41AD_257318ED82FB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_camera"
},
{
 "thumbnailUrl": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_131811_00_518",
 "id": "panorama_F5ECBD01_FF39_267E_41D3_145261DB322E",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": 106.64,
   "yaw": -79.89,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B",
   "backwardYaw": -95.34,
   "yaw": 106.27,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1843489B_0219_3872_417D_E2176424A2EA",
  "this.overlay_1969D2AD_0219_2856_4153_AD6911A16674",
  "this.overlay_19D90D79_0219_18B1_4180_449620FDE574",
  "this.overlay_194EB99E_021B_3873_4152_5EDB6F359E07",
  "this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_125613_00_508",
 "id": "panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36",
   "backwardYaw": 138.8,
   "yaw": 77.46,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1",
   "backwardYaw": -111.54,
   "yaw": -127.5,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_19FC51D0_0CE6_B041_4163_FF4CF42C45C0",
  "this.overlay_143E8516_0CE7_91C0_4180_283DCB816695",
  "this.overlay_1A5F80A8_0CE6_B0C1_4196_46807D0A4E8F",
  "this.overlay_1B937A7E_0CE1_9040_41A3_4D9028D74E9B",
  "this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_tcap0",
  "this.overlay_03DBEC1E_179F_2D11_41B4_BBE2A9B99001"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_114312_00_491",
 "id": "panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8",
   "backwardYaw": 84.66,
   "yaw": -42.96,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95",
   "backwardYaw": -27.51,
   "yaw": 92.45,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DF536162_FF4B_1706_41E9_5DBE19D74F6A",
  "this.overlay_DF1D189E_FF4B_153E_41DB_587FC7604461",
  "this.overlay_DDDB6F5A_FF49_6B06_41D6_82CB9248FDBE",
  "this.overlay_12EE7DAC_09F0_4F2D_4187_FDD9174E7BFD",
  "this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2206A8EC_3825_3639_41B9_3E4B9EEADD08"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 36.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_227819BF_3825_3618_4151_8DB151A975B2"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22109957_3825_3617_416F_DF3165DB6BC7"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 134.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24E75DA3_3825_0E2F_41C7_B55E871A761A"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_22465391_3825_1AEB_41B7_66680D8F0D57"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -144.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2231B8B0_3825_3628_41AF_2B651838EDB7"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 123.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_226D22B6_3825_1A29_418C_EBCE87864D24"
},
{
 "thumbnailUrl": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_130503_00_511",
 "id": "panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848",
   "backwardYaw": -61.94,
   "yaw": -1.3,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
   "backwardYaw": 74.36,
   "yaw": 122.64,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_14EC7E06_0CE1_73C1_4181_CB5199DA1723",
  "this.overlay_16824197_0CE6_90C0_41A5_DFF3E8CE9D1A",
  "this.overlay_159B2F58_0CE7_9040_4198_076C0D18302F",
  "this.overlay_15BB71DD_0CE1_9043_41A1_901BC011A198",
  "this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_227E29A5_3825_3628_41C0_931B75E93885"
},
{
 "thumbnailUrl": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_141841_00_540",
 "id": "panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742",
   "backwardYaw": -106.14,
   "yaw": -101.37,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_tcap0",
  "this.overlay_3FF5134C_0C61_9040_41A1_07B7E37A2391",
  "this.overlay_39772289_0C62_B0C0_41A5_C3E1153CF1B6",
  "this.overlay_3FBE74F4_0C63_9040_41A8_A23331120A6D",
  "this.overlay_39E31725_0C63_91C0_4165_07F2DFECFE36",
  "this.overlay_3935D994_0C62_90C1_415C_904EEDABEF84"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_130834_00_513",
 "id": "panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4",
   "backwardYaw": -95.34,
   "yaw": -103.88,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_154AA596_0CE2_90C0_417B_DC1BBD16260F",
  "this.overlay_102DAA6E_0CE2_9040_419F_5089CEE95A76",
  "this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23073C08_3825_0DF9_419A_7BB24ED38352"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23B61A7A_3825_0A19_419E_414A895146B4"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27C5C66A_3825_3A39_41C4_B987411DEE2F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -120.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23653C57_3825_0E17_4141_F82A1EDD2B40"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2381BAAE_3825_0A39_4192_FD25BCFB9F46"
},
{
 "thumbnailUrl": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_144752_00_541",
 "id": "panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344",
   "backwardYaw": -24.24,
   "yaw": -67.08,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB",
   "backwardYaw": -30.77,
   "yaw": -130.38,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
   "backwardYaw": -105.51,
   "yaw": 40.07,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_128B0FEB_09F0_4B2B_419B_702ECCC5CA1B",
  "this.overlay_13863286_09F3_F5DD_41A2_E52FC2D68533",
  "this.overlay_124C3BD9_09F0_4B76_41A0_DC8749ACDC4B",
  "this.overlay_156B1852_09F0_D57A_4151_9E5885E440A2",
  "this.overlay_24F4041B_0CBE_97C7_419E_6AF7CFDD4BF3",
  "this.overlay_2EC5FC1F_0CA1_97FF_41A3_4FA78BD81C25",
  "this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_camera"
},
{
 "thumbnailUrl": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_135304_00_529",
 "id": "panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50",
   "backwardYaw": 124.73,
   "yaw": -54.39,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104",
   "backwardYaw": -136.66,
   "yaw": 48.49,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E85D5D3B_FFF9_6F07_41D6_55552E85C315",
  "this.overlay_E5DD4C03_FFFA_ED06_41EB_D42A7359B2C1",
  "this.overlay_E6F0AA34_FFF9_F502_41DA_23651A767CFE",
  "this.overlay_E7785FDB_FFF9_6B06_41ED_401668077244",
  "this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -153.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_251CC132_3825_1629_41C9_7032B5135191"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 65.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2494FD79_3825_0E1B_41B6_A6352ED5B403"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -72.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23449CA9_3825_0E3B_41C4_1FBFB5D62497"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_253970FD_3825_1618_41CA_58FA64FDFA01"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -28.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24745F60_3825_0A29_419A_23E8E45C31EE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_camera"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2277C345_3825_1A6B_41A4_EB37CD0FD75B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_25EF6061_3825_162B_41AC_C52B68DF60F5"
},
{
 "thumbnailUrl": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220825_140046_00_533",
 "id": "panorama_F5EB0784_FF39_2187_41EF_7C13A026372D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B",
   "backwardYaw": -38.94,
   "yaw": 89.94,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC",
   "backwardYaw": 46.6,
   "yaw": -81.4,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156",
   "backwardYaw": -108.43,
   "yaw": -138.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0E8EA230_01E9_284F_4150_39DCEAA4D128",
  "this.overlay_11F050AD_01EB_E856_4136_967B5F615FC6",
  "this.overlay_0E11B049_01E9_28DE_4143_5BA5F2A23AFD",
  "this.overlay_0E1A75EA_01E9_6BD2_4173_00E3BE872532",
  "this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_tcap0",
  "this.overlay_27BBBB74_32EE_9A5F_4172_1A5A382FF18F",
  "this.overlay_26615621_32EA_8DF9_41A2_727A140BDB06"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_226A7972_3825_3628_4177_F80FC40D72DE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_224163AE_3825_1A39_41A8_5804FA3611E4"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 13,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "height": 641,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "class": "Container",
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.64,
 "verticalAlign": "top",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "bottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "height": 118,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "class": "Container",
 "data": {
  "name": "--LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "layout": "absolute",
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 52.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_0_1_0_map.gif",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.63,
   "hfov": 82.2
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2218E73F_026F_E8B1_4168_BAA4A44A6711",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5, this.camera_23D39B75_3825_0A2B_41B0_77A851037957); this.mainPlayList.set('selectedIndex', 27)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 61.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25,
   "hfov": 7.71
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 61.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2478F8FD_0279_39B6_4174_0AE776432956",
   "pitch": -13.25,
   "hfov": 7.71,
   "distance": 100
  }
 ],
 "id": "overlay_236C03E8_026F_6FDE_417C_31493FF7D188",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -112.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_2_1_0_map.gif",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19,
   "hfov": 110.82
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2072A3C8_0269_6FDE_415A_5DBAA81A0C08",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36, this.camera_23DFDB49_3825_0A7B_41CB_910A58BA6FC0); this.mainPlayList.set('selectedIndex', 29)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -117.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.34,
   "hfov": 7.27
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -117.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247878FE_0279_39B2_4178_71100BE1FB95",
   "pitch": -16.34,
   "hfov": 7.27,
   "distance": 100
  }
 ],
 "id": "overlay_23EBF596_0269_2873_4175_B376E1242C2C",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 134.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_4_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.16,
   "hfov": 87.98
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1DB94355_12C6_7793_4192_E403CACEADEB",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -114.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_0_1_0_map.gif",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.68,
   "hfov": 97.66
  }
 ],
 "useHandCursor": true,
 "id": "overlay_0EB9497D_01E9_18B1_4175_633D340286EF",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD, this.camera_23653C57_3825_0E17_4141_F82A1EDD2B40); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -38.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_1_1_0_map.gif",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22,
   "hfov": 107.98
  }
 ],
 "useHandCursor": true,
 "id": "overlay_11E89235_01E8_E8B6_4152_FC634BA8A8FA",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D, this.camera_234F7C8D_3825_0EFB_41AD_257318ED82FB); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -44.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.9,
   "hfov": 10.62
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -44.04,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1885EA1D_0239_7871_4145_0152AC990E61",
   "pitch": -17.9,
   "hfov": 10.62,
   "distance": 100
  }
 ],
 "id": "overlay_0E0DC5D8_01E7_2BFE_4159_64D8B19BD568",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -123.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.35,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -123.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18858A1D_0239_7871_416F_0289D46C3D14",
   "pitch": -2.35,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_0E079B7D_01E7_18B6_416F_279630E03C10",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 129.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_4_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57,
   "hfov": 89.49
  }
 ],
 "useHandCursor": true,
 "id": "overlay_06633C31_128B_F05F_41B2_169F086CFED9",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36, this.camera_237B4C71_3825_0E2B_41C3_DC79FB97C9B2); this.mainPlayList.set('selectedIndex', 29)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 132.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.1,
   "hfov": 7.28
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 132.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0661F487_14B1_85D5_41A2_A3F160EC0A46",
   "pitch": -24.1,
   "hfov": 7.28,
   "distance": 100
  }
 ],
 "id": "overlay_0627A36B_128A_D0C2_4182_BC44CBC38506",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_0268679B_179B_1B17_41A5_3CF3FF4BE50A",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Welcome to Hedar Sanitation Services </SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText9803"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_29D9F18A_0CAF_90C1_41A3_7924D0FB8A43",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB, this.camera_24FB1DC7_3825_0E77_41BA_0CF50CD59183); this.mainPlayList.set('selectedIndex', 41)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 129.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_1_1_6_map.gif",
      "width": 186,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.49,
   "hfov": 102.41
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2826236A_0CAE_B041_4180_66CA34CC4EE6",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577, this.camera_24CE4DF0_3825_0E28_41CC_3517D539655B); this.mainPlayList.set('selectedIndex', 43)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -142.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_2_1_6_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.19,
   "hfov": 76.61
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2A6C48D2_0CA1_7040_41A3_5648E161FB04",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F56890_FF39_6F9E_41BB_ED300D126577, this.camera_24C19E15_3825_0DE8_41C5_12748D62F5C0); this.mainPlayList.set('selectedIndex', 43)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -175.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.07,
   "hfov": 4.71
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -175.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_252F5953_0C62_F040_418A_48104B04AD3E",
   "pitch": -6.07,
   "hfov": 4.71,
   "distance": 100
  }
 ],
 "id": "overlay_28699E27_0CA1_B3C0_419A_2939153B51CD",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -6.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05,
   "hfov": 4.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -6.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_252F8953_0C62_F040_4165_651F7DF4CADC",
   "pitch": -1.05,
   "hfov": 4.74,
   "distance": 100
  }
 ],
 "id": "overlay_29C9A930_0CA2_91C0_41A6_CC21BAB063F4",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -30.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.83,
   "hfov": 70.57
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2D69E456_0CA2_9041_419F_DEF03A4DD1C1",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C, this.camera_25D590C9_3825_1678_41C3_ACA433BC4C97); this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -37.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37,
   "hfov": 8.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_1_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37,
   "yaw": -37.11
  }
 ],
 "id": "overlay_2E34CDDB_0CA1_9047_418B_BD8913E26014",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 74.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.05,
   "hfov": 121.92
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2E5763E3_0CA2_9047_41A0_11C8B0D67A03",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4, this.camera_252690E2_3825_1628_41B8_6E4813BB920F); this.mainPlayList.set('selectedIndex', 42)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 68.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.83,
   "hfov": 5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 68.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25293951_0C62_F040_4185_3FD55B13888B",
   "pitch": 0.83,
   "hfov": 5,
   "distance": 100
  }
 ],
 "id": "overlay_2D3B1157_0CA2_9040_419D_ABD01079701A",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -136.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 140
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.6,
   "hfov": 88.02
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2FADBC9B_0CA3_90C0_4189_098D9402B8FD",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742, this.camera_253970FD_3825_1618_41CA_58FA64FDFA01); this.mainPlayList.set('selectedIndex', 44)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -160.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "hfov": 5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -160.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2529F951_0C62_F040_4147_82BFA4F6C761",
   "pitch": -1.43,
   "hfov": 5,
   "distance": 100
  }
 ],
 "id": "overlay_2F089316_0CA3_91C0_41A4_98C72F1CAE84",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 127.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0_HS_0_1_0_map.gif",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.72,
   "hfov": 114.63
  }
 ],
 "useHandCursor": true,
 "id": "overlay_034054B1_129D_F05E_41A2_3EE7A2634B38",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0, this.camera_2727A6BC_3825_3A18_41C6_4172FBA1AA9C); this.mainPlayList.set('selectedIndex', 30)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -140.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0_HS_1_1_0_map.gif",
      "width": 172,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.56,
   "hfov": 77.64
  }
 ],
 "useHandCursor": true,
 "id": "overlay_0144B691_129A_505E_4194_52CEB6F31EA7",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0, this.camera_222BD808_3825_35F9_41CA_C238ECC119F8); this.mainPlayList.set('selectedIndex', 30)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 175.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 175.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_06562493_14B1_85CE_418F_5B7C777AA272",
   "pitch": -3.77,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_06020263_129A_B0C2_417A_791A103E2B9C",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 114.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54,
   "hfov": 58.67
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EC113BCF_FF3B_EB1E_41E8_851AC777E9EB",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156, this.camera_24628F39_3825_0A1B_4187_015223496001); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 121.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.28,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 121.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5C3DE44_FFCB_2D02_41B3_7CB3151AD9B9",
   "pitch": 1.28,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_EB52C5C2_FF3B_7F06_41EE_3FCA88748D61",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -155,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_2_1_0_map.gif",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "hfov": 48.96
  }
 ],
 "useHandCursor": true,
 "id": "overlay_ECA95279_FF39_1503_41D8_5C079C9AB314",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -45.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2,
   "hfov": 114.41
  }
 ],
 "useHandCursor": true,
 "id": "overlay_ED900D42_FF39_2F06_41D0_B9FD5D0EC0DA",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD, this.camera_24102F08_3825_0BF8_41B9_247E704D7A0E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -43.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.67,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -43.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5C2CE44_FFCB_2D02_41EA_1DD52B8E5958",
   "pitch": 0.67,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_EB5C629C_FF3F_1501_41C8_5E6AE6F010B2",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 165.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 165.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8DF3692_FFC9_1D06_41CA_32C96EBD0A15",
   "pitch": 0.95,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E957125C_FFD7_1502_41E8_A806B05DA206",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 168.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_7_1_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.19,
   "hfov": 22.73
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E73FB609_FFC9_3D02_41DF_575A1F327DC9",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 23.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.03,
   "hfov": 4.11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 23.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A481AC8_179C_F571_419D_35DCFE59B770",
   "pitch": -7.03,
   "hfov": 4.11,
   "distance": 100
  }
 ],
 "id": "overlay_036F3FAC_179B_2B32_419D_A0D96923A8AD",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_01067F26_1785_6B3E_41AA_5B1E5AE2091B, null, false)"
  }
 ]
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_E76B017E_FFCF_17FE_41E6_1B349F51464F",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.39vh;\">Hello! Welcome to Kabba Holding company.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText29047"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -19.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37,
   "hfov": 64.37
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E0DE279C_FF59_1B02_41E0_2B0917708254",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_2329CBA7_3825_0A28_41B1_8E4AAEB86FD2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -12.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07,
   "hfov": 4.82
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -12.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1884BA1D_0239_7871_4162_EB1B8842753A",
   "pitch": -4.07,
   "hfov": 4.82,
   "distance": 100
  }
 ],
 "id": "overlay_DE87B9DA_FF5B_7706_41DF_6C794F219CB5",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 94.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39,
   "hfov": 66.36
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E1D308CB_FF4B_1506_41E3_75C75AB5CB55",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8, this.camera_24572FB8_3825_0A19_41A9_16327E3D57F7); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 70.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.27,
   "hfov": 4.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 70.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18847A1C_0239_7877_4158_A2D9E7431F6C",
   "pitch": 4.27,
   "hfov": 4.13,
   "distance": 100
  }
 ],
 "id": "overlay_E10EC96D_FF49_1703_41E2_C6A5B4FDBEB1",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 16.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 109
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65,
   "hfov": 80.55
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2CF2191E_0CA2_91C0_41A5_A6ADBA298389",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -11.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "hfov": 5.92
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_1_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "yaw": -11.74
  }
 ],
 "id": "overlay_2D93A152_0CA3_F040_41A8_EFE27C53870B",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 103.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.87,
   "hfov": 70.01
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2C1526E5_0CA3_7040_41A7_19759B966580",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 79.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.71,
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 79.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_252BD950_0C62_F040_41A7_6E3403AD9466",
   "pitch": 1.71,
   "hfov": 4.73,
   "distance": 100
  }
 ],
 "id": "overlay_2C92FCC2_0CA2_B040_418A_E3E9D10135B8",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -80.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.02,
   "hfov": 5.43
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -80.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0FFF04F9_1785_3D13_419B_42F6B3E3BD4C",
   "pitch": -1.02,
   "hfov": 5.43,
   "distance": 100
  }
 ],
 "id": "overlay_03DA20E1_1785_F532_4192_923BEEE6DE7F",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_0295844A_1785_3D71_41AF_B35BF57028E3, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -74.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_0_1_0_map.gif",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "hfov": 111.95
  }
 ],
 "useHandCursor": true,
 "id": "overlay_10D250E0_0C9E_9040_417E_71C82D3DE870",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_258C6029_3825_163B_41C9_888F8E2EB059); this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 125.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_1_1_0_map.gif",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.29,
   "hfov": 110.76
  }
 ],
 "useHandCursor": true,
 "id": "overlay_13E48E2E_0C9F_93C1_4143_C1E438B67980",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 87.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39,
   "hfov": 4.44
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 87.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2524994E_0C62_F040_4167_1150F67C3C84",
   "pitch": -1.39,
   "hfov": 4.44,
   "distance": 100
  }
 ],
 "id": "overlay_122BFD14_0C9F_71C1_4194_84A5C0F71C66",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 16.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "hfov": 4.44
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 16.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2524C94E_0C62_F040_4195_D2EC3B9460D0",
   "pitch": -1.43,
   "hfov": 4.44,
   "distance": 100
  }
 ],
 "id": "overlay_124BBAEC_0CA1_9041_4158_84F12D91B6BC",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 22.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.55,
   "hfov": 56.92
  }
 ],
 "useHandCursor": true,
 "id": "overlay_13D84CF5_0CA1_F043_41A7_59E66B2D2697",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581FFCB_FF39_6182_41E2_D6EB76625001, this.camera_259EC046_3825_1669_41B5_9711F2388E07); this.mainPlayList.set('selectedIndex', 39)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -107.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.17,
   "hfov": 8.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_5_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.17,
   "yaw": -107.73
  }
 ],
 "id": "overlay_12B55702_0CA3_B1C0_4194_1B5894DAA553",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581C873_FF39_6E82_41E5_2D1192608196_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_11235A0D_0CA2_93C0_41A3_DE1690A97B52",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581C873_FF39_6E82_41E5_2D1192608196, this.camera_23073C08_3825_0DF9_419A_7BB24ED38352); this.mainPlayList.set('selectedIndex', 38)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 28.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08,
   "hfov": 76.99
  }
 ],
 "useHandCursor": true,
 "id": "overlay_13EA657D_0CA1_9040_41A0_F9AA034AB803",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -45.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -45.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_252A994F_0C62_F040_4161_4E698CDBDB55",
   "pitch": -2.01,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_135BA117_0CA6_91C0_4197_35BABF94B2F0",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -4.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71,
   "hfov": 4.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.74,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_3_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71,
   "yaw": -4.54
  }
 ],
 "id": "overlay_133D1AF4_0CA7_9040_4188_AF27A7B9BAE3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -143.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_0_1_0_map.gif",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.64,
   "hfov": 81.7
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1D11EE39_026B_38B1_4172_3C11B1168A24",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_23A8B417_3825_1E17_41C6_591844D2C48B); this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -142.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.92,
   "hfov": 11.52
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -142.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247648FC_0279_39B6_417B_69BE74C10EBD",
   "pitch": -21.92,
   "hfov": 11.52,
   "distance": 100
  }
 ],
 "id": "overlay_205B82BD_0269_69B6_417E_C447E2ACD52F",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1DCF995A_0269_38F2_4180_FAD83E8B9E54",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2, this.camera_23A3A432_3825_1E28_416D_F074F3FA379A); this.mainPlayList.set('selectedIndex', 28)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 36.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.77,
   "hfov": 10.09
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 36.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247788FD_0279_39B6_4180_95FD4E0871A4",
   "pitch": -18.77,
   "hfov": 10.09,
   "distance": 100
  }
 ],
 "id": "overlay_20DC66B5_0268_E9B1_4175_EC8CFC0251FB",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -54.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.32,
   "hfov": 7.53
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -54.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0653D490_14B1_85CA_41A4_F4391CFD9D9F",
   "pitch": 2.32,
   "hfov": 7.53,
   "distance": 100
  }
 ],
 "id": "overlay_1C358800_129A_703E_41A8_F2C946D45BA0",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_1D1348C0_129A_B03E_41A5_909AAB9E57B3, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -113.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_0_1_0_map.gif",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.12,
   "hfov": 77.51
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E3A97C4D_FF4F_ED02_41B4_80871D640698",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C, this.camera_224C3378_3825_1A18_41B4_2F5DF5611DA4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -98.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.88,
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -98.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18825A1A_0239_7873_4172_39E3A541F0FE",
   "pitch": -3.88,
   "hfov": 3.54,
   "distance": 100
  }
 ],
 "id": "overlay_E33B2936_FF4F_770E_41E5_5397A093F6A6",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -11.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_2_1_0_map.gif",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.5,
   "hfov": 79.75
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E2731514_FF77_1F02_41C1_DEA13ED93A3A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582A940_FF3B_2EFE_41E9_44C71671137F, this.camera_2277C345_3825_1A6B_41A4_EB37CD0FD75B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 10.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.82,
   "hfov": 4.12
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1882CA1B_0239_7871_4176_490E290CCA3B",
   "pitch": 6.82,
   "hfov": 4.12,
   "distance": 100
  }
 ],
 "id": "overlay_E20098BD_FF79_3503_41ED_B6DC2CBF62CF",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 84.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_4_1_0_map.gif",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.74,
   "hfov": 107.08
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E198D65C_FF49_1D01_41E6_8C376C8BB6B9",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8, this.camera_22711360_3825_1A28_41C6_028F3BC38A1F); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 77.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.57,
   "hfov": 4.56
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 77.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_15ED6AFF_09F0_D52A_419D_E9CE44DF7FC5",
   "pitch": 15.57,
   "hfov": 4.56,
   "distance": 100
  }
 ],
 "id": "overlay_E1B06576_FF4F_1F0E_41E5_B5F700D49BA3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 89.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_6_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.59,
   "hfov": 27.7
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_6_0.png",
      "width": 470,
      "class": "ImageResourceLevel",
      "height": 123
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.59,
   "yaw": 89.94,
   "hfov": 27.7,
   "distance": 50
  }
 ],
 "id": "overlay_07F73D45_17BB_EF73_41B5_EAB87DA29E3B",
 "data": {
  "label": "CEO OFFICE"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -20.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49,
   "hfov": 24.62
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_7_0.png",
      "width": 424,
      "class": "ImageResourceLevel",
      "height": 424
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49,
   "yaw": -20.73,
   "hfov": 24.62,
   "distance": 50
  }
 ],
 "id": "overlay_0639459B_1785_1F17_41AC_33AC0E1112DE",
 "data": {
  "label": "General Manager"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -136.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_0_1_0_map.gif",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29,
   "hfov": 88.17
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E7C7CFC2_FFC9_6B06_41EC_9B42E860595D",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41, this.camera_2397AAC8_3825_0A78_41C0_B646FA42D4E0); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -161.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.3,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -161.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46C6809_FF57_1502_41B3_DE6747219800",
   "pitch": 1.3,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E6741CAF_FFCB_2D1E_41D6_2B971E778D14",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 108.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "hfov": 6.24
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 108.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46C2809_FF57_1502_41B5_BEBE2E3FE7D5",
   "pitch": 6.22,
   "hfov": 6.24,
   "distance": 100
  }
 ],
 "id": "overlay_E745B8A6_FFCF_1501_41C7_3B0EBF2424B8",
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_E765417E_FFCF_17FE_41DF_8EED84DCE410, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -67.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_4_1_0_map.gif",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.42,
   "hfov": 39.62
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E66BE5D2_FFC9_1F01_41EF_CC4A22315273",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC, this.camera_23CA4B2A_3825_0A39_4197_3D1AC6C81157); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -33.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_5_1_0_map.gif",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "hfov": 20.58
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E7355D83_FFC9_2F07_41CE_13EACB139F4C",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0, this.camera_23EBAAE1_3825_0A28_41C7_76515A5BFAF9); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -11.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_6_1_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "hfov": 16.84
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E6974A6A_FFC9_7506_41DD_D0378E25AE7A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C, this.camera_23F5EB11_3825_0BEB_41C5_617B0391BD72); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -62.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -62.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E465080E_FF57_151E_41E9_A9CF9511080D",
   "pitch": 0.11,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E709C0A9_FFCB_1502_41DD_BF0CFE10DD33",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -26.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.3,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -26.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E465280E_FF57_151E_41E5_DC525ED0598D",
   "pitch": 0.3,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E63FE5E1_FFCB_1F02_41E6_84803E41141A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -14.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.04,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -14.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E465C80E_FF57_151E_41D6_55F0941AE15E",
   "pitch": 0.04,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E68B5220_FFCA_F502_41E5_3D6F4923C07F",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 21.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_10_1_0_map.gif",
      "width": 188,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.34,
   "hfov": 36.7
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E6CC868A_FF49_7D06_41DC_D531E419854C",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9, this.camera_23E1FAF9_3825_0A18_41CB_96397F19E55A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 25.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.3,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 25.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E465880F_FF57_151E_41DE_E248530E5EF7",
   "pitch": 1.3,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E728A4F0_FF4B_1D01_41E0_E64A76579FEA",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_00883B83_1785_6BF7_41A9_ACE3312FB6FB",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Welcome to Ruby Travel Solutions</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText17487"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 151.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_0_1_0_map.gif",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.47,
   "hfov": 54.36
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1FFB39B4_09D1_B73D_4182_61025A0EBF6F",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38, this.camera_2231B8B0_3825_3628_41AF_2B651838EDB7); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 162.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.92,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 162.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_15935B1E_09D0_D4EA_4179_204A892872CA",
   "pitch": -2.92,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_1F0DD58E_09D0_DFED_41A3_14227C2B22D4",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -127.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.62,
   "hfov": 86.17
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1F3F236B_09D0_5B2B_4160_DA24EC4D1772",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95, this.camera_22385891_3825_36EB_41BF_77A9F51FCFF7); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -119.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -119.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1592AB1E_09D0_D4EA_419D_72AEF8A0BED3",
   "pitch": -0.86,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_1F681347_09D0_5B5A_417C_4C1A2D28E176",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_03A455CA_129E_D3C2_418B_1F44560DF21B",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82, this.camera_23333BE8_3825_0A39_41B6_05DDE15B3639); this.mainPlayList.set('selectedIndex', 31)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 124.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.02,
   "hfov": 4.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 124.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E14ADA9_14CE_87DA_41B1_18202FDAAA98",
   "pitch": -5.02,
   "hfov": 4.13,
   "distance": 100
  }
 ],
 "id": "overlay_059BFDE4_14D2_8749_41AD_D011DDBFC904",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -139.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_2_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.87,
   "hfov": 83.46
  }
 ],
 "useHandCursor": true,
 "id": "overlay_05F2A37D_14D1_8335_41AD_2BB31DF3CA49",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9, this.camera_233DFBCA_3825_0A79_41AD_591431E60B8E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -132.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.01,
   "hfov": 4.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -132.33,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0E175DAA_14CE_87DE_41B3_52E541198634",
   "pitch": -3.01,
   "hfov": 4.39,
   "distance": 100
  }
 ],
 "id": "overlay_071D9F33_14CE_84CE_41AE_0B2F52662884",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_1D1578C0_129A_B03E_4196_C965F1BBC656",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">This is the Finance room</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText3875"
 },
 "paddingTop": 10
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_02CCF14E_179D_170E_41AB_153BB5437FFA",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Welcome to PPS! </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Pesco Pest Solution</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText11810"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -26.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.5,
   "hfov": 58.91
  }
 ],
 "useHandCursor": true,
 "id": "overlay_F1FF0DE3_FF5B_2F06_41D9_FFA6427B5FDB",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96, this.camera_24AB6CE5_3825_0E28_41C0_E476BCCD586E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -28.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.13,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -28.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EF1F1D9D_FF49_2F03_41DD_17CFDC83B314",
   "pitch": -2.13,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_F1B2AE62_FF59_2D06_41E1_FB1767DF8912",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -108.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27,
   "hfov": 92.81
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EEFF73C7_FF4F_1B0E_41D1_C58D6842B54B",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D, this.camera_23595CC6_3825_0E68_41B3_3DDE6F4F8E62); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -100.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72,
   "hfov": 5.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_4_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72,
   "yaw": -100.02
  }
 ],
 "id": "overlay_23FAD821_2C77_065C_41B3_F6D7596C543C",
 "data": {
  "label": "Arrow Blue Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 135.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36,
   "hfov": 89.83
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2F724C7A_0CA1_9040_4191_44420D0395EA",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4, this.camera_2215F93E_3825_3618_41A3_CCECF7AA545A); this.mainPlayList.set('selectedIndex', 42)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 155.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.72,
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 155.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_252C4954_0C62_F040_417B_667E955DD8AC",
   "pitch": 3.72,
   "hfov": 4.73,
   "distance": 100
  }
 ],
 "id": "overlay_2B87D74C_0CAE_F040_4199_DA03B6C1FCB7",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -1.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.65,
   "hfov": 6.03
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -1.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D5262DE_1787_1511_41AE_D88E99DF3212",
   "pitch": -27.65,
   "hfov": 6.03,
   "distance": 100
  }
 ],
 "id": "overlay_01766914_1785_1711_41B2_8943F6595C13",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_00F793DD_1787_1B12_4151_6C4A3C478564, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 59.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.55,
   "hfov": 89.08
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EC9DEACE_FF3B_F501_41E5_13F74E7D124A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B, this.camera_2494FD79_3825_0E1B_41B6_A6352ED5B403); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -19.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51,
   "hfov": 65.18
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EB2B548F_FF3B_7D1E_41EF_A8A66778989A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96, this.camera_24E75DA3_3825_0E2F_41C7_B55E871A761A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -21.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.55,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -21.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5C51E45_FFCB_2D02_41E9_FF87767A8ED5",
   "pitch": -1.55,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E9335AE4_FF39_1502_41E4_F0D2A0E71E96",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 27.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.05,
   "hfov": 10.77
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 27.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5C5DE45_FFCB_2D02_41E6_9EEAB1D4E0A5",
   "pitch": -28.05,
   "hfov": 10.77,
   "distance": 50
  }
 ],
 "id": "overlay_E845A761_FF37_3B03_41D4_00577A8254A5",
 "data": {
  "label": "Arrow 02c Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -103.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.05,
   "hfov": 98.38
  }
 ],
 "useHandCursor": true,
 "id": "overlay_EAF4AE4F_FFC9_6D1E_419B_4D44AC2FADD2",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50, this.camera_24820D55_3825_0E6B_41CC_16EEE622CC07); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -106.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.12,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -106.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E5C45E45_FFCB_2D02_41E3_2656395E341F",
   "pitch": -3.12,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_EAE05920_FFC9_3702_41C4_108C857F0D0F",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.26,
   "hfov": 52.59
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E430214F_FF49_171E_41EF_232CEEC3471B",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_227069D8_3825_3619_41A6_54E553F4117C); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -2.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59,
   "hfov": 3.54
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -2.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_189F1A19_0239_7871_417C_0E5B03C0EF02",
   "pitch": -4.59,
   "hfov": 3.54,
   "distance": 100
  }
 ],
 "id": "overlay_E5552A18_FF49_F502_41DD_F499097CF636",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 66.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_2_1_0_map.gif",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.47,
   "hfov": 83.23
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E4192837_FF4B_150F_41EC_8B3D51CBFADD",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 57.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_3_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.07,
   "hfov": 9.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 57.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_189FFA19_0239_7871_4170_3A31CA91858C",
   "pitch": -17.07,
   "hfov": 9.94,
   "distance": 50
  }
 ],
 "id": "overlay_E32F5B63_FF49_2B06_41CB_4EA362AD0FED",
 "data": {
  "label": "Arrow 05b Right"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_4_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E03B02B6_FF49_350E_41D1_89E35A9709C1",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0, this.camera_224839F4_3825_3629_41C2_FB038D1C558E); this.mainPlayList.set('selectedIndex', 30)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -101.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_5_0_6_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.35,
   "hfov": 9.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -101.32,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18800A19_0239_7871_417B_DB698FAE9A24",
   "pitch": -34.35,
   "hfov": 9.2,
   "distance": 100
  }
 ],
 "id": "overlay_E03EFA70_FF4B_1502_41D4_56FE361EE955",
 "data": {
  "label": "Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 106.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_0_1_0_map.gif",
      "width": 135,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "hfov": 67.11
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1EE806F9_0219_E9BE_4141_529AE28F8C8A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E, this.camera_226A7972_3825_3628_4177_F80FC40D72DE); this.mainPlayList.set('selectedIndex', 25)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 121.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_1_0_6_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.28,
   "hfov": 7.46
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 121.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247588FB_0279_39B2_416B_CE6F6B1181B3",
   "pitch": -14.28,
   "hfov": 7.46,
   "distance": 50
  }
 ],
 "id": "overlay_23B2DA32_0269_78B2_416F_563237330E2C",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 24.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_2_1_0_map.gif",
      "width": 154,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "hfov": 75.65
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1C2F3C32_0269_78B2_4138_39CCF2A71514",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5, this.camera_227819BF_3825_3618_4151_8DB151A975B2); this.mainPlayList.set('selectedIndex', 27)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 2.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.78,
   "hfov": 10.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 2.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247518FC_0279_39B6_4149_8E3034F86130",
   "pitch": -19.78,
   "hfov": 10.5,
   "distance": 100
  }
 ],
 "id": "overlay_1D53939F_026B_2871_4125_2C3AA9984224",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -61.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_4_1_0_map.gif",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.3,
   "hfov": 86.59
  }
 ],
 "useHandCursor": true,
 "id": "overlay_17ABF096_0CE1_70C0_41A7_2BC2CE8F2505",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38, this.camera_22109957_3825_3617_416F_DF3165DB6BC7); this.mainPlayList.set('selectedIndex', 35)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -22.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.04,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -22.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25582945_0C62_F040_41A5_301B20C72830",
   "pitch": 2.04,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_17D52562_0CE7_F041_41A0_FFFBAFB05535",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 165.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_6_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57,
   "hfov": 27.68
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1713285D_0CE3_9043_4181_F723C49B4AD1",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581C873_FF39_6E82_41E5_2D1192608196, this.camera_2265098B_3825_36F8_4191_0620616B2F16); this.mainPlayList.set('selectedIndex', 38)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -160.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_7_1_0_map.gif",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.64,
   "hfov": 39.51
  }
 ],
 "useHandCursor": true,
 "id": "overlay_17BEFE9E_0CE2_90C1_4193_55B1F0561FFB",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581C873_FF39_6E82_41E5_2D1192608196, this.camera_227E29A5_3825_3628_41C0_931B75E93885); this.mainPlayList.set('selectedIndex', 38)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -153.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.05,
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -153.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25592946_0C62_F040_4173_B6CD6723BFD3",
   "pitch": 4.05,
   "hfov": 4.73,
   "distance": 100
  }
 ],
 "id": "overlay_10ED50E1_0CE2_F040_41A1_416A6E8E9F70",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -56.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_0_1_0_map.gif",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.32,
   "hfov": 56.16
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1C7EF1AB_09D7_D72A_4181_81E16EDA0046",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95, this.camera_2446FF8B_3825_0AFF_41CA_FF5F2167A420); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1EAA6443_09D0_5D5B_4192_140C9A7CD289",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71, this.camera_24745F60_3825_0A29_419A_23E8E45C31EE); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 11.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.11,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 11.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_15905B20_09D0_D4D6_4197_96727857527C",
   "pitch": -3.11,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_1FA0CC4A_09D0_CD6A_4165_407B015F169D",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -55.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -55.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_159FBB21_09D0_D4D6_4190_23A648548CD4",
   "pitch": -2.7,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_1EC0B63B_09D0_5D2B_4176_734613D38E29",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -106.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.2,
   "hfov": 102.57
  }
 ],
 "useHandCursor": true,
 "id": "overlay_29D3C22A_0CA3_73C0_41A9_A0FADD7003E5",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024, this.camera_22070231_3825_1A28_41AA_22B4B06F09B9); this.mainPlayList.set('selectedIndex', 46)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56,
   "hfov": 72.91
  }
 ],
 "useHandCursor": true,
 "id": "overlay_29BCF9E2_0CA2_B041_419C_B0E91240900F",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB, this.camera_2203824C_3825_1A78_41C9_A130ED3F4562); this.mainPlayList.set('selectedIndex', 41)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2979DD02_0CA2_91C0_4178_9232DCD18ACA",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8, this.camera_2570A183_3825_16EF_41C6_77B4C84FB08F); this.mainPlayList.set('selectedIndex', 45)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 104.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 104.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3CDEEF77_0D9F_7040_4191_E9E3ADBBDB98",
   "pitch": -1.51,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_39485CF3_0DA1_9040_4188_E7730649CAA4",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -79.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.03,
   "hfov": 4.11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -79.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3CDECF77_0D9F_7040_4197_B2817776C392",
   "pitch": -7.03,
   "hfov": 4.11,
   "distance": 100
  }
 ],
 "id": "overlay_39C3EB43_0DA1_9040_4192_AFB9B112B820",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 26.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_0_1_0_map.gif",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.11,
   "hfov": 106.1
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1A456073_0227_E8B2_4153_CBF266E55DBB",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A, this.camera_23A12A5E_3825_0A19_41CC_3FC06BBA175B); this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -121.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.97,
   "hfov": 103.39
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1BDACC2B_0229_7852_4173_C793D7888FB2",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B, this.camera_23B61A7A_3825_0A19_419E_414A895146B4); this.mainPlayList.set('selectedIndex', 24)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -6.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_4_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.96,
   "hfov": 10.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -6.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2472D8F4_0279_39B6_417A_8A53CB75B823",
   "pitch": -15.96,
   "hfov": 10.49,
   "distance": 50
  }
 ],
 "id": "overlay_1BBBF46A_0229_28D2_4169_63526AB437EC",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -124.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.98,
   "hfov": 11.47
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -124.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247298F4_0279_39B6_417E_69D9FE01B00C",
   "pitch": -15.98,
   "hfov": 11.47,
   "distance": 50
  }
 ],
 "id": "overlay_1C4D1399_022B_687E_417A_2BF05E0E47C5",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_15CD63E4_023B_2FD6_4160_891233A13A04",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344, this.camera_250A5118_3825_1619_41A6_4DC073EA7B5D); this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 60.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89,
   "hfov": 10.44
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 60.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247028F3_0279_39B2_4150_FD56337BB27E",
   "pitch": -16.89,
   "hfov": 10.44,
   "distance": 100
  }
 ],
 "id": "overlay_1A786F4C_0239_18D6_4166_24CDF666802B",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -124.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_2_1_6_map.gif",
      "width": 169,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98,
   "hfov": 95.1
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1B4DFF92_0239_1873_4166_540C39CB3EC7",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E, this.camera_251CC132_3825_1629_41C9_7032B5135191); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -120.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.01,
   "hfov": 10.05
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -120.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247188F3_0279_39B2_4176_CCA38C71AEB4",
   "pitch": -15.01,
   "hfov": 10.05,
   "distance": 100
  }
 ],
 "id": "overlay_1B7FAEEF_0239_79D1_4161_9B166A581908",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 92.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.46,
   "hfov": 77.95
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E0BEDBEC_FF5F_EB01_41E0_89A818E0A9A9",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C, this.camera_22465391_3825_1AEB_41B7_66680D8F0D57); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 79.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35,
   "hfov": 4.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 79.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18857A1C_0239_7877_416E_23CA2C8E9EB8",
   "pitch": -4.35,
   "hfov": 4.13,
   "distance": 100
  }
 ],
 "id": "overlay_DFC19158_FF5E_F702_41E6_B47D1983D700",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581CE96_FF39_6382_41E7_E2755B74444F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1BB2E50A_0229_2852_4171_C1A6C865F894",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E, this.camera_257E0168_3825_1639_41AB_668BEE6BBAE4); this.mainPlayList.set('selectedIndex', 23)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 87.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.16,
   "hfov": 10.78
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 87.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1E9E290D_0219_F856_4177_5D5B861AD1D3",
   "pitch": -19.16,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_188B5662_0229_28D2_4161_94FC3A034751",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1BAF9E01_0227_184E_4161_2BB5E56F7209",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECBD01_FF39_267E_41D3_145261DB322E, this.camera_256DC14D_3825_167B_41BC_73C54298812C); this.mainPlayList.set('selectedIndex', 25)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -97.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_3_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.16,
   "hfov": 12.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -97.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1E9FD90D_0219_F856_416A_8C8821EE7ABD",
   "pitch": -20.16,
   "hfov": 12.13,
   "distance": 100
  }
 ],
 "id": "overlay_1840B10A_0227_2852_4175_1A8637B31D8F",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1311F24C_0229_28D6_417B_1174D06C74E6",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0784_FF39_2187_41EF_7C13A026372D, this.camera_25F2D095_3825_16EB_41C5_2CC4EFB91875); this.mainPlayList.set('selectedIndex', 18)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 37.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.09,
   "hfov": 11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 37.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_240E88F1_0279_39CE_417F_4C2C6E9F7402",
   "pitch": -16.09,
   "hfov": 11,
   "distance": 100
  }
 ],
 "id": "overlay_137112A6_022F_2853_40EB_C82CE272D480",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_107FD52C_0229_2856_417F_9447627EDA96",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C, this.camera_25C3C0AF_3825_1637_41BC_4D6998E35358); this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -139.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_4_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.1,
   "hfov": 10.28
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -139.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2DDA273C_09F0_BB2D_41A3_34D388A64077",
   "pitch": -34.1,
   "hfov": 10.28,
   "distance": 100
  }
 ],
 "id": "overlay_1404A2DF_09F1_B56A_4154_D12FA6EA3EA9",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -111.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05,
   "hfov": 115.26
  }
 ],
 "useHandCursor": true,
 "id": "overlay_15ED2950_0CFE_B040_41A3_B9A625214FC9",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38, this.camera_2381BAAE_3825_0A39_4192_FD25BCFB9F46); this.mainPlayList.set('selectedIndex', 32)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -108.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -108.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2522E94A_0C62_F040_4182_3746B907C728",
   "pitch": -2.44,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_1A445D72_0CFE_9041_41A2_D4D303A65715",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 94.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53,
   "hfov": 114.08
  }
 ],
 "useHandCursor": true,
 "id": "overlay_143F21DF_0CE1_907F_418D_67451AEE6971",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5, this.camera_238C9A95_3825_0AE8_41C8_9A86671B8EA0); this.mainPlayList.set('selectedIndex', 34)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 65.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 65.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2523B94A_0C62_F040_41A8_C643C6AC975E",
   "pitch": -1.08,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_1492E473_0CE2_9047_4194_9BA2A603CB82",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -14.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_4_1_0_map.gif",
      "width": 136,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89,
   "hfov": 54.11
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1D388A17_12C6_119F_4199_713CEA3E3C32",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -18.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.47,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -18.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46EF806_FF57_150E_41EB_DD411C21D778",
   "pitch": -2.47,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E95977A3_FFCB_1B06_41E2_1970B2B6AD06",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -28.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.2,
   "hfov": 9.51
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -28.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46EA806_FF57_150E_4177_A47011FCEBA4",
   "pitch": -29.2,
   "hfov": 9.51,
   "distance": 100
  }
 ],
 "id": "overlay_E9E6092C_FFC9_7702_41B1_5B25AFB25E4C",
 "data": {
  "label": "Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -17.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.24,
   "hfov": 114.66
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E8F6D31F_FFC9_1B3E_41ED_90771D56D3CF",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD, this.camera_27C5C66A_3825_3A39_41C4_B987411DEE2F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -92.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06,
   "hfov": 52.72
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E94680C5_FFCF_3502_41E2_8E561DACB48D",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -106.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.03,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -106.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46D6807_FF57_150E_41D3_6EA9C85B7B88",
   "pitch": 1.03,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E9163482_FFCF_3D06_41C0_A0F70CB8ABD3",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_5_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E9FC3BDC_FFCF_2B02_41D5_6CC7D919E89A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41, this.camera_27DD1685_3825_3AEB_41B2_881262E4125B); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -150.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_6_1_6_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.1,
   "hfov": 59.61
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E7B4027B_FFFF_1506_41CD_594383504EBE",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41, this.camera_27D296A1_3825_3A28_41A3_09C5FFDAEB28); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 150.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.47,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 150.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46D3808_FF57_1502_41D6_BC7EE7FA4AC7",
   "pitch": -1.47,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E717144D_FFF9_1D02_41EC_60776BEFCE16",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_00F573DE_1787_1B0E_41A6_B502D8C7191E",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Welcome to Aim Ultra </SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Education Consultancy</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18715"
 },
 "paddingTop": 10
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_01042F26_1785_6B3E_41A3_4AD6A7494439",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">CEO</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText20115"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -27.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56,
   "hfov": 108.01
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E1C75258_FF49_3502_41EB_469040BFA8A0",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8, this.camera_221E6267_3825_1A28_41A8_56CA1B8E6720); this.mainPlayList.set('selectedIndex', 13)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -53.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "hfov": 4.08
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -53.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1883FA1B_0239_7871_4175_E19CC5D5E5FF",
   "pitch": -3.47,
   "hfov": 4.08,
   "distance": 100
  }
 ],
 "id": "overlay_DB8A29FF_FF37_16FF_41B9_1DDFDC2B066C",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -161.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_2_1_0_map.gif",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58,
   "hfov": 35.93
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1D916582_09CF_DFDA_418D_B65F55B15140",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71, this.camera_22186281_3825_1AE8_41A8_095FB4C25F04); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -165.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -165.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_15911B1F_09D0_D4EA_4197_E7FAD8FEE9ED",
   "pitch": -1.7,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_1DDE5CD1_09D0_4D76_4183_C7B9C227DEC6",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 146.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_4_1_0_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.54,
   "hfov": 67.98
  }
 ],
 "useHandCursor": true,
 "id": "overlay_119E6D0B_09D0_CCEA_41A0_E5A9EA29FC64",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71, this.camera_2213229A_3825_1A19_41C8_20EF1A302E17); this.mainPlayList.set('selectedIndex', 14)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -120.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_5_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.48,
   "hfov": 45.35
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1C5F270B_09D1_DCEA_4193_6D5BD9679D63",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38, this.camera_226D22B6_3825_1A29_418C_EBCE87864D24); this.mainPlayList.set('selectedIndex', 16)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -120.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.06,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -120.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1592FB02_09F0_D4DA_416F_D6D9DA45A92A",
   "pitch": -3.06,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_11F0E92C_09D0_572E_4180_C8114B3E43D2",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_158DCCAF_0CE1_B0C0_41A3_7361D38E89D0",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38, this.camera_223CE865_3825_362B_41A1_E306800A7A81); this.mainPlayList.set('selectedIndex', 35)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 64.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 64.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2526094C_0C62_F040_4169_5EEE28C6237A",
   "pitch": -0.75,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_10E4420C_0CE2_B3C0_4179_BCF9D7E77E61",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_16237C57_0CE2_9040_4198_473B4DD16FDF",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34, this.camera_22229842_3825_3669_41B8_E1C201E41F62); this.mainPlayList.set('selectedIndex', 37)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -116.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.34,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -116.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2526C94D_0C62_F040_4196_E87115162426",
   "pitch": 3.34,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_16C78D09_0CE3_B1C3_41A5_1255355A22C3",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 120.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52,
   "hfov": 117.5
  }
 ],
 "useHandCursor": true,
 "id": "overlay_2A8BCD82_0CA6_B0C0_4190_B5099F725DF9",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742, this.camera_23449CA9_3825_0E3B_41C4_1FBFB5D62497); this.mainPlayList.set('selectedIndex', 44)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 131.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.31,
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 131.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25325955_0C62_F040_4172_39E047378E8B",
   "pitch": -2.31,
   "hfov": 4.73,
   "distance": 100
  }
 ],
 "id": "overlay_2B7FECF3_0CA6_B047_416C_5B030D326B2B",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -33.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.35,
   "hfov": 6.3
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -33.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0D5172E0_1787_1531_4186_C91AAFD29836",
   "pitch": -33.35,
   "hfov": 6.3,
   "distance": 100
  }
 ],
 "id": "overlay_01746767_1785_3B3E_41B6_68C73E902CB8",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_008E0B83_1785_6BF7_41AB_6E6C4D1A3160, null, false)"
  }
 ]
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "htmlText_0295E44A_1785_3D71_4153_76B49FBB3BBF",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:16px;\">Jon link Man Power Solution</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText7373"
 },
 "paddingTop": 10
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -14.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_0_1_0_map.gif",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.68,
   "hfov": 73.53
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E4BD7A25_FF59_7502_41EA_7AD440D14BC8",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_227DF326_3825_1A28_41CC_41C4E94CD162); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 73.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_1_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.08,
   "hfov": 69.98
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E4567C35_FF59_2D02_41A8_C1C0499BDD42",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581CE96_FF39_6382_41E7_E2755B74444F, this.camera_2262D2FE_3825_1A19_41CA_06EEAB0E2807); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 151.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_2_1_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.33,
   "hfov": 28.23
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E41FE2CD_FF59_1502_41E4_58915321C18A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 92.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.09,
   "hfov": 4.69
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 92.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18814A1A_0239_7873_4156_24EBF7108883",
   "pitch": 8.09,
   "hfov": 4.69,
   "distance": 100
  }
 ],
 "id": "overlay_E4148E91_FF5B_2D03_41E0_DA62496D5BDD",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 158.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.77,
   "hfov": 3.53
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 158.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E464C80F_FF57_151E_41ED_1C8BC1A08470",
   "pitch": 6.77,
   "hfov": 3.53,
   "distance": 100
  }
 ],
 "id": "overlay_E4415295_FF5B_7502_41DC_29DB4ABA25D3",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.57,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E464E810_FF57_1502_41D0_25615415A6F8",
   "pitch": -3.57,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E44B5EC3_FF5B_2D06_41ED_0AF41A95AF15",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -146.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_6_1_0_map.gif",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.58,
   "hfov": 69.96
  }
 ],
 "useHandCursor": true,
 "id": "overlay_115AD6B3_09D1_BD3B_415C_24D291A468DF",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8, this.camera_2268F2DA_3825_1A19_41C3_42BF9037688B); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -173.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.82,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -173.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_12997C52_09D3_CD7A_4179_1D2590FD0DFD",
   "pitch": 2.82,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_10CFB141_09D0_B756_4194_C18B419FE5FA",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -117.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.51,
   "hfov": 122.13
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1B21F2EF_0CE3_B040_41A3_F167E1D66066",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1, this.camera_224163AE_3825_1A39_41A8_5804FA3611E4); this.mainPlayList.set('selectedIndex', 33)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -139.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.75,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -139.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2520194B_0C62_F040_4171_B4EAF4F95FB6",
   "pitch": -1.75,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_14F3DF70_0CE3_9041_4199_5A63E0D1E046",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 97.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72,
   "hfov": 7.5
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 97.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0FF774EE_1785_3D31_41B3_ADE5A902D2A2",
   "pitch": -5.72,
   "hfov": 7.5,
   "distance": 100
  }
 ],
 "id": "overlay_03C9F41B_1785_1D17_41B6_9FB7464E076A",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_0266479B_179B_1B17_41A8_E0F1A4B35CEB, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -24.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.55,
   "hfov": 113.74
  }
 ],
 "useHandCursor": true,
 "id": "overlay_109E218B_022B_E852_4180_5FA72D9736DD",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C, this.camera_22024909_3825_37FB_41C8_FE302814FDAC); this.mainPlayList.set('selectedIndex', 20)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -26.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.48,
   "hfov": 10.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -26.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_240F78F2_0279_39B2_4177_5CDE1AE45108",
   "pitch": -20.48,
   "hfov": 10.15,
   "distance": 100
  }
 ],
 "id": "overlay_17AE5928_0228_F85F_4178_02919FF21DBD",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 129.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_2_1_0_map.gif",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.48,
   "hfov": 107.52
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1518F8C5_023F_39D6_4164_A296A47029F4",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A, this.camera_2206A8EC_3825_3639_41B9_3E4B9EEADD08); this.mainPlayList.set('selectedIndex', 22)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 158.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.09,
   "hfov": 10.17
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 158.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2470C8F3_0279_39B2_4162_82262143A690",
   "pitch": -16.09,
   "hfov": 10.17,
   "distance": 100
  }
 ],
 "id": "overlay_1A433FE6_0238_F7D2_4164_1665B8234FC2",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE026B_FF39_2282_41B5_0F2204858344_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 36.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_0_1_0_map.gif",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.17,
   "hfov": 79.78
  }
 ],
 "useHandCursor": true,
 "id": "overlay_23F1F86F_026B_38D1_4174_EDF0BCAF864E",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2, this.camera_2439EE92_3825_0AE9_41C1_F41118098A34); this.mainPlayList.set('selectedIndex', 28)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 34.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.55,
   "hfov": 7.01
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 34.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2479A8FE_0279_39B2_416D_C98A95BCB798",
   "pitch": -14.55,
   "hfov": 7.01,
   "distance": 100
  }
 ],
 "id": "overlay_26D08991_026B_184E_4168_AE78D2C15297",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -70.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.41,
   "hfov": 92.03
  }
 ],
 "useHandCursor": true,
 "id": "overlay_24B2A298_0269_287E_416F_34EF08B3E8CC",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B, this.camera_240BBEB8_3825_0A18_41B0_5948DC954EAF); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -74.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_3_0_6_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.49,
   "hfov": 7.86
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -74.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247938FF_0279_39B2_416E_6058D024FC66",
   "pitch": -17.49,
   "hfov": 7.86,
   "distance": 50
  }
 ],
 "id": "overlay_27BD9C0A_0269_3853_4161_0469CABDF2FF",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_4_1_0_map.gif",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.29,
   "hfov": 81.42
  }
 ],
 "useHandCursor": true,
 "id": "overlay_180859EB_0CA2_9040_41A7_92AD4B861D34",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38, this.camera_241F3EE3_3825_0A28_41BF_65C37A82A06E); this.mainPlayList.set('selectedIndex', 32)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 166.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.99,
   "hfov": 5.86
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 166.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_255CE949_0C62_F040_415C_F65D46D3F258",
   "pitch": 7.99,
   "hfov": 5.86,
   "distance": 100
  }
 ],
 "id": "overlay_19D11526_0CE1_B1C0_4196_AD0BDEFA4380",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 118.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.65,
   "hfov": 120.63
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E18EFF23_FF57_2B06_41DF_8E22A2E227D2",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_221B8924_3825_3628_41BD_6C6838B6609E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 111.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.26,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 111.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18848A1C_0239_7877_4135_FB5233D400D0",
   "pitch": 2.26,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_E0AB8398_FF57_1B02_41CD_0571F0A3A65A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1843489B_0219_3872_417D_E2176424A2EA",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B, this.camera_25E1F07B_3825_161F_41CA_F237202E08FB); this.mainPlayList.set('selectedIndex', 24)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 104.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.4,
   "hfov": 10.89
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 104.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2474D8F5_0279_39B6_417A_51D8183B3E44",
   "pitch": -17.4,
   "hfov": 10.89,
   "distance": 100
  }
 ],
 "id": "overlay_1969D2AD_0219_2856_4153_AD6911A16674",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_19D90D79_0219_18B1_4180_449620FDE574",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_25EF6061_3825_162B_41AC_C52B68DF60F5); this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -76.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78,
   "hfov": 9.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -76.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_247408F6_0279_39B2_4169_0E488F421C9F",
   "pitch": -18.78,
   "hfov": 9.85,
   "distance": 100
  }
 ],
 "id": "overlay_194EB99E_021B_3873_4152_5EDB6F359E07",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 77.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75,
   "hfov": 89.51
  }
 ],
 "useHandCursor": true,
 "id": "overlay_19FC51D0_0CE6_B041_4163_FF4CF42C45C0",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36, this.camera_25A83FDA_3825_0A19_41C4_023090801BE1); this.mainPlayList.set('selectedIndex', 29)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 71.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.75,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 71.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_255DB949_0C62_F040_41A1_FC7C4E159FD2",
   "pitch": 2.75,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_143E8516_0CE7_91C0_4180_283DCB816695",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -127.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_2_1_0_map.gif",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "hfov": 107.17
  }
 ],
 "useHandCursor": true,
 "id": "overlay_1A5F80A8_0CE6_B0C1_4196_46807D0A4E8F",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1, this.camera_25BAA004_3825_15E9_41CB_E229E6BF2460); this.mainPlayList.set('selectedIndex', 33)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -148.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -148.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25220949_0C62_F040_418F_A27DE9C6D09E",
   "pitch": -0.86,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_1B937A7E_0CE1_9040_41A3_4D9028D74E9B",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -6.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.52,
   "hfov": 5.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -6.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0FF5C4ED_1785_3D33_41B2_F218B859B30C",
   "pitch": 2.52,
   "hfov": 5.16,
   "distance": 100
  }
 ],
 "id": "overlay_03DBEC1E_179F_2D11_41B4_BBE2A9B99001",
 "data": {
  "label": "Info 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_02CED149_179D_1773_41A2_0980F630CF1A, null, false)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -42.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_0_1_0_map.gif",
      "width": 176,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.1,
   "hfov": 116.51
  }
 ],
 "useHandCursor": true,
 "id": "overlay_DF536162_FF4B_1706_41E9_5DBE19D74F6A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8, this.camera_24D46E3F_3825_0A17_41C3_D8C3FABF2247); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -35.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.4,
   "hfov": 4.73
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -35.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_18858A1C_0239_7877_416B_5ACB07144C48",
   "pitch": 12.4,
   "hfov": 4.73,
   "distance": 100
  }
 ],
 "id": "overlay_DF1D189E_FF4B_153E_41DB_587FC7604461",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 92.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.1,
   "hfov": 94.35
  }
 ],
 "useHandCursor": true,
 "id": "overlay_DDDB6F5A_FF49_6B06_41D6_82CB9248FDBE",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F58225F7_FF3B_E182_41EE_5523C7237D95, this.camera_24278E68_3825_0A39_41C0_B6577B0F4DFB); this.mainPlayList.set('selectedIndex', 15)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 108.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.32,
   "hfov": 4.72
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 108.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_181BEB0C_0C66_B1C0_41A7_EDE3619436F4",
   "pitch": -4.32,
   "hfov": 4.72,
   "distance": 100
  }
 ],
 "id": "overlay_12EE7DAC_09F0_4F2D_4187_FDD9174E7BFD",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_14EC7E06_0CE1_73C1_4181_CB5199DA1723",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EB0441_FF39_26FE_41EC_E9764933A848, this.camera_231BEC22_3825_0E29_41B8_B98B4DBFA5DF); this.mainPlayList.set('selectedIndex', 26)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 122.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_1_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.83,
   "hfov": 120.96
  }
 ],
 "useHandCursor": true,
 "id": "overlay_16824197_0CE6_90C0_41A5_DFF3E8CE9D1A",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4, this.camera_23110C3B_3825_0E1E_41C3_45C9AAF41A8C); this.mainPlayList.set('selectedIndex', 36)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 103.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 103.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2521694C_0C62_F040_417F_9E1C97B1084D",
   "pitch": 1.44,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_159B2F58_0CE7_9040_4198_076C0D18302F",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -29.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.98,
   "hfov": 5.23
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.23,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_3_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.98,
   "yaw": -29.44
  }
 ],
 "id": "overlay_15BB71DD_0CE1_9043_41A1_901BC011A198",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -101.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.7,
   "hfov": 112.71
  }
 ],
 "useHandCursor": true,
 "id": "overlay_3FF5134C_0C61_9040_41A1_07B7E37A2391",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742, this.camera_220D18D0_3825_3669_41C1_E3E0329F6669); this.mainPlayList.set('selectedIndex', 44)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -112.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.57,
   "hfov": 4.72
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -112.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_37489E52_0C61_B041_415B_77B698DD636F",
   "pitch": -4.57,
   "hfov": 4.72,
   "distance": 100
  }
 ],
 "id": "overlay_39772289_0C62_B0C0_41A5_C3E1153CF1B6",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 161.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.03,
   "hfov": 35.53
  }
 ],
 "useHandCursor": true,
 "id": "overlay_3FBE74F4_0C63_9040_41A8_A23331120A6D",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -170.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_3_1_0_map.gif",
      "width": 142,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "hfov": 16.74
  }
 ],
 "useHandCursor": true,
 "id": "overlay_39E31725_0C63_91C0_4165_07F2DFECFE36",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 174.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55,
   "hfov": 4.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 174.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_374F8E53_0C61_B047_41A6_5DC3DA27FEF2",
   "pitch": -0.55,
   "hfov": 4.74,
   "distance": 100
  }
 ],
 "id": "overlay_3935D994_0C62_90C1_415C_904EEDABEF84",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ],
 "useHandCursor": true,
 "id": "overlay_154AA596_0CE2_90C0_417B_DC1BBD16260F",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4, this.camera_22280822_3825_3629_41A6_FDDB7BD6870F); this.mainPlayList.set('selectedIndex', 36)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -93.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -93.93,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2527894D_0C62_F040_4199_BC1F5868A431",
   "pitch": 0.84,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_102DAA6E_0CE2_9040_419F_5089CEE95A76",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 40.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_0_1_0_map.gif",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58,
   "hfov": 61.2
  }
 ],
 "useHandCursor": true,
 "id": "overlay_128B0FEB_09F0_4B2B_419B_702ECCC5CA1B",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC, this.camera_23AC3A44_3825_0A69_419B_C79495732821); this.mainPlayList.set('selectedIndex', 19)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 40.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55,
   "hfov": 13.82
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 40.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_29717C5B_09F7_CD6A_4197_77A9D346799E",
   "pitch": -23.55,
   "hfov": 13.82,
   "distance": 50
  }
 ],
 "id": "overlay_13863286_09F3_F5DD_41A2_E52FC2D68533",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -71.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "hfov": 10.56
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -71.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_29719C5C_09F7_CD6E_4154_08CE73AB87FA",
   "pitch": -22.3,
   "hfov": 10.56,
   "distance": 100
  }
 ],
 "id": "overlay_124C3BD9_09F0_4B76_41A0_DC8749ACDC4B",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -67.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_3_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.69,
   "hfov": 31.47
  }
 ],
 "useHandCursor": true,
 "id": "overlay_156B1852_09F0_D57A_4151_9E5885E440A2",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE026B_FF39_2282_41B5_0F2204858344, this.camera_2240AA0D_3825_35FB_41B2_B147367F4BF6); this.mainPlayList.set('selectedIndex', 21)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -130.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31,
   "hfov": 91.93
  }
 ],
 "useHandCursor": true,
 "id": "overlay_24F4041B_0CBE_97C7_419E_6AF7CFDD4BF3",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB, this.camera_22564A27_3825_0A37_41B8_3FA58404C42A); this.mainPlayList.set('selectedIndex', 41)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -117.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.13,
   "hfov": 4.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -117.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_25511941_0C62_F040_41A5_703B24395552",
   "pitch": 1.13,
   "hfov": 4.14,
   "distance": 100
  }
 ],
 "id": "overlay_2EC5FC1F_0CA1_97FF_41A3_4FA78BD81C25",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -54.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "hfov": 94.1
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E85D5D3B_FFF9_6F07_41D6_55552E85C315",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5E72603_FF39_2281_410D_D2CF25E55C50, this.camera_24BEFD04_3825_0FE8_41C8_C770B477B2AD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 48.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.08,
   "hfov": 112.44
  }
 ],
 "useHandCursor": true,
 "id": "overlay_E5DD4C03_FFFA_ED06_41EB_D42A7359B2C1",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104, this.camera_24B17D20_3825_0E29_4191_6F28C58505E2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 64.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.24,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 64.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46D8808_FF57_1502_41DE_85F0F54C2131",
   "pitch": -1.24,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E6F0AA34_FFF9_F502_41DA_23651A767CFE",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -79.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.33,
   "hfov": 3.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -79.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E46DA808_FF57_1502_41DB_5DE9323643D0",
   "pitch": -2.33,
   "hfov": 3.55,
   "distance": 100
  }
 ],
 "id": "overlay_E7785FDB_FFF9_6B06_41ED_401668077244",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 89.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_0_1_0_map.gif",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.07,
   "hfov": 73.04
  }
 ],
 "useHandCursor": true,
 "id": "overlay_0E8EA230_01E9_284F_4150_39DCEAA4D128",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B, this.camera_225A93C6_3825_1A69_41C8_800EF2EE1F39); this.mainPlayList.set('selectedIndex', 17)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -81.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_1_1_0_map.gif",
      "width": 139,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.58,
   "hfov": 44.6
  }
 ],
 "useHandCursor": true,
 "id": "overlay_11F050AD_01EB_E856_4136_967B5F615FC6",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC, this.camera_225593E5_3825_1A2B_41B8_4C09899493DA); this.mainPlayList.set('selectedIndex', 19)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -88.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28,
   "hfov": 9.88
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -88.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_240D78F1_0279_39CE_417D_170A7ECBB166",
   "pitch": -18.28,
   "hfov": 9.88,
   "distance": 100
  }
 ],
 "id": "overlay_0E11B049_01E9_28DE_4143_5BA5F2A23AFD",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 94.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.88,
   "hfov": 9.72
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": 94.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_240D38F1_0279_39CE_413E_C1B9491E1C76",
   "pitch": -16.88,
   "hfov": 9.72,
   "distance": 100
  }
 ],
 "id": "overlay_0E1A75EA_01E9_6BD2_4173_00E3BE872532",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 30
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -138.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_4_1_0_map.gif",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46,
   "hfov": 71.01
  }
 ],
 "useHandCursor": true,
 "id": "overlay_27BBBB74_32EE_9A5F_4172_1A5A382FF18F",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156, this.camera_23AF13FE_3825_1A19_41C4_7E38BA597618); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -135.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "hfov": 9.4
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "yaw": -135.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2A54133C_32EA_8BCF_416C_1ED82A915CDB",
   "pitch": -22.3,
   "hfov": 9.4,
   "distance": 100
  }
 ],
 "id": "overlay_26615621_32EA_8DF9_41A2_727A140BDB06",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 110,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "center",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "layout": "vertical",
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "width": "91.304%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "class": "Container",
 "children": [
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "layout": "horizontal",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 30,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "height": 51,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "layout": "horizontal",
 "paddingRight": 0,
 "right": "10%",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "class": "Container",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "layout": "vertical",
 "paddingRight": 20,
 "right": "10%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_2478F8FD_0279_39B6_4174_0AE776432956",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247878FE_0279_39B2_4178_71100BE1FB95",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5ECE1CF_FF3A_E182_41D3_D1F84CDB20F2_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_1885EA1D_0239_7871_4145_0152AC990E61",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_18858A1D_0239_7871_416F_0289D46C3D14",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_0661F487_14B1_85D5_41A2_A3F160EC0A46",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE2FC0_FF39_E1FF_41CE_D70DD34EC63B_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_252F5953_0C62_F040_418A_48104B04AD3E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_252F8953_0C62_F040_4165_651F7DF4CADC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FEC066_FF39_1E82_41E1_DB74A0CF20C4_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_25293951_0C62_F040_4185_3FD55B13888B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2529F951_0C62_F040_4147_82BFA4F6C761",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EF97F6_FF39_2182_41E0_3C2BDEDAA5EB_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_06562493_14B1_85CE_418F_5B7C777AA272",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F67D0E_FF3B_6682_41EC_C3C599BC1D82_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E5C3DE44_FFCB_2D02_41B3_7CB3151AD9B9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E5C2CE44_FFCB_2D02_41EA_1DD52B8E5958",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E8DF3692_FFC9_1D06_41CA_32C96EBD0A15",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0A481AC8_179C_F571_419D_35DCFE59B770",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DD9_FF39_218E_41EB_3C8A4D031E96_0_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_1884BA1D_0239_7871_4162_EB1B8842753A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE2084_FF39_FF87_41D2_7A72482DB1DC_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_18847A1C_0239_7877_4158_A2D9E7431F6C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582A940_FF3B_2EFE_41E9_44C71671137F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_252BD950_0C62_F040_41A7_6E3403AD9466",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0FFF04F9_1785_3D13_419B_42F6B3E3BD4C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F4571A_FF39_6283_41AB_C1AD7C49A46A_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2524994E_0C62_F040_4167_1150F67C3C84",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2524C94E_0C62_F040_4195_D2EC3B9460D0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F581C873_FF39_6E82_41E5_2D1192608196_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_252A994F_0C62_F040_4161_4E698CDBDB55",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F581FFCB_FF39_6182_41E2_D6EB76625001_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247648FC_0279_39B6_417B_69BE74C10EBD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247788FD_0279_39B6_4180_95FD4E0871A4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0653D490_14B1_85CA_41A4_F4391CFD9D9F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5824B5A_FF3A_E282_41E9_CCCFF57DC7A5_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_18825A1A_0239_7873_4172_39E3A541F0FE",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_1882CA1B_0239_7871_4176_490E290CCA3B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_15ED6AFF_09F0_D52A_419D_E9CE44DF7FC5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F6EF89_FF3B_E18E_41E2_2B29776728C8_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46C6809_FF57_1502_41B3_DE6747219800",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46C2809_FF57_1502_41B5_BEBE2E3FE7D5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_E465080E_FF57_151E_41E9_A9CF9511080D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_E465280E_FF57_151E_41E5_DC525ED0598D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E465C80E_FF57_151E_41D6_55F0941AE15E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E465880F_FF57_151E_41DE_E248530E5EF7",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE5DC1_FF39_21FE_41DC_707493DBD104_0_HS_11_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_15935B1E_09D0_D4EA_4179_204A892872CA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_1592AB1E_09D0_D4EA_419D_72AEF8A0BED3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FCB3F3_FF3B_E182_41E7_A10364C23F71_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_0E14ADA9_14CE_87DA_41B1_18202FDAAA98",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_0E175DAA_14CE_87DE_41B3_52E541198634",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582F3FC_FF3B_6186_41C8_3165F010D7B0_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_EF1F1D9D_FF49_2F03_41DD_17CFDC83B314",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F0160F_FF39_2282_41DA_E5D406CF2156_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_252C4954_0C62_F040_417B_667E955DD8AC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0D5262DE_1787_1511_41AE_D88E99DF3212",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F56890_FF39_6F9E_41BB_ED300D126577_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E5C51E45_FFCB_2D02_41E9_FF87767A8ED5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_E5C5DE45_FFCB_2D02_41E6_9EEAB1D4E0A5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E5C45E45_FFCB_2D02_41E3_2656395E341F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F147FF_FF39_E181_41C6_FBE5EB1907FD_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_189F1A19_0239_7871_417C_0E5B03C0EF02",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_189FFA19_0239_7871_4170_3A31CA91858C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_3_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_18800A19_0239_7871_417B_DB698FAE9A24",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F02B66_FF3B_2282_41CB_F3DC965ADCE9_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_247588FB_0279_39B2_416B_CE6F6B1181B3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247518FC_0279_39B6_4149_8E3034F86130",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_25582945_0C62_F040_41A5_301B20C72830",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_25592946_0C62_F040_4173_B6CD6723BFD3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0441_FF39_26FE_41EC_E9764933A848_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_15905B20_09D0_D4D6_4197_96727857527C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_159FBB21_09D0_D4D6_4190_23A648548CD4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F0CCDE_FF3B_E783_41ED_1DE8F6105A38_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_3CDEEF77_0D9F_7040_4191_E9E3ADBBDB98",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_3CDECF77_0D9F_7040_4197_B2817776C392",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE20AC_FF39_7F86_41A7_D0A831635742_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_2472D8F4_0279_39B6_417A_8A53CB75B823",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_4_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_247298F4_0279_39B6_417E_69D9FE01B00C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EAE0C8_FF39_1F8E_41C8_D60C1DADC81E_0_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247028F3_0279_39B2_4150_FD56337BB27E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247188F3_0279_39B2_4176_CCA38C71AEB4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5ED7A89_FF39_238E_41A4_B6244F936E2A_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_18857A1C_0239_7877_416E_23CA2C8E9EB8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F581CE96_FF39_6382_41E7_E2755B74444F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_1E9E290D_0219_F856_4177_5D5B861AD1D3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_1E9FD90D_0219_F856_416A_8C8821EE7ABD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F581B66E_FF39_2282_41E0_4AF99C4A5C9B_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_240E88F1_0279_39CE_417F_4C2C6E9F7402",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_2DDA273C_09F0_BB2D_41A3_34D388A64077",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FECFB6_FF39_2182_41E6_539ECF2D71DC_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2522E94A_0C62_F040_4182_3746B907C728",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2523B94A_0C62_F040_41A8_C643C6AC975E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F6DDE6_FF3B_6182_41E5_01DA4B633ED1_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46EF806_FF57_150E_41EB_DD411C21D778",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_E46EA806_FF57_150E_4177_A47011FCEBA4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46D6807_FF57_150E_41D3_6EA9C85B7B88",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46D3808_FF57_1502_41D6_BC7EE7FA4AC7",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5E72603_FF39_2281_410D_D2CF25E55C50_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_1883FA1B_0239_7871_4175_E19CC5D5E5FF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_15911B1F_09D0_D4EA_4197_E7FAD8FEE9ED",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_1592FB02_09F0_D4DA_416F_D6D9DA45A92A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F58225F7_FF3B_E182_41EE_5523C7237D95_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2526094C_0C62_F040_4169_5EEE28C6237A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2526C94D_0C62_F040_4196_E87115162426",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F3D781_FF3B_227E_41DA_35C345153DE4_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_25325955_0C62_F040_4172_39E047378E8B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0D5172E0_1787_1531_4186_C91AAFD29836",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F168E6_FF39_6F82_41D0_79ECD91275D8_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_18814A1A_0239_7873_4156_24EBF7108883",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_E464C80F_FF57_151E_41ED_1C8BC1A08470",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E464E810_FF57_1502_41D0_25615415A6F8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_12997C52_09D3_CD7A_4179_1D2590FD0DFD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F3421E_FF3B_2282_41E7_1261E7089C7C_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2520194B_0C62_F040_4171_B4EAF4F95FB6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0FF774EE_1785_3D31_41B3_ADE5A902D2A2",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582B684_FF3B_2386_41EF_958A1B4B9CD5_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_240F78F2_0279_39B2_4177_5CDE1AE45108",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_2470C8F3_0279_39B2_4162_82262143A690",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE026B_FF39_2282_41B5_0F2204858344_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_2479A8FE_0279_39B2_416D_C98A95BCB798",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_247938FF_0279_39B2_416E_6058D024FC66",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_255CE949_0C62_F040_415C_F65D46D3F258",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F58258F8_FF3A_EF8E_41D9_2C74E149CA36_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_18848A1C_0239_7877_4135_FB5233D400D0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE22DC_FF36_E386_41B6_8017C0F9FFC0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_2474D8F5_0279_39B6_417A_51D8183B3E44",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_247408F6_0279_39B2_4169_0E488F421C9F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5ECBD01_FF39_267E_41D3_145261DB322E_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_255DB949_0C62_F040_41A1_FC7C4E159FD2",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_25220949_0C62_F040_418F_A27DE9C6D09E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0FF5C4ED_1785_3D33_41B2_F218B859B30C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F582C579_FF3B_668E_41C1_ACAD0FA22E38_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_18858A1C_0239_7877_416B_5ACB07144C48",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_181BEB0C_0C66_B1C0_41A7_EDE3619436F4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F3BEE7B7_FF3B_2182_41BC_C98B525823B8_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2521694C_0C62_F040_417F_9E1C97B1084D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5824EFE_FF3B_2382_41ED_6155DC151F38_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_37489E52_0C61_B041_415B_77B698DD636F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_374F8E53_0C61_B047_41A6_5DC3DA27FEF2",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5FE60F4_FF39_1F86_41C9_1FF008138024_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_2527894D_0C62_F040_4199_BC1F5868A431",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F17FE9_FF3B_218E_41BE_6200C0A35F34_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_29717C5B_09F7_CD6A_4197_77A9D346799E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_29719C5C_09F7_CD6E_4154_08CE73AB87FA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_25511941_0C62_F040_41A5_703B24395552",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F029E6_FF39_2182_41D1_70E0FD7DF46C_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46D8808_FF57_1502_41DE_85F0F54C2131",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "id": "AnimatedImageResource_E46DA808_FF57_1502_41DB_5DE9323643D0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5F04911_FF39_EE9E_41BD_EA2254B42B41_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_240D78F1_0279_39CE_417D_170A7ECBB166",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_240D38F1_0279_39CE_413E_C1B9491E1C76",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_2A54133C_32EA_8BCF_416C_1ED82A915CDB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_F5EB0784_FF39_2187_41EF_7C13A026372D_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "paddingRight": 0,
 "maxHeight": 58,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "click": "this.openLink('http://ethioairstrading.org/', '_blank')",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "Button",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button location"
 },
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "fontStyle": "normal",
 "width": 90,
 "layout": "horizontal",
 "paddingRight": 0,
 "fontFamily": "Montserrat",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "paddingLeft": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 40,
 "label": "LOCATION",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "layout": "absolute",
 "paddingRight": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "85%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "layout": "vertical",
 "paddingRight": 50,
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "15%",
 "minWidth": 400,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "transparencyActive": false,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.354558140573!2d38.7632537!3d9.0313848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85697ca75c81%3A0x9190f31b2adaba4!2sKabba%20Holding%20Company!5e0!3m2!1sen!2set!4v1663101421705!5m2!1sen!2set",
 "propagateClick": false,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "layout": "horizontal",
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "layout": "vertical",
 "paddingRight": 0,
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 520,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "layout": "horizontal",
 "paddingRight": 0,
 "paddingBottom": 0,
 "width": 370,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.78vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.54vh;font-family:'Poppins';\">Kabba Holding Company</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.7vh;font-family:'Poppins Light';\">4 Kilo in front of Selassie Church, ambassador building 4th floor, Addis Ababa 1000</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "class": "Button",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "layout": "horizontal",
 "paddingRight": 0,
 "fontFamily": "Bebas Neue Bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "iconWidth": 32,
 "width": 207,
 "shadowSpread": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "fontWeight": "normal",
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 59,
 "label": "lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "fontSize": 34,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
