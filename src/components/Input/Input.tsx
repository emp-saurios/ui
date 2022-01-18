import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.scss'

const Input: FC<InputProps> = ({ name, title, variant = 'success', message, icon, ...rest }) => {
  const { icon_, input, label_, fill, message_ } = styles

  return (
    <div className={styles[variant]}>
      {title && (
        <label className={label_} htmlFor={name}>
          {title}
        </label>
      )}
      <div className={input}>
        <input className={fill} name={name} {...rest} />
        {icon && <div className={icon_}>{icon}</div>}
      </div>
      {message && <p className={message_}>{message}</p>}
    </div>
  )
}

type Variants = 'success' | 'error' | 'warning'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  variant?: Variants
  icon?: ReactNode
  message?: string
}

export default Input
