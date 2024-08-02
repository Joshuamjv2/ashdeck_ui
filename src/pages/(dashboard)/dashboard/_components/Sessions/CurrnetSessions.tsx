import "@assets/css/components.css"
import { useState, useEffect, useRef } from "react"
import { SessionItem } from "../../types"
import SingleCurrentSession from "./SingleSession"


type Props = {
	current_sessions?: Array<SessionItem>
}

// return sessions for the day, if a session is recurring, it should only occur on the current day.

const CurrentSessions = ({ current_sessions }: Props) => {
	return (
		<div className="relative w-full">
			{current_sessions ?
				<div className="flex flex-col gap-2">{current_sessions.map(session=><div key={session.id} className="rounded-md cursor-pointer flex justify-between bg-[#29a259] py-2 px-4 last:mb-6">
					<SingleCurrentSession session={session} />
				</div>)}</div>
			: <p className="absolute left-0 right-0 ml-auto mr-auto">No session from the past 30 days.</p>}
		</div>
	)
}


export default CurrentSessions
