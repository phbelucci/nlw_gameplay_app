import React from 'react'
import { useState } from 'react'

import { 
    View,
    Text, 
    Image,
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon/Index'

export function SignIn(){

    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={IllustrationImg}
                resizeMode='stretch'
            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas
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