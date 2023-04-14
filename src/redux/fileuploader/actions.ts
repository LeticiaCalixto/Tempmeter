import { FileUploadTypes } from './constants';

export type FileUploadType = {
    type:
        | FileUploadTypes.FILES_LIST
        | FileUploadTypes.RESET
       
    payload: {} | string;
};



export const fileList = (file: any): any => ({
    type: FileUploadTypes.FILES_LIST,
    payload: { file },
});

export const resetFileList = (file: any): any => ({
    type: FileUploadTypes.RESET,
    payload: {  },
});
