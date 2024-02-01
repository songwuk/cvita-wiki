type RangeKey = 'range' | 'textNode' | 'offset'
function myCaretRangeFromPoint(x: number, y: number):Record<RangeKey, any> {
  let range = document.createRange();
  let textNode
  let offset
  // 使用elementFromPoint找到点下的元素
  let element = document.elementFromPoint(x, y);
  if(element){
    console.log(element)
  }
  return {
    range,
    textNode,
    offset,
  };
}


export {
  myCaretRangeFromPoint
}
