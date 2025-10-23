import React from 'react'
import clsx from 'clsx'

export function Card({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('rounded-2xl border bg-white', className)} {...props} />
}
export function CardHeader({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('p-5 border-b border-zinc-200', className)} {...props} />
}
export function CardTitle({ className='', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx('text-lg font-semibold', className)} {...props} />
}
export function CardContent({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('p-5', className)} {...props} />
}
