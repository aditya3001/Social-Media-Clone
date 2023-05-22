import { useSession } from "next-auth/react";
import { Button } from "./Button";
import { ProfileImage } from "./ProfileImage";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

function updateTextAreaSize(textArea ?: HTMLTextAreaElement){
    if(textArea == null) return
    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
}

export function NewTweetForm(){
    const session = useSession();
    if(session.status !== "authenticated") return;
    return <Form />
}


function Form(){
    const session = useSession();
    const [input, setInput] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const inputRef = useCallback((textArea : HTMLTextAreaElement)=>{
        updateTextAreaSize(textArea);
        textAreaRef.current = textArea;
    },[])
    useLayoutEffect(()=>{
        updateTextAreaSize(textAreaRef.current);
    }, [input])
    if(session.status !== "authenticated") return null;

    return <form className="flex flex-col gap-2 border-b px-4 py-2">
        <div className="flex gap-4">
            <ProfileImage src={session.data.user.image} />
            <textarea 
            ref={inputRef}
            style = {{height:0}}
            value = {input}
            onChange={(e)=>setInput(e.target.value)}
            className="flex-grow resize-none overflow-hidden p-4
             text-lg outline-none" 
             placeholder="Wanna Share Something?"/>
        </div>
        <Button className="self-end">Tweet</Button>
    </form>
}
