import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import { Colors } from '../data'
import ScrollTo from '../functions/ScrollTo'
import { Link as GatsbyLink } from 'gatsby'

const useStyles = makeStyles({
  link: {
    color: Colors.toryPrimary,
    display: 'inline-block',
    borderBottom: `2px solid ${Colors.toryPrimary}`,
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 600,
  },
})

/**
 * Creates an `<a>` tag which conforms to our design scheme.
 *
 * @export
 * @return {React.ReactNode}
 *
 * @param {object} props
 * @param {string} props.url - `href` attribute (e.g. can be an anchor, web URL, or `tel:` link)
 * @param {React.ReactNode} props.children - content of the anchor element
 * @param {string} [props.id] - anchor element ID
 * @param {string} [props.title] - `title` attribute shown on hover
 * @param {function} [props.onClick] - function run when link is clicked
 * @param {string} [props.className] - custom class(es) to apply to the link
 * @param {string} [props.color] - overrides the text and border colors (can itself be overridden with their specific props)
 * @param {string} [props.textColor] - overrides the link's text color (overrides `color`)
 * @param {string} [props.borderColor] - overrides the link's bottom border color (overrides `color`)
 * @param {"_blank"|"_self"} [props.target] - link target
 * @param {bool} [props.internal=false]
 */
export default function Link(props) {
  const { internal, url, title, onClick, className, id, children, textColor, borderColor, color, target } = props
  const classes = useStyles()

  const isAnchor = typeof url === 'string' && url.startsWith('#')

  const newProps = {
    className: clsx(classes.link, className),
    href: url,
    onClick: isAnchor
      ? e => {
          ScrollTo.ID(url.substr(1))
          e.preventDefault()

          typeof onClick === 'function' && onClick()
        }
      : onClick,
    style: {
      color: textColor || color,
      borderBottomColor: borderColor || color,
    },
    rel: 'noopener noreferrer',
    title,
    id,
    target,
  }

  if (internal) {
    return (
      <GatsbyLink to={newProps.href} {...newProps}>
        {children}
      </GatsbyLink>
    )
  }

  return <a {...newProps}>{children}</a>
}
