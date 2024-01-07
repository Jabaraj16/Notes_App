import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

export const addNoteAPI=async(note)=>{
    return await commonAPI("POST",`${SERVER_URL}/allnotes`,note)
}

export const getNoteAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allnotes`,"")
}

export const removeANoteAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allnotes/${id}`,{})
}

export const updateNotesAPI=async(id,noteDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allnotes/${id}`,noteDetails)
}