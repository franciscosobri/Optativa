export default function Notification({isCompleted}){

    return(
        <div>
            {isCompleted ? <span>✔</span> : <span>❌</span>} 
        </div>
    )
}