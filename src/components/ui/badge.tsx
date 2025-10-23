import React from 'react'
import clsx from 'clsx'

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'solid' | 'outline'
}
export function Badge({ className='', variant='solid', ...props }: Props) {
  const styles = variant === 'outline'
    ? 'border border-zinc-300 text-zinc-800'
    : 'bg-zinc-100 text-zinc-700 border border-zinc-300'
  return <span className={clsx('inline-flex items-center rounded-full px-2.5 py-1 text-xs', styles, className)} {...props} />
}
