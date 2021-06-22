import { symbol } from "prop-types";
import React from "react";
import { 
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'

type Props = TouchableOpacityProps & {
    title: string
}

export function ButtonIcon({ title, ...children} : Props){
    return (

        <TouchableOpacity 
            style={styles.container} 
            {...children}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
        
    )
}