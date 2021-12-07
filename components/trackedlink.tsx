import Link from 'next/link'
import * as gtag from '../lib/gtag'

function TrackedLink ( { href, label, children, ...props} : any ) {
	function handleClick (e : any) {
	  let url : string
	  let eventObj : any

	  eventObj = {
	    action: 'clickthrough',
	    category: 'external',
	    label,
	    value : href
	  }

	  gtag.event(eventObj)
	  console.log(eventObj)
	}

	return (
		<Link 
			href={href}
		><a {...props}
			onClick={handleClick} 
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a></Link>
	)
}

export default TrackedLink