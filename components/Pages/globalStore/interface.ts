

export interface IProjectData {
    user_id:               string;
    name:                  string;
    annotation_choice:     string;
    labels:                string[];
    project_days_timeline: Date;
    is_augument_data:      string;
    augument_data:         AugumentData;
    annotations:           Annotation[];
    collaborators:         any[];
    status:                string;
    _id:                   string;
    created_at:            Date;
    updated_at:            Date;
    __v:                   number;
    topic:                 string;
    duration:              number;
    timeline:              string;
    countdown:             string;
    progress:              number;
    id:                    string;
} 



export interface AugumentData {
    image_flipping: string;
    brightness:     number;
    gray_scaling:   boolean;
    image_rotation: number;
    zoom_angle:     number;
}

export interface Annotation {
    name:         string;
    type:         string;
    user_id:      string;
    project_id:   string;
    is_annotated: boolean;
    classes:      any[];
    _id:          string;
    __v:          number;
    created_at:   Date;
    updated_at:   Date;
    url:          string;
    id:           string;
}



