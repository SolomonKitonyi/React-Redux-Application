import { combineReducers } from "redux";

const songsReducer = ()=>{
    const songs = [
        {title:'Miracle Worker', duration: '4:45'},
        {title:'Might warior',duration:'7:05'},
        {title:'Jesus you are Yahweh', duration:'7:10'}
    ];
    return songs;
};

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SELECTED_SONG'){
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
    
});