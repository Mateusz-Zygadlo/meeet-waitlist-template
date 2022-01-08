import React, { useEffect } from 'react'
import { Images } from '../assets'
import { 
  useMeasure,
  useWindowSize, 
} from '../hooks'

export const Welcome = () => {
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      className="bg-main w-screen h-screen"
      ref={myRef}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {width > 900 ? (
          <>
            <img 
              src={Images.UserAvatar3}
              alt="user avatar 3"
              className="absolute top-20 left-16"
            />
            <img 
              src={Images.UserAvatar2}
              alt="user avatar 2"
              className="absolute top-10 right-20 lg:right-32"
            />
            <img 
              src={Images.UserAvatar5}
              alt="user avatar 5"
              className="absolute top-52 lg:top-32 right-40 lg:right-96"
            />
            <img 
              src={Images.UserAvatar1}
              alt="user avatar 1"
              className="absolute top-96 right-20"
            />
            <img 
              src={Images.UserAvatar4}
              alt="user avatar 4"
              className="absolute bottom-14 right-56 lg:right-96"
            />
          </>
        ) : (
          <>
            <img 
              src={Images.UserAvatar3}
              alt="user avatar 3"
              className="absolute top-20 left-16"
            />
            <img 
              src={Images.UserAvatar2}
              alt="user avatar 2"
              className="absolute top-10 right-20"
            />
            <img 
              src={Images.UserAvatar5}
              alt="user avatar 5"
              className="absolute bottom-44 right-40"
            />
          </>
        )}
      </div>
      <div className="z-50 absolute top-0 left-0 w-full h-full px-12 sm:px-20 md:px-28 lg:px-40 pt-6 flex flex-col justify-between py-16 items-start">
        <img 
          src={Images.Logo}
          alt="logo"
        />
        <div>
          <h1 className="xl:mt-14 mt-20 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold text-cyan">Meeet New <br /> Entrepreneurs</h1>
          <p className="text-gray-400 text-xl max-w-md my-5">Meeet is a new social media platform for entrepreneurs to connect and socialize.</p>
          <button className="px-5 py-3 font-semibold flex justify-center rounded-lg items-center bg-cyan text-black">Get notified at launch</button>
        </div>
        <div className="mt-14 flex items-center">
          <img 
            src={Images.Twitter}
            alt="twitter icon"
          />
          <p className="text-gray-400 ml-4">Follow us on Twitter</p>
        </div>
      </div>
    </div>
  )
}