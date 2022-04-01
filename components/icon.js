import Image from 'next/image'

export default function Icon({ src, name, className }) {
  return (
    <div className='mr-8'>
      <div>
        <Image
          className={`object-cover border-gray-100 border-2 rounded-full ${className}`}
          src={src}
          width='80'
          height='80'
          alt={`picture of ${name}`}
        />
      </div>
    </div>
  )
}
