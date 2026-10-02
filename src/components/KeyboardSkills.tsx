import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Environment, ContactShadows, PresentationControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  SiHtml5, SiJavascript, SiTypescript, SiPython,
  SiReact, SiLaravel, SiFlutter, SiNodedotjs, SiGo,
  SiPostgresql, SiGit, SiLinux, SiDocker,
  SiArduino, SiBlender
} from 'react-icons/si'
import { FaShieldAlt, FaRobot, FaEye, FaCss3, FaAws } from 'react-icons/fa'

const skillsData = [
  { id: '1', label: 'HTML',    color: '#E34F26', physicalKey: '1', icon: SiHtml5 },
  { id: '2', label: 'CSS',     color: '#1572B6', physicalKey: '2', icon: FaCss3 },
  { id: '3', label: 'JS',      color: '#F7DF1E', physicalKey: '3', icon: SiJavascript },
  { id: '4', label: 'TS',      color: '#3178C6', physicalKey: '4', icon: SiTypescript },
  { id: '5', label: 'Python',  color: '#3776AB', physicalKey: '5', icon: SiPython },
  { id: 'q', label: 'React',   color: '#61DAFB', physicalKey: 'q', icon: SiReact },
  { id: 'w', label: 'Laravel', color: '#FF2D20', physicalKey: 'w', icon: SiLaravel },
  { id: 'e', label: 'Flutter', color: '#02569B', physicalKey: 'e', icon: SiFlutter },
  { id: 'r', label: 'Node',    color: '#339933', physicalKey: 'r', icon: SiNodedotjs },
  { id: 't', label: 'Go',      color: '#00ADD8', physicalKey: 't', icon: SiGo },
  { id: 'a', label: 'SQL',     color: '#336791', physicalKey: 'a', icon: SiPostgresql },
  { id: 's', label: 'AWS',     color: '#FF9900', physicalKey: 's', icon: FaAws },
  { id: 'd', label: 'Git',     color: '#F05032', physicalKey: 'd', icon: SiGit },
  { id: 'f', label: 'Linux',   color: '#FCC624', physicalKey: 'f', icon: SiLinux },
  { id: 'g', label: 'Docker',  color: '#2496ED', physicalKey: 'g', icon: SiDocker },
  { id: 'z', label: 'SecOps',  color: '#444444', physicalKey: 'z', icon: FaShieldAlt },
  { id: 'x', label: 'IoT',     color: '#00979D', physicalKey: 'x', icon: SiArduino },
  { id: 'c', label: '3D',      color: '#FF6600', physicalKey: 'c', icon: SiBlender },
  { id: 'v', label: 'AI',      color: '#FFD43B', physicalKey: 'v', icon: FaRobot },
  { id: 'b', label: 'CompVis', color: '#412991', physicalKey: 'b', icon: FaEye },
]

function createIconTexture(IconComponent: React.ComponentType<any>, iconColor: string): Promise<THREE.CanvasTexture> {
  return new Promise((resolve) => {
    try {
      const svgMarkup = renderToStaticMarkup(
        React.createElement(IconComponent as any, { color: iconColor, size: 96 })
      )
      const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgMarkup)
      const canvas = document.createElement('canvas')
      canvas.width = 128
      canvas.height = 128
      const ctx = canvas.getContext('2d')!
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        ctx.clearRect(0, 0, 128, 128)
        ctx.drawImage(img, 16, 16, 96, 96)
        const tex = new THREE.CanvasTexture(canvas)
        tex.needsUpdate = true
        resolve(tex)
      }
      img.onerror = () => {
        ctx.fillStyle = iconColor
        ctx.font = 'bold 48px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('?', 64, 64)
        resolve(new THREE.CanvasTexture(canvas))
      }
      img.src = svgDataUrl
    } catch {
      resolve(new THREE.CanvasTexture(document.createElement('canvas')))
    }
  })
}

interface KeyProps {
  data: (typeof skillsData)[number]
  position: [number, number, number]
  activeKey: string | null
  catPressKey: string | null
}

function Key({ data, position, activeKey, catPressKey }: KeyProps) {
  const ref = useRef<THREE.Group>(null!)
  const [hovered, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [iconTexture, setIconTexture] = useState<THREE.CanvasTexture | null>(null)

  const isLight = ['#F7DF1E', '#FCC624', '#FFD43B', '#61DAFB'].includes(data.color)
  const textColor = isLight ? '#111111' : '#ffffff'

  useEffect(() => {
    createIconTexture(data.icon, textColor).then(setIconTexture)
  }, [data.icon, textColor])

  useEffect(() => {
    if (activeKey === data.physicalKey || catPressKey === data.physicalKey) {
      setPressed(true)
      const t = setTimeout(() => setPressed(false), 150)
      return () => clearTimeout(t)
    }
  }, [activeKey, catPressKey, data.physicalKey])

  useFrame((_, delta) => {
    const targetY = pressed ? position[1] - 0.2 : position[1]
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, delta * 20)
  })

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
        <meshStandardMaterial color={hovered ? '#ffffff' : data.color} roughness={0.2} metalness={0.8} />
      </RoundedBox>
      {iconTexture && (
        <mesh position={[0, 0.311, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.68, 0.68]} />
          <meshBasicMaterial map={iconTexture} transparent alphaTest={0.05} color={hovered ? '#000000' : '#ffffff'} />
        </mesh>
      )}
      <Text
        position={[0.35, 0.311, 0.36]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.1}
        color={textColor}
        fillOpacity={0.35}
        anchorX="center"
        anchorY="middle"
      >
        {data.physicalKey.toUpperCase()}
      </Text>
    </group>
  )
}

function CatModel({ isTyping }: { isTyping: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const tailRef = useRef<THREE.Mesh>(null!)
  const pawsRef = useRef<THREE.Group>(null!)
  
  useFrame((state, delta) => {
    if (!group.current) return
    const idleY = 0.2 + Math.sin(state.clock.elapsedTime * 3) * 0.02
    const targetY = isTyping ? 0.3 : idleY
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, delta * 15)
    
    // Rotate slightly when typing
    const targetRotX = isTyping ? 0.15 : 0
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, delta * 15)

    // Wag tail
    if (tailRef.current) {
        tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 4) * 0.2
    }
    
    // Move paws up when typing
    if (pawsRef.current) {
        const pawTargetY = isTyping ? 0.15 : 0
        pawsRef.current.position.y = THREE.MathUtils.lerp(pawsRef.current.position.y, pawTargetY, delta * 20)
    }
  })

  return (
    <group ref={group} scale={0.8} position={[0, 0, -0.3]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.25, 0.25]} castShadow>
        <boxGeometry args={[0.35, 0.3, 0.35]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      {/* Ears */}
      <mesh position={[-0.12, 0.45, 0.3]} rotation={[0, 0, 0.2]} castShadow>
        <coneGeometry args={[0.08, 0.2, 4]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      <mesh position={[0.12, 0.45, 0.3]} rotation={[0, 0, -0.2]} castShadow>
        <coneGeometry args={[0.08, 0.2, 4]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.08, 0.28, 0.43]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#B7FF00" />
      </mesh>
      <mesh position={[0.08, 0.28, 0.43]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#B7FF00" />
      </mesh>
      {/* Eye pupils */}
      <mesh position={[-0.08, 0.28, 0.46]} castShadow>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0.08, 0.28, 0.46]} castShadow>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* Nose */}
      <mesh position={[0, 0.22, 0.44]} castShadow>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#FF7777" />
      </mesh>
      {/* Tail */}
      <mesh ref={tailRef} position={[0, 0.15, -0.25]} rotation={[-0.5, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.04, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      
      {/* Front Paws */}
      <group ref={pawsRef} position={[0, -0.15, 0.25]}>
          <mesh position={[-0.1, 0, 0.1]} castShadow>
              <boxGeometry args={[0.08, 0.1, 0.15]} />
              <meshStandardMaterial color="#ffffff" roughness={0.8} />
          </mesh>
          <mesh position={[0.1, 0, 0.1]} castShadow>
              <boxGeometry args={[0.08, 0.1, 0.15]} />
              <meshStandardMaterial color="#ffffff" roughness={0.8} />
          </mesh>
      </group>
    </group>
  )
}

