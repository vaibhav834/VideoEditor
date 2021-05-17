import React from 'react'
import {View,Button} from 'react-native'
import { PESDK } from 'react-native-photoeditorsdk'
import { VESDK,Configuration, TintMode } from 'react-native-videoeditorsdk'
PESDK.unlockWithLicense(require('./pesdk_android_license.json'))
VESDK.unlockWithLicense(require('./vesdk_android_license.json'))
let configuration:Configuration = {
  sticker:{
    categories:[
      {identifier:"demo-sticker_category",name:"Logos",
        thumbnailURI:require('./react.png'),items:[
          {
            identifier:'demo_sticker_react',name:'React',
            stickerURI:require("./react.png")
          },
          {
            identifier:'demo_sticker_imgly',name:'img.ly',
            stickerURI:require("./imgly.png"),
            tintMode:TintMode.SOLID
          }
        ]
    }
    ]
  }
}
const editor=()=>{
  return <View>
    <Button title ="edit image" onPress={()=>{
      PESDK.openEditor(require('./image.jpg'),configuration)
    }}/>
    <Button title ="edit video" onPress={()=>{
      VESDK.openEditor(require('./video.mp4'),configuration)
    }}/>
  </View>
}
export default editor;