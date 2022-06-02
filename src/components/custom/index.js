import { Input as AntdInput, InputNumber, Select as AntdSelect } from 'antd';
import styled, { css } from 'styled-components';
import { colors, fonts, styles } from '@themes';

const { TextArea: AntdTextArea } = AntdInput;
const { Option: AntdOption } = AntdSelect;

const flexConfig = (justify = 'center', align = 'center') => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
`;
const spaceConfig = ({ top = 0, right = 0, bottom = 0, left = 0 }) => css`
    margin: ${top} ${right} ${bottom} ${left} 
`;
export const Space = styled.div`
    ${props => spaceConfig({ top: props.top, right: props.right, bottom: props.bottom, left: props.left })}
`;
export const Container = styled.div`
    max-width: ${styles.maxWidth};
    margin: 0 auto;
    padding: 0 1em;
`;
export const FlexBetween = styled.div`
    ${flexConfig('space-between', 'center')};
    ${props => `
        min-height: ${props.height};
    `}
`;
export const FlexCenter = styled.div`
    ${flexConfig()};
`;
export const FlexContainer = styled.div`
    display: flex;
`;
export const Card = styled.div`
    padding: 2em;
    background-color: ${colors.white};
    border-radius: ${styles.borderRadius};
    box-shadow: ${styles.boxShadow};
`;

export const BorderedCard = styled(Card)`
    box-shadow: initial;
    border: 2px solid ${colors.greyLight};
`;
export const Field = styled.div`
    display: grid;
    margin: 20px 0;
    label {
        display: block;
        margin-bottom: .2em;
        font-weight: ${fonts.weight.medium};
        color: ${colors.grey};
    }
`;
export const Input = styled(AntdInput)`
    width: 100%;
    border: none;
    border-radius: ${styles.borderRadius};
    border: 2px solid ${colors.greyLight};
    outline: none;
    transition: all .2s;
    font-weight: ${fonts.weight.medium};
    color: ${colors.text};
    padding: 10px;
    &:focus {
        box-shadow: none;
        border: 2px solid ${colors.primary};
        border-right:  2px solid ${colors.primary} !important;
    }
    &:hover {
        box-shadow: none;
        border: 2px solid ${colors.primary};
        border-right:  2px solid ${colors.primary} !important;
    }
`;
export const Number = styled(InputNumber)`
    width: 100%;
    border: none;
    border-radius: ${styles.borderRadius};
    border: 2px solid ${colors.greyLight};
    outline: none;
    transition: all .2s;
    font-weight: ${fonts.weight.medium};
    color: ${colors.text};
    padding: 10px;
    &:focus {
        box-shadow: none;
        border: 2px solid ${colors.primary};
        border-right:  2px solid ${colors.primary} !important;
    }
    &:hover {
        box-shadow: none;
        border: 2px solid ${colors.primary};
        border-right:  2px solid ${colors.primary} !important;
    }
`;
export const TextArea = styled(AntdTextArea)`
    width: 100%;
    border: none;
    border-radius: ${styles.borderRadius};
    border: 2px solid ${colors.greyLight};
    outline: none;
    transition: all .2s;
    font-weight: ${fonts.weight.medium};
    color: ${colors.text};
    padding: 10px;
    &:focus {
        box-shadow: none;
        border: 2px solid ${colors.primary};
        border-right:  2px solid ${colors.primary} !important;
    }
    &:hover {
        box-shadow: none;
        border: 2px solid ${colors.primary};
        border-right:  2px solid ${colors.primary} !important;
    }
`;

export const Line = styled.div`
    height: 2px;
    background-color: ${colors.greyLight};
`;

export const Title = styled.strong`
    display: block;
    font-size: ${fonts.fontLarge};
    margin: 0;
    ${props => `
        color: ${props.color ? props.color : colors.text};
        font-weight: ${props.weight ? props.weight : 'bold'};
        font-size: ${props.size && `${fonts[props.size]}`};
        text-align: ${props.align && props.align}
    `}
`;
export const Subtitle = styled.h6`
    color: ${colors.grey};
`;

export const Button = styled.button`
    && {
        padding: .8em 1em;
        border: none;
        outline: none;
        ${props => `
            background-color:  ${colors[props.type]};
            color: ${colors[`${props.type}Light`]};
        `}
        font-weight: 700 !important;
        border-radius: ${styles.borderRadius};
        cursor: pointer;
        transition: all .2s;
        box-shadow: ${styles.boxShadow};
        &:hover {
            ${props => `
                background-color: ${colors[`${props.type}Dark`]}; 
            `}
        }
        &:disabled {
            background-color: ${colors.greyLight};
            color: ${colors.grey};
            cursor: not-allowed;
        }
    }
`;

export const Select = styled(AntdSelect)`
&& {
    border: none !important; 
    &.ant-select {
      box-shadow: none !important;
    }
    &.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select .ant-select-multiple .ant-select-allow-clear .ant-select-open .ant-select-show-search {
        box-shadow: none !important;
    }
    &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selection-overflow, .ant-select-single .ant-select-selector {
        height: 42px;
        display: flex;
        align-items: center;
        padding: 0 14px;
        border: 2px solid transparent;
        border-radius: ${styles.borderRadius} !important;
        &:focus {
        box-shadow: none;
        border: none !important; 
        }
        &:hover {
            box-shadow: none;
            border: none !important; 
        }
        .ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector, .iHNUmq.iHNUmq .ant-select .ant-select-multiple .ant-select-allow-clear .ant-select-open .ant-select-show-search {
            border-radius: ${styles.borderRadius};
        }
    }
`;
export const Option = styled(AntdOption)`
    &.ant-select-selection-item {
        padding: 10px;
        font-weight: ${fonts.weight.bold};
        background: white;
    }
`;
export const Bold = styled.strong`
    color: ${props => props.color ? props.color : colors.text};
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${props => props.size && `${fonts[props.size]}`};
`;

export const Label = styled.label`
    font-size: ${styles.smallSize};
    font-weight: ${styles.medium};
    color: ${colors.grey};
`;

export const Heading = styled.h3`
    font-size: ${styles.fontSmall};
    font-weight: ${styles.medium};
    ${props => props.marginBottom && 'margin-bottom:2rem;'};
`;

export const Overlay = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    backdrop-filter: blur(3px);
    display: flex;
    align-items:center;
    justify-content: center;
    z-index: 10;
`;