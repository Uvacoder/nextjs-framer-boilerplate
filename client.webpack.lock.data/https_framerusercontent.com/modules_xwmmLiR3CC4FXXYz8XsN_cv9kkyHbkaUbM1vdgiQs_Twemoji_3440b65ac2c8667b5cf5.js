import{jsx as _jsx}from"react/jsx-runtime";import{useMemo,useEffect,useState}from"react";import{addPropertyControls,ControlType}from"framer";import twemoji from"https://jspm.dev/twemoji@13.1.0";const fireSrc="https://twemoji.maxcdn.com/v/13.1.0/svg/1f525.svg";/**
 * TWEMOJI
 *
 * Convert any emoji into a Twemoji from Twitter. Choose a preset or type in your emoji and the Twemoji will automatically appear on the canvas.
 *
 * ```jsx
 * <Twemoji search="🍐" />
 * ```
 *
 * @framerIntrinsicWidth 100
 * @framerIntrinsicHeight 100
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export function Twemoji(props){const{search,isSelection,selection,style}=props;const[src,setSrc]=useState(fireSrc);const emoji=isSelection?selection:!search||search.length>2?"⭐️":search;const twemojiOptions=useMemo(()=>({ext:".svg",folder:"svg",base:"https://twemoji.maxcdn.com/v/13.1.0/svg/",className:"framer-twemoji",callback:(icon,{base})=>{const newSrc=`${base}${icon}.svg`;setSrc(newSrc);}}),[setSrc]);useEffect(()=>{twemoji.parse(emoji,twemojiOptions);},[emoji]);return(/*#__PURE__*/ _jsx("div",{style:containerStyle,children:/*#__PURE__*/ _jsx("img",{src:src,style:containerStyle})}));}Twemoji.defaultProps={width:100,height:100,search:"⭐️"};addPropertyControls(Twemoji,{isSelection:{type:ControlType.Boolean,title:"Select",enabledTitle:"Preset",disabledTitle:"Search"},selection:{type:ControlType.Enum,title:" ",options:["🔥","💖","😆","👍","👎"],defaultValue:"🔥",displaySegmentedControl:true,hidden:({isSelection})=>!isSelection},search:{type:ControlType.String,title:" ",placeholder:"Paste Emoji…",hidden:({isSelection})=>isSelection}});const containerStyle={height:"100%",width:"100%",objectFit:"contain",textAlign:"center",overflow:"hidden",backgroundColor:"transparent"};
export const __FramerMetadata__ = {"exports":{"Twemoji":{"type":"reactComponent","name":"Twemoji","slots":[],"annotations":{"framerSupportedLayoutWidth":"fixed","framerIntrinsicHeight":"100","framerIntrinsicWidth":"100","framerSupportedLayoutHeight":"fixed","framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Twemoji.map