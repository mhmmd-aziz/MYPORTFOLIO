import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Environment, ContactShadows, PresentationControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { 
  SiHtml5, SiJavascript, SiTypescript, SiPython, 
  SiReact, SiLaravel, SiFlutter, SiNodedotjs, SiGo, 
  SiPostgresql, SiGit, SiLinux, SiDocker,
  SiArduino, SiBlender
} from 'react-icons/si'
import { FaShieldAlt, FaRobot, FaEye, FaCss3, FaAws } from 'react-icons/fa'

const skillsData = [
  // Row 1
  { id: '1', label: 'HTML', color: '#E34F26', physicalKey: '1', icon: SiHtml5 },
  { id: '2', label: 'CSS', color: '#1572B6', physicalKey: '2', icon: FaCss3 },
  { id: '3', label: 'JS', color: '#F7DF1E', physicalKey: '3', icon: SiJavascript },
  { id: '4', label: 'TS', color: '#3178C6', physicalKey: '4', icon: SiTypescript },
  { id: '5', label: 'Py', color: '#3776AB', physicalKey: '5', icon: SiPython },
  // Row 2
  { id: 'q', label: 'React', color: '#61DAFB', physicalKey: 'q', icon: SiReact },
  { id: 'w', label: 'Larav', color: '#FF2D20', physicalKey: 'w', icon: SiLaravel },
  { id: 'e', label: 'Flutt', color: '#02569B', physicalKey: 'e', icon: SiFlutter },
  { id: 'r', label: 'Node', color: '#339933', physicalKey: 'r', icon: SiNodedotjs },
  { id: 't', label: 'Go', color: '#00ADD8', physicalKey: 't', icon: SiGo },
  // Row 3
  { id: 'a', label: 'SQL', color: '#336791', physicalKey: 'a', icon: SiPostgresql },
  { id: 's', label: 'AWS', color: '#FF9900', physicalKey: 's', icon: FaAws },
  { id: 'd', label: 'Git', color: '#F05032', physicalKey: 'd', icon: SiGit },
  { id: 'f', label: 'Linux', color: '#FCC624', physicalKey: 'f', icon: SiLinux },
  { id: 'g', label: 'Dockr', color: '#2496ED', physicalKey: 'g', icon: SiDocker },
  // Row 4
  { id: 'z', label: 'Sec', color: '#444444', physicalKey: 'z', icon: FaShieldAlt },
  { id: 'x', label: 'IoT', color: '#00979D', physicalKey: 'x', icon: SiArduino },
  { id: 'c', label: '3D', color: '#FF6600', physicalKey: 'c', icon: SiBlender },
  { id: 'v', label: 'AI', color: '#FFD43B', physicalKey: 'v', icon: FaRobot },
  { id: 'b', label: 'CV', color: '#412991', physicalKey: 'b', icon: FaEye },
]

function Key({ data, position, activeKey }: { data: any, position: [number, number, number], activeKey: string | null }) {
  const ref = useRef<THREE.Group>(null!)
  const [hovered, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  // React to physical keyboard
  useEffect(() => {
    if (activeKey === data.physicalKey) {
      setPressed(true)
      const t = setTimeout(() => setPressed(false), 150)
      return () => clearTimeout(t)
    }
  }, [activeKey, data.physicalKey])

  useFrame((_, delta) => {
    const targetY = pressed ? position[1] - 0.2 : position[1]
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, delta * 20)
  })

  // To make text color contrast nicely
  const isLight = ['#F7DF1E', '#FCC624', '#FFD43B', '#61DAFB'].includes(data.color)
  const textColor = isLight ? '#111111' : '#ffffff'

  return (
    <group position={position} ref={ref}>
      <RoundedBox
        args={[1, 0.6, 1]}
        radius={0.15}
        smoothness={4}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : data.color} 
          roughness={0.2} 
          metalness={0.8} 
        />
      </RoundedBox>
      
      <Html 
        transform 
        position={[0, 0.31, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.15}
        pointerEvents="none"
      >
        <div style={{ color: hovered ? '#000000' : textColor, fontSize: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <data.icon />
        </div>
      </Html>

      <Text
        position={[0.3, 0.31, 0.3]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.12}
        color={hovered ? '#000000' : textColor}
        fillOpacity={0.5}
        anchorX="center"
        anchorY="middle"
      >
        {data.physicalKey.toUpperCase()}
      </Text>
    </group>
  )
}

function KeyboardLayout({ activeKey }: { activeKey: string | null }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Keyboard Base */}
      <RoundedBox args={[6.2, 0.4, 5.2]} radius={0.2} smoothness={4} position={[0, -0.4, 0]} receiveShadow>
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </RoundedBox>

      {/* Keys */}
      {skillsData.map((skill, index) => {
        const row = Math.floor(index / 5)
        const col = index % 5
        const x = (col - 2) * 1.15
        const z = (row - 1.5) * 1.15
        return (
          <Key key={skill.id} data={skill} position={[x, 0, z]} activeKey={activeKey} />
        )
      })}
    </group>
  )
}

export default function KeyboardSkills() {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKey(e.key.toLowerCase())
    }
    const handleKeyUp = () => {
      setActiveKey(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative cursor-pointer bg-near-black border border-white/10 rounded-xl overflow-hidden group">
      
      {/* Title Overlay */}
      <div className="absolute top-8 left-0 w-full text-center z-10 pointer-events-none">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl text-white tracking-widest drop-shadow-2xl"
        >
          INTERACTIVE SKILLS
        </motion.h3>
        <p className="font-mono text-acid-lime text-xs tracking-widest mt-2">(HINT: PRESS A KEY OR CLICK)</p>
      </div>

      <Canvas camera={{ position: [0, 6, 4], fov: 45 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={1024}
        />
        <spotLight 
          position={[-10, 10, -5]} 
          intensity={0.5} 
          color="#B7FF00" 
        />
        
        <PresentationControls 
          global 
          rotation={[-Math.PI / 4, 0, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <KeyboardLayout activeKey={activeKey} />
        </PresentationControls>

        <ContactShadows position={[0, -0.6, 0]} opacity={0.4} scale={10} blur={2} far={2} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
