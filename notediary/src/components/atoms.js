import { atom } from "recoil"


export const noteState= atom({
    key: 'notesState',
    default: [
        {id:1, name: 'notename1', content: 'notecontent1'},
        {id:2, name: 'notename2', content: 'notecontent2'},
        {id:3, name: 'notename3', content: 'notecontent3'},
        {id:4, name: 'notename4', content: 'notecontent4'},
        {id:5, name: 'notename5', content: 'notecontent5'},
        {id:6, name: 'notename6', content: 'notecontent6'},
        {id:7, name: 'notename7', content: 'notecontent7'},
        {id:8, name: 'notename8', content: 'notecontent8'},
        {id:9, name: 'notename9', content: 'notecontent9'},
        {id:10, name: 'notename10', content: 'notecontent10'},
        {id:11, name: 'notename11', content: 'notecontent11'},
        {id:12, name: 'notename12', content: 'notecontent12'}
    ]
});

export const diaryState= atom({
    key: 'diariesState',
    default: [
        {id:1, name: 'diaryname1', content: 'diarycontent1'},
        {id:2, name: 'diaryname2', content: 'diarycontent2'},
        {id:3, name: 'diaryname3', content: 'diarycontent3'}
    ]
});