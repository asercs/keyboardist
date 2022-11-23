import TypingLogic from "../components/TypingLogic";
import randomWords from "random-words";
import {useState} from "react";


const Typing = () => {
    const [word, setWord] = useState(15);
    return (
            <div className="w-full max-w-[920px] mx-auto px-4 xl:px-0 py-4 minHeight flex flex-col justify-center">
                <h1 className="text-3xl font-extrabold text-white text-center mb-2">Typing test</h1>
                <h5 className="text-center font-bold text-white mb-2">Click ESC to reset</h5>
                <div className="text-center font-bold text-white mb-2 flex items-center justify-end">
                    <p className="mr-2">Words: </p>
                    <button onClick={()=> {setWord(15)}} className="mr-4 hover:text-cyan-400 hover:scale-125">15</button>
                    <button onClick={()=> {setWord(25)}} className="mr-4 hover:text-cyan-400 hover:scale-125">25</button>
                    <button onClick={()=> {setWord(45)}} className="hover:text-cyan-400 hover:scale-125">45</button>
                </div>
                <div className="border-2 p-4 rounded-lg">
                    <TypingLogic
                        text={
                            randomWords({ exactly: word, join: ' ' })
                        }
                    />
                </div>
            </div>

    )
}

export default Typing;