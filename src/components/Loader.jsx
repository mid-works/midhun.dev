import {Html , useProgress} from '@react-three/drei'
import { progress } from 'framer-motion'

const Loader = () => {
  const {progress} = useProgress()

  return (
    <Html>
      <span></span>
      <p className='font-2l text-white font-medium mt-40'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader