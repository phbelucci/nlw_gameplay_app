import React from 'react'
import { useState } from 'react'

import { 
    View,
    Text, 
    Image,
    StatusBar
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon/Index'

export function SignIn(){

    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Image 
                style={styles.image}
                source={IllustrationImg}
                resizeMode='stretch'
            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Crie Grupos pra jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com Discord"
                    activeOpacity={0.7}
                >        
                </ButtonIcon>

            </View>
        </View>
    )
}