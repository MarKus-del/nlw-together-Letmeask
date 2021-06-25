import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss'

type ButaoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButaoProps) {
  return (
    <button 
      className={`button ${isOutlined ? 'outlined': ''}`}
      {...props}
    />
  );
}