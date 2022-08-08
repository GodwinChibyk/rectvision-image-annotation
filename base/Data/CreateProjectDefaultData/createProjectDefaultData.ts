

export interface IcreateProjectDefaultData {
    name: string
    annotation_choice: string
    labels: string[] | any
    project_days_timeline: string
    files: any
    is_augument_data: boolean
    image_flipping: string
    image_rotation: string
    gray_scaling: boolean
    zoom_angle: number
    brightness: number
}

export const createProjectDefaultData:IcreateProjectDefaultData = {
    name: '',
    annotation_choice: '',
    labels: [],
    project_days_timeline: '',
    files: [],
    is_augument_data: true,
    image_flipping: 'Horizontal',
    image_rotation: '0',
    gray_scaling: true,
    zoom_angle: 0,
    brightness: 0
}