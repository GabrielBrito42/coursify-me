import React, {useState, useEffect} from 'react'
import { useCategories } from '../../context/categories'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { PostCard } from '../postCard'
import { AntDesign } from '@expo/vector-icons';
import type { Categorie } from '../../types/categorie'
import type { Post } from '../../types/post'

import { Loading } from '../loading'

import * as S from './styles'
import api from '../../services/api'

type Props = {
    categorie: ListRenderItemInfo<Categorie>
}

export function CategoriesList({categorie}: Props) {
    const { handleCategorieViews } = useCategories()

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('posts?categories=' + categorie.item?.id)
            .then(response => {
                setPosts(response.data)
                let viewsSum = 0
                response.data.map((post: Post) => {
                    viewsSum += post.page_views ? post.page_views : 0
                })
                handleCategorieViews(viewsSum, categorie?.index)
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    const renderItem = (value: ListRenderItemInfo<never>) => {
        return <PostCard post={value} />
    }

    return(
        <>
            <S.Container>
                <S.Title>{categorie.item.name?.toUpperCase()}</S.Title>
                <S.SeeMore>VER MAIS <AntDesign name="caretright" size={18} color="black" /></S.SeeMore>
            </S.Container>
            {loading ?
                <Loading />
            :
                <FlatList horizontal={true} data={posts} renderItem={(value) => renderItem(value)}/>
            }
        </>
    )
}
