//test 1
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`;
}

//test 2
function mondayWork(activity = `go to the office`){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrap = "*") {
  return function(adjective) {
    return `You are ${wrap}${adjective}${wrap}!`;
  };
}

