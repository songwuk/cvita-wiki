import { createContext } from 'react'
export const createPageSize= createContext({
	pageX: 0,
	pageY: 0
})
/**
 * 记录当前的文字 
 */
export const itemsList= createContext(['# 1.More Time', '## 2.更多时间', '### 3.没有时间', '### 4.计划'])
