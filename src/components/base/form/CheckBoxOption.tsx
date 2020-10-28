import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';

interface CheckBoxOptionProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

const CheckBoxOption: FC<CheckBoxOptionProps> = ({
  id,
  label,
  isChecked,
  onChange,
  ...props
}) => {
  const onCheckBoxChange = (value: ChangeEvent<HTMLInputElement>) => {
    onChange(value.target.checked);
  };

  return (
    <div {...props}>
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        checked={isChecked}
        onChange={onCheckBoxChange}
      />
      <label className="option" htmlFor={id}>
        <span className="option-checkbox">
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1" />
          </svg>
        </span>
        <span className="option-label">{label}</span>
      </label>
    </div>
  );
};

export default styled(CheckBoxOption)`
  .option-checkbox {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #b9b8c3;
    transition: all 0.2s ease;

    svg {
      position: absolute;
      z-index: 1;
      top: 8px;
      left: 6px;
      fill: none;
      stroke: white;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: ${colors.primary};
        display: block;
        transform: scale(0);
        opacity: 1;
        border-radius: 50%;
        transition-delay: 0.2s;
      }
    }
  }

  .option {
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    span {
      display: inline-block;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);

      &:hover .option-checkbox {
        border-color: ${colors.primary};
      }
    }
  }

  .option-label {
    margin-left: 8px;

    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 0;
      height: 1px;
      width: 100%;
      background: #b9b8c3;
      transform-origin: 0 0;
      transform: scaleX(0);
    }
  }

  .checkbox {
    display: none;

    &:checked + .option {
      .option-checkbox {
        border-color: ${colors.primary};
        background: ${colors.primary};
        animation: check 0.6s ease;

        svg {
          stroke-dashoffset: 0;
        }

        &::before {
          transform: scale(2.2);
          opacity: 0;
          transition: all 0.6s ease;
        }
      }

      .option-label {
        color: #b9b8c3;
        transition: all 0.3s ease;

        &::after {
          transform: scaleX(1);
          transition: all 0.3s ease;
        }
      }
    }
  }

  @keyframes check {
    50% {
      transform: scale(1.2);
    }
  }
`;
