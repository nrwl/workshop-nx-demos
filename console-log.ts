import {Observer} from 'rxjs/Observer';
import * as ConsoleLog from 'console-log-html';

export const connectTo = (selectorID) => {
  const target = document.getElementById(selectorID)
  const logToConsole = false;
  const appendAtBottom = true;
  const includeTimeStamp = true;

  ConsoleLog.connect(
    target, {},
    includeTimeStamp, logToConsole, appendAtBottom
  );
}


export const logTo = (targetID) : Observer<any> => {
  // Monkey-patch console.log()/console.debug() outputs
  connectTo(targetID);

  // Return observer to be used in myObs$.subscribe()
  return {
    next  : (value) => console.log(`- ${value} - `),
    error : (error) => console.log(`- # (${error})`),
    complete : ()   => console.log(`- - - |`),
  } as Observer<any>;
}

export const marbleLogTo = (targetID) : Observer<any> => {
  const target = document.getElementById(targetID);

  // Return observer to be used in myObs$.subscribe()
  return {
    next  : (value) => { target.innerHTML += `- ${value} - ` },
    error : (error) => { target.innerHTML += `- #<br/><br/>` },
    complete : (msg)=> { target.innerHTML += `- |<br/><br/>` },
  } as Observer<any>;
}

