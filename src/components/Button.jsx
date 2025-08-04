import React from 'react'

const Button = ({TagName="button", children, bgColor="bg-black", primary=true, ...props}) => {
  return (
    <TagName {...props} className={`common-btn ${primary ? "bg-[#0D7DFB]" : "bg-transparent"} py-[20px] cursor-pointer px-[30px] text-white leading-[130%] font-semibold overflow-hidden relative ${primary? "": "border border-[#0D7DFB] rounded-[6px]"}`}>
        <span className='text'>
            {children}
        </span>
        <span className={`hover-effect ${primary ? "bg-black" : "bg-blue-500"}  absolute`}></span>
    </TagName>
  )
}

export default Button