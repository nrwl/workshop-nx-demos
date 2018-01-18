import {Observer} from 'rxjs/Observer';
import * as ConsoleLog from 'console-log-html';

export const redirectConsoleTo = (selectorID) => {
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
  redirectConsoleTo(targetID);

  // Return observer to be used in myObs$.subscribe()
  return {
    next  : (value) => console.log(`- ${value} - `), 
    error : (error) => console.log(`- X (${error}`) ,
    complete : (msg)   => console.log(`- | (complete)`)
  } as Observer<any>;
}
