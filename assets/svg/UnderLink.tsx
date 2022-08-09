interface UnderLinkProps {
  color: string
  className: any
}
const UnderLink = ({color, className}: UnderLinkProps) => {
  return (
    <div className={className && className}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 6">
        <path
          id="boat"
          d="M30,0H29L26,5H4L1,0H0L3.17,5.55A.88.88,0,0,0,3.94,6H26A1.08,1.08,0,0,0,27,5.44Z"
          transform="translate(0 0)"
          fill={color}
        />
        <rect id="line" y="2.21" width="30" height="0.79" fill={color} />
        <rect
          id="dimanStork"
          x="13.56"
          y="1.05"
          width="2.89"
          height="2.89"
          transform="translate(6.16 -9.88) rotate(45)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="0.4"
        />
        <rect
          id="diman"
          x="14.19"
          y="1.69"
          width="1.61"
          height="1.61"
          transform="translate(6.16 -9.87) rotate(45)"
          fill="#22d3ee"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="0.4"
        />
      </svg>
    </div>
  )
}

export default UnderLink
