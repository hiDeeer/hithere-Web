import React,{useState} from "react";
import styled,{css} from "styled-components";
import {useOutsideClick,useBooleanState} from "@hideeer/util";
import {ArrowDown} from "@hideeer/icon";
import {HiDeerShape} from "../../Layout/Shap";

export interface SelectProps{
  name: string;
  items: string[];
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder: string;
}

export const Select=({
    name,
    items,
    value,
    onChange,
    placeholder,
}:SelectProps)=>{
    const [close, setClose] = useState<boolean>(true);
    const {
      value: isOpen,
      setFalse: isClose,
      toggle: handleToggleButtonClick,
    } = useBooleanState();
  
    const dropdownRef = useOutsideClick(isClose);

    const handleDropdownItemButtonClick = (data: string) => {
        onChange(name, data);
        setClose(true);
      };

return(
    <StyledSelectContainer
    close={close}
    onClick={handleToggleButtonClick}
    >
         <SelectText>
          {value === "" ? placeholder : value}
         </SelectText>
          <SelectIcon close={!isOpen}>
          <ArrowDown/>
          </SelectIcon>
          {isOpen && (
          <SelectItemWrap>
            {items?.map((item, idx) => (
              <SelectItem
                key={idx}
                onClick={() => handleDropdownItemButtonClick(item)}
              >
                {item}
              </SelectItem>
            ))}
          </SelectItemWrap>
        )}
    </StyledSelectContainer>
)
}


const StyledSelectContainer = styled.div<{
    close: boolean;
}>`
    min-width: 80px;
    width: min-content;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    justify-content: space-between;
    position: relative;
    column-gap: 15px;
    cursor: pointer;
    box-shadow: 0px 2px 4px 0px rgba(5, 16, 55, 0.06),
    0px 0px 0px 1px #cdd0dc inset;
    ${HiDeerShape.ExtraSmall}
    ${({ close }) => !close && css``}
`

const SelectText = styled.p`
  font-size: 14/16rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.LabelNeutral};
`;

const SelectIcon = styled.div<{ close: boolean }>`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease;

  ${({ close }) =>
    !close &&
    css`
      transform: rotate(180deg);
    `}
`;

const SelectItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 40px;
  left: 0px;

  overflow: hidden;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  box-sizing: border-box;
`;

const SelectItem = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  background-color: white;
  padding: 0px 10px;
  font-size: 14/16rem;

  :hover {
    filter: brightness(90%);
  }
`;