import { Fragment, useState } from "react"
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi"
import { InputSearch } from "../styled-components/Inputs"

const InputSearchWrapper = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    position: absolute;
    left: 0;
    rigth: 0;
    top: 80px;
    background: #000000;
    box-shadow: 0 0px 10px 0px #000000;
`

export function MovieSearch() {
    const [ isOpenInput, serIsOpenInput ] = useState(false)

    return (
        <Fragment>
            <FiSearch style={{'fontSize': '24px'}} onClick={() => serIsOpenInput(!isOpenInput)} />
            { isOpenInput && <InputSearchWrapper>
                    <InputSearch type="text" placeholder="Buscar pelicula" /> 
                </InputSearchWrapper>
            }
            
        </Fragment>
    )
}