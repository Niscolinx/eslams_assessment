import { GetSessionParams, useSession, getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

import { useAppSelector, useAppDispatch } from '../../store/app/hooks'

import {
    initVideoEnded,
    selectVideo,
} from '../../store/features/video/VideoSlice'
import { getUser, selectUser } from '../../store/features/user/UserSlice'
import axios from 'axios'

function videoAd() {
    const { data: session } = useSession()
    const fetchedUser = useAppSelector(selectUser)
    const videoState = useAppSelector(selectVideo)
    const [displayToken, setDisplayToken] = useState<
        number | typeof videoState
    >()
   
    const [isDim, setIsDim] = useState(true)
    const [isTimeUp, setIsTimeUp] = useState(false)
    const [playedTime, setPlayedTime] = useState('')
    const [videoUrl, setVideoUrl] = useState('')

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (session) {
            dispatch(getUser(session)).then((data) => {
                console.log(data.payload)
            })
        }
    }, [session])

    useEffect(() => {
        const onFirstLoad =
            videoState.videoMined === 0
                ? fetchedUser.videoMined
                : videoState.videoMined

        setDisplayToken(onFirstLoad)
    }, [videoState, fetchedUser])


    useEffect(() => {

        axios('/api/admin/changeVideoUrl')
            .then(({ data }) => {
                const { videoUrl } = data

                setVideoUrl(videoUrl)
            })
            .catch((err) => {
                console.log({ err })
                
            })

    })

    const handleModel = () => {
        setIsDim(false)
    }

    const handleProgress = ({ playedSeconds }: { playedSeconds: number }) => {
        const played =
            Math.floor(playedSeconds / 60) +
            ':' +
            ('0' + Math.floor(playedSeconds % 60)).slice(-2)
        setPlayedTime(played)
        if (session && Math.floor(playedSeconds) >= 120 && !isTimeUp) {
            console.log("add token to user's video mined")

            dispatch(initVideoEnded(session))
                .then((data) => {
                    console.log({ data })
                })
                .catch((err) => {
                    console.log({ err })
                })
            setIsTimeUp(true)
        }
    }

    return (
        <>
            <div className='grid grid-rows-[.1fr,1fr] overflow-hidden min-h-[86vh] relative'>
                <div
                    className='flex py-2 px-10 rounded-lg place-self-center mb-2 items-center font-bold text-2xl w-full justify-between'
                    //style={neuToUse}
                >
                    <p className='text-lg'>{playedTime}</p>
                    <div className='flex '>
                        <p className=''>{displayToken}</p>
                        <img
                            src='/tk.png'
                            alt=''
                            className='absolute -right-2 top-0'
                            width='75px'
                            height='75px'
                        />
                    </div>
                </div>

                <div className='relative'>
                    <div className='absolute right-0 left-0 bottom-0 top-0'>
                        <ReactPlayer
                            url={videoUrl}
                            width='100%'
                            height='100%'
                            // onEnded={handleVideoEnded}
                            onProgress={handleProgress}
                            //onStart={handleVideoEnded}
                        />
                    </div>
                </div>
                <div
                    className='w-full h-full bg-black bg-opacity-80 absolute top-0 bottom-0 left-0 right-0 z-20'
                    style={{ display: isDim ? 'block' : 'none' }}
                >
                    <div className='grid h-full w-full content-around px-6'>
                        <div className='grid justify-center bg-gray-300 rounded-lg py-4 px-6 text-[#1a1a2d] text-center gap-4'>
                            <h2 className='text-orange-700 font-semibold text-lg'>
                                NOTICE!!
                            </h2>
                            <p>
                                To complete your daily task, you are to Watch
                                the videos for 2 minutes to get Your earnings.
                            </p>
                            <button
                                className='bg-orange-300 text-[#1a1a2d] rounded-lg py-2 px-4 cursor-pointer font-semibold'
                                onClick={handleModel}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid mt-10 justify-center py-4 px-6 text-[#1a1a2d] gap-3 bg-white'>
                    <h3 className='text-lg font-bold text-center'>
                        EARN BY WATCHING VIDEOS
                    </h3>
                    <p className=' text-center p-4 text-sm rounded font-semibold'>
                        You earn when you watch VIDEOS on the platform. And you
                        are been rewarded on each video you watch on the
                        platform. (Watch the videos for 2 minutes for your
                        earnings to reflect before you can close)
                    </p>
                </div>
            </div>
            <ins
                className='adsbygoogle'
                style={{display: 'block'}}
                data-ad-format='fluid'
                data-ad-layout-key='-gw-3+1f-3d+2z'
                data-ad-client='ca-pub-2898233620454044'
                data-ad-slot='1034502926'
            ></ins>
        </>
    )
}

export default videoAd

export async function getServerSideProps(
    context: GetSessionParams | undefined
) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    return {
        props: { session },
    }
}
