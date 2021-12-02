import React from 'react';
import * as Font from "expo-font";


const fonts = () => Font.loadAsync({

    'RobotoRegular': require('./assets/Fonts/RobotoSlab-Regular.ttf'),
    'RobotoBlack': require('./assets/Fonts/RobotoSlab-Black.ttf'),
    'RobotoExtraBold': require('./assets/Fonts/RobotoSlab-ExtraBold.ttf'),
    'RobotoExtraLight': require('./assets/Fonts/RobotoSlab-ExtraLight.ttf'),
    'RobotoBold': require('./assets/Fonts/RobotoSlab-Bold.ttf'),
    'RobotoLight': require('./assets/Fonts/RobotoSlab-Light.ttf'),
    'RobotoMedium': require('./assets/Fonts/RobotoSlab-Medium.ttf'),
    'RobotoSemiBold': require('./assets/Fonts/RobotoSlab-SemiBold.ttf'),
    'RobotoThin': require('./assets/Fonts/RobotoSlab-Thin.ttf'),
    'BeVietnamLight': require('./assets/Fonts/BeVietnamPro-Light.ttf')

});

export default fonts