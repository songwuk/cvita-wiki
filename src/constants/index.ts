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
      // else {
    //   // 创建一个虚拟的range
    //   range = document.createRange();
    //   // 获取包含坐标的节点
    //   var s = window.getSelection() as Selection;
    //   const strongs = document.getElementsByClassName("view-line");
    //   if (s.rangeCount > 0) s.removeAllRanges();
    //   for (var i = 0; i < strongs.length; i++) {
    //     var ranges = document.createRange();
    //     ranges.selectNode(strongs[i]);
    //     s.addRange(ranges);
    //   } // O(N)
    //   var node = document.elementFromPoint(e.pageX, e.pageY)!;
    //   // const startOffset = 1
    //   // const endOffset = 2
    //   // range.setStart(node, startOffset ?? 1);
    //   // range.setEnd(node, endOffset ?? 2);
    //   //将光标定位到节点
    //   range.selectNode(node);
    //   textNode = range!.startContainer as Text | null;
    //   offset = range!.startOffset;
    //   console.log(range, 'range', node)
    // }
  return {
    range,
    textNode,
    offset,
  };
}


export {
  myCaretRangeFromPoint
}
