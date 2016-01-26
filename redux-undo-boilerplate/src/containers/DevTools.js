/*eslint-disable*/
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
/*eslint-enable*/

export default createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               changePositionKey="Q">
    <LogMonitor />
  </DockMonitor>
)
