

export interface State{
    html:string;
    js:string;
    css:string;
    setValue:(mode:string, content:string) => void;
}