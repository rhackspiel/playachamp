import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline'
  size?: 'md' | 'lg'
}

export function Button({ className, variant='solid', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const sizes = {
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base'
  }[size]
  const variants = {
    solid: 'bg-lime-400 hover:bg-lime-300 text-black',
    outline: 'border border-zinc-300 text-zinc-900 hover:bg-zinc-100'
  }[variant]
  return <button className={clsx(base, sizes, variants, className)} {...props} />
}
