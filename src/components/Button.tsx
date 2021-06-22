import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss'

type ButaoProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButaoProps) {
  return (
    <button className="button" {...props} />
  );
}