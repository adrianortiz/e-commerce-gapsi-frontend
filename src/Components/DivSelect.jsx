import React,{forwardRef,useEff,useRef} from "react"

export default forwardRef(({ options=[], icon='user', placeholder='',
name,id,value,className,required,isFocused,handlerChange},ref) => {
    const input = ref ? ref :useRef();
    useEffect(()=> {
        if(isFocused) {
            input.current.focus();
        }
    },[]);
  return (
    <div className="input-group mb-3">
        <span className="input-group-text">
            <li className={'fa-solid '+icon}></li>
        </span>
        <select name={name}
        id={id} value={value} className={className} ref={input}
        required={required} onChange={(e) => handlerChange(e)}>
            { options.map( (op) => (
                <option value={op.id} key={op.id}>{op.name}</option>
            ))}
        </select>
    </div>
  )
});