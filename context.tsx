import React, { createContext } from 'react'

interface FeedInterface {
    id: number, 
    video_url: string, 
    aspectRatio: number, 
    description: string, 
    likes: number, 
    hashtags: string, 
    place: string 
}
export const FeedContext = createContext<FeedInterface[]>([]);