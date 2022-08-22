import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { GetSessionParams, getSession } from 'next-auth/react'

const Index = () => {
    const { theme } = useTheme()
   // const [neuToUse, setNeuToUse] = useState<{}>()
    //const [stepsNeu, setStepsNeu] = useState<{}>()
  

    

    // useEffect(() => {
    //     if (theme === 'dark') {
    //         setNeuToUse({
    //             background: `linear-gradient(145deg, #1c1c30, #171729)`,
    //             boxShadow: `7px 7px 14px #161625,
    //              -7px -7px 14px #1e1e35`,
    //             borderRadius: '50px',
    //         })

    //         setStepsNeu({})
    //     } else {
    //         setNeuToUse({
    //             background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,
    //             boxShadow: `7px 7px 14px #a5a5a8,
    //          -7px -7px 14px #f3f3f8`,
    //             borderRadius: '50px',
    //             color: '#1a1a2d',
    //         })

    //         setStepsNeu({
    //             background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,
    //             boxShadow: `7px 7px 14px #a5a5a8,
    //          -7px -7px 14px #f3f3f8`,
    //             borderRadius: '50px',
    //             color: '#1a1a2d',
    //         })
    //     }
    // }, [theme])

    

    

    return (
        <>
           Hello world
        </>
    )
}

export default Index

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

