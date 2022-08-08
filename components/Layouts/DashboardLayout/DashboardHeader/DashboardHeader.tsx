import { Menu, Transition } from '@headlessui/react'
import { LogoutIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, CogIcon } from '@heroicons/react/solid'
import cookie from 'cookiejs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect } from 'react'
import { useGetRequest, USER_ROUTES } from '../../../../base'
import { useUserStore } from '../../../Pages/globalStore/zustandStore'

const DashboardHeader = () => {

  const { data} = useGetRequest<any>({
    path: USER_ROUTES.USER_PROFILE,
    load: true,
  });

  const {push,reload} = useRouter() 

  // a method that modifies the value of global token
  const {setUserToken} = useUserStore(
    (state) => ({
      setUserToken: state.setUserToken,
    })
  )

  // useEffect(()=>{
  //   console.log(data?.data)
  // },[data])

  return (
    <div className="w-full fixed z-30 px-12 py-3 shadow-sm bg-whiteColor flex justify-between items-center ">
      <div className="w-12 h-10 rounded-full relative overflow-hidden">
        <Image
          src="/images/logo_2.png"
          className="w-full h-full"
          alt="logo"
          objectFit="contain"
          layout='fill'
        />
      </div>

      <div className="flex items-center">
        <p className="text-textColorLight text-base">
          Account type: <span className="ml-1 capitalize border-b">{data?.data.account_type}</span>
        </p>
        <div className="flex items-center ml-8">
          <div className="w-8 h-8 relative rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"     
              height={100}
              width={100}
              alt="profile pic"
              objectFit="cover"
            />
          </div>
          <Menu as="div" className='relative'>
         <div>
         <Menu.Button className="flex items-center ml-2">
            <p className="text-textColorDark capitalize">{`${data?.data.first_name} ${data?.data.last_name}`}</p>
            <ChevronDownIcon className="w-5 h-5 text-gray-600  ml-1" />
          </Menu.Button>
         </div>
         <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className='absolute w-56 z-30 shadow-sm right-0 origin-top-right rounded-xl mt-2 py-2 border  bg-whiteColor'>
              <Menu.Item>
                  <button 
                  onClick={()=> push('/dashboard/settings')}
                  className='w-full flex items-center space-x-2 px-5 py-3 hover:bg-grayColorLight/30 group'>
                <CogIcon className='h-6 w-6 group-hover:text-primaryColor' />
                <span className='text-textSmall text-textColor capitalize tracking-wider group-hover:text-primaryColor'>settings</span>
                  </button>
              </Menu.Item>
              <Menu.Item>
                  <button 
                  onClick={()=> {
                    cookie.remove('authToken')
                    setUserToken('')
                    reload()
                  }}
                  className='w-full flex items-center space-x-2 px-5 py-3 hover:bg-grayColorLight/30 group'>
                <LogoutIcon className='h-6 w-6 group-hover:text-primaryColor' />
                <span className='text-textSmall text-textColor capitalize tracking-wider group-hover:text-primaryColor'>sign out</span>
                  </button>
              </Menu.Item>
            </Menu.Items>
        </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader