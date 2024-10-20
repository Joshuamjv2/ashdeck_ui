interface Props{
    paused: boolean,
    onClick: () => void
}

export default function PauseButton({paused, onClick}: Props){
    return(
        <div onClick={onClick}>
            <button className={`${paused ? "bg-primary" :"bg-red-500"} rounded-md font-semibold text-white outline-none p-2 w-24`}>{paused ? "Pause": "Resume"}</button>
        </div>
    )
}