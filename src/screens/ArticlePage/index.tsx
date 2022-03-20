import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation, useRoute } from '@react-navigation/native'
import type { RootStackParamList } from '../../routes/types'
import type { Post } from '../../types/post'

import { Loading } from '../../components/loading'

import api from '../../services/api'

import * as S from './styles'

type ordersScreenProp = StackNavigationProp<RootStackParamList, 'ArticlePage'>

type ArticleRouteParams = {
    key: string
    name: string,
    params: {
        postId: number,
    },
    path: undefined | string,
}

export function ArticlePage() {
    const route = useRoute<ArticleRouteParams>()

    const [post, setPost] = useState<Post>()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        api.get('posts/' + route.params?.postId)
            .then(response => {
                setPost(response.data)
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return(loading ? 
        <Loading />
        :
        <S.Container>
            <WebView
                style={{}}
                originWhitelist={['*']}
                source={{ 
                    html: `<!DOCTYPE html>
                            <html>
                                <head>
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <style>
                                        img {
                                            width: 100%;
                                            height: 200px;
                                        }
                                    </style>
                                </head>
                                <body>
                                    ${post?.content?.rendered}
                                </body>
                            </html>` 
                }}
            />
        </S.Container>
    )
}
