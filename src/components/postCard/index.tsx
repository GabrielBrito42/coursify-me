import React, { useState, useEffect } from 'react'
import { Pressable, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import type { RootStackParamList } from '../../routes/types'
import type { Post } from '../../types/post'

import api from '../../services/api'
import * as S from './styles'

type Props = {
    post: Post,
}

type ordersScreenProp = StackNavigationProp<RootStackParamList, 'Home'>

export function PostCard({post}: Props) {
    const navigation = useNavigation<ordersScreenProp>()

    const [mediaData, setMediaData] = useState<string>()

    useEffect(() => {
        api.get('media/?include=' + post.item?.featured_media)
            .then(response => {
                setMediaData(response.data[0].media_details.sizes.medium.source_url)
            })
            .catch(() => {})
    }, [])

    const navigateToPostDetails = () => {
        navigation.navigate('ArticlePage', {postId: post.item?.id})
    }
    
    return(
        <>
            <Pressable
                onPress={navigateToPostDetails}
                style={({ pressed }) => 
                    [
                        {
                            opacity: pressed
                            ? 0.5
                            : 1
                        }
                    ]
                }
            >
                <S.Container>
                    <S.PostImage  
                        source={{uri: mediaData}} 
                    />
                    <S.TextContainer>
                        <S.Subtitle 
                            numberOfLines={2}
                        >
                            {post.item?.title?.rendered}
                        </S.Subtitle>
                        <S.DescriptionText 
                            numberOfLines={4}
                        >
                            {post.item?.excerpt?.rendered?.trim().replace(/<p>/g, "")}
                        </S.DescriptionText>

                        <S.SeeMore>Leia mais</S.SeeMore>
                    </S.TextContainer>
                </S.Container>
            </Pressable>
        </>
    )
}