function TypingCat3D({ activeIdx, isTyping }: { activeIdx: number, isTyping: boolean }) {
  const row = Math.floor(activeIdx / 5)
  const col = activeIdx % 5
  const x = (col - 2) * 1.15
  const z = (row - 1.5) * 1.15

  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, delta * 10)
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, z, delta * 10)
    }
  })

  return (
    <group ref={groupRef} position={[x, 0.6, z]}>
      <CatModel isTyping={isTyping} />
      <Html transform center position={[0, 0.8, 0]} pointerEvents="none">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isTyping && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                fontWeight: 700,
                color: '#B7FF00',
                background: 'rgba(0,0,0,0.8)',
                padding: '4px 8px',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              {skillsData[activeIdx]?.label}
            </motion.span>
          )}
        </div>
      </Html>
    </group>
  )
}

function KeyboardLayout({ activeKey, catPressKey, activeCatIdx, isCatTyping }: { activeKey: string | null; catPressKey: string | null; activeCatIdx: number; isCatTyping: boolean }) {
  return (
    <group>
      <RoundedBox args={[6.2, 0.4, 5.2]} radius={0.2} smoothness={4} position={[0, -0.4, 0]} receiveShadow>
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </RoundedBox>
      {skillsData.map((skill, index) => {
        const row = Math.floor(index / 5)
        const col = index % 5
        return (
          <Key
            key={skill.id}
            data={skill}
            position={[(col - 2) * 1.15, 0, (row - 1.5) * 1.15]}
            activeKey={activeKey}
            catPressKey={catPressKey}
          />
        )
      })}
      <TypingCat3D activeIdx={activeCatIdx} isTyping={isCatTyping} />
    </group>
  )
}

export default function KeyboardSkills() {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [catPressKey, setCatPressKey] = useState<string | null>(null)

  // 3D Cat State
  const [activeCatIdx, setActiveCatIdx] = useState(10)
  const [isCatTyping, setIsCatTyping] = useState(false)
  const catIdxRef = useRef(10)

  useEffect(() => {
    const down = (e: KeyboardEvent) => setActiveKey(e.key.toLowerCase())
    const up = () => setActiveKey(null)
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      let newIdx: number
      do { newIdx = Math.floor(Math.random() * skillsData.length) } while (newIdx === catIdxRef.current)
      
      catIdxRef.current = newIdx
      setActiveCatIdx(newIdx)

      const t = setTimeout(() => {
        setIsCatTyping(true)
        const key = skillsData[newIdx].physicalKey
        setCatPressKey(key)
        setTimeout(() => {
          setIsCatTyping(false)
          setCatPressKey(null)
        }, 200)
      }, 380)

      return () => clearTimeout(t)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative cursor-pointer bg-near-black border border-white/10 rounded-xl overflow-hidden group">
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
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={1024} />
        <spotLight position={[-10, 10, -5]} intensity={0.5} color="#B7FF00" />
        <PresentationControls global rotation={[-Math.PI / 4, 0, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <KeyboardLayout activeKey={activeKey} catPressKey={catPressKey} activeCatIdx={activeCatIdx} isCatTyping={isCatTyping} />
        </PresentationControls>
        <ContactShadows position={[0, -0.6, 0]} opacity={0.4} scale={10} blur={2} far={2} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
