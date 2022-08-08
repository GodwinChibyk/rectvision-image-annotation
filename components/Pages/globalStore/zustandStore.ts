import { IProjectData } from './interface';
import { values } from "lodash";
import create from "zustand";
import {devtools,persist} from 'zustand/middleware'
interface IZusStore {
    userToken: string
    setUserToken: (param:string) => void
}

 const userStore = (set:any) => ({
  userToken: "",
  setUserToken: (token:string) =>
    set((state:any) => ({
      userToken: token,
    })),
});


export const useUserStore = create<IZusStore>()(
        persist(userStore, {
            name: "userToken"
            
        })
)

interface IUserProjectStore {
  project: Partial<IProjectData>
  setProject: (data:any) => void
}

export const useProjectStore = create<IUserProjectStore>(
  (set:any) => ({
    project: {},
    setProject: (data:any) =>
    set((state:any) => ({
      project: data,
    }))
  })
)

export const useAnnotationStore = create()
