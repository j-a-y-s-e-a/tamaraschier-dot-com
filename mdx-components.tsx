import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-heading">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-semibold text-left mb-6">{children}</h2>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        className="w-full h-auto object-fit"
        {...(props as ImageProps)}
        alt={props.alt ?? "image of the design process"}
      />
    ),
    section: ({ children }) => (
      <section className="mb-16">{children}</section>
    ),
    ...components,
  }
}