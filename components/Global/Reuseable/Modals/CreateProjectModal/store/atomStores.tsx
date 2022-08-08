import { atom } from "jotai";
import {createProjectDefaultData, IcreateProjectDefaultData } from "../../../../../../base/Data/CreateProjectDefaultData/createProjectDefaultData";



export const createProjectDataAtom = atom<IcreateProjectDefaultData> (createProjectDefaultData)

export const creatProjectErrorMessageAtom = atom<boolean>(false)