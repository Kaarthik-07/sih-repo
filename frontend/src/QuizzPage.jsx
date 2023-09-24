import { useState } from "react";
function QuizzPage(){
    const [question, setQuestion] =useState(false);
    return (
        <>
        <div className="quizz-container">
            {
                isQuizStarted ?(
                    <QuizScreen retry ={()=> setIsQuizStarted(false)}/>
                ) :(
                    <joinScreen start= {() => setIsQuizStarted(false)}/>

                )
            }
        </div>
        </>
    )
    }