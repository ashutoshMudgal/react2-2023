import { useState } from "react"

export default (props) => {
    const [selected, setselected] = useState([])
    const [show, setshow] = useState(false)
    const [availableItems, setAvailableItems] = useState(props.items)

    const onItemClick = (e) => {
        setselected([...selected, e.target.textContent])
    }

    const onFocusFunc = () => {
        setshow(true)
    }

    const listItems = (availableItems) => {
        return show && availableItems.map(val => {
            const disabled = selected.includes(val);
            return <div disabled={disabled} className='Listitems' onClick={(e) => { onItemClick(e) }}>
                {val}
            </div>
        })
    }

    const onChangeFunc = (event) => {
        const items = props.items.filter(val => {
            return val.includes(event.target.value)
        })
        setAvailableItems(items)
    }

    const removeSelected = (event) =>{
        const index = selected.findIndex(val=>{
            return val==event.target.parentNode.textContent
        });
        const data = [...selected]
        data.splice(index, 1);
        setselected(data);
    }

    const items = selected.map(val => {
        return <div className='Childdiv'>{val}
            <button className="close"
                onFocus={removeSelected}
            ></button>
        </div>
    })




    //render
    return <div>
        <div id='Parentdiv'>
            {items}
            <input className='Childinput'
                onFocus={onFocusFunc}
                onChange={onChangeFunc}
            >
            </input>
        </div>
        {listItems(availableItems)}
    </div>
}