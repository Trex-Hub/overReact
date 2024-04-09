import React, { useContext } from 'react'
import { UserContext, ChannelContext, killCount } from '../App'


function ComponentE() {
  const kills = useContext(killCount)
  
  const user = useContext(UserContext)
  
  const channel = useContext(ChannelContext)
  
  return <div>  
    {user} - {channel}
    <h2> {kills}</h2>
  </div>
}

export default ComponentE
