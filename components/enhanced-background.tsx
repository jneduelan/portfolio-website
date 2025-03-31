"use client"

import { useEffect, useRef, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface Particle {
  x: number
  y: number
  size: number
  baseSize: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  hue: number
}

export default function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseActive, setIsMouseActive] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let hueRotation = 0

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const createParticles = () => {
      const particleCount = isMobile ? 70 : 150
      particles = []

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 1
        const hue = Math.floor(Math.random() * 40) + 200 // Blue to purple range

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          baseSize: size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `hsla(${hue}, 80%, 60%, 0.3)`,
          opacity: Math.random() * 0.5 + 0.1,
          hue: hue,
        })
      }
    }

    createParticles()

    // Update particles
    const updateParticles = () => {
      hueRotation += 0.1 // Slowly rotate hues for color shifting effect

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Mouse interaction
        if (isMouseActive) {
          const dx = p.x - mousePosition.x
          const dy = p.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200

          if (distance < maxDistance) {
            // Particles are repelled from mouse
            const force = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            const pushX = Math.cos(angle) * force * 0.5
            const pushY = Math.sin(angle) * force * 0.5

            p.speedX += pushX
            p.speedY += pushY

            // Increase size when affected by mouse
            p.size = p.baseSize + force * 3

            // Adjust color based on distance
            const newHue = (p.hue + hueRotation) % 360
            p.color = `hsla(${newHue}, 80%, 60%, ${p.opacity + force * 0.3})`
          } else {
            // Return to base size and original color when not affected
            p.size = p.baseSize
            const newHue = (p.hue + hueRotation * 0.1) % 360
            p.color = `hsla(${newHue}, 80%, 60%, ${p.opacity})`
          }
        } else {
          // Gentle color shifting when mouse is not active
          const newHue = (p.hue + hueRotation * 0.1) % 360
          p.color = `hsla(${newHue}, 80%, 60%, ${p.opacity})`
          p.size = p.baseSize
        }

        // Boundary check with bounce effect
        if (p.x < 0) {
          p.x = 0
          p.speedX *= -0.8
        } else if (p.x > canvas.width) {
          p.x = canvas.width
          p.speedX *= -0.8
        }

        if (p.y < 0) {
          p.y = 0
          p.speedY *= -0.8
        } else if (p.y > canvas.height) {
          p.y = canvas.height
          p.speedY *= -0.8
        }

        // Apply friction to slow particles gradually
        p.speedX *= 0.99
        p.speedY *= 0.99

        // Add slight random movement
        p.speedX += (Math.random() - 0.5) * 0.01
        p.speedY += (Math.random() - 0.5) * 0.01

        // Limit speed
        const maxSpeed = 1.5
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (speed > maxSpeed) {
          p.speedX = (p.speedX / speed) * maxSpeed
          p.speedY = (p.speedY / speed) * maxSpeed
        }
      }
    }

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (behind particles)
      ctx.lineWidth = 0.3

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 120

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / maxDistance) * 0.2

            // Create gradient for line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, p1.color.replace(/[^,]+(?=\))/, opacity.toString()))
            gradient.addColorStop(1, p2.color.replace(/[^,]+(?=\))/, opacity.toString()))

            ctx.strokeStyle = gradient
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Add glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = p.color

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Reset shadow for performance
        ctx.shadowBlur = 0
      }
    }

    // Animation loop
    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseActive(true)

      // Reset mouse active state after inactivity
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        setIsMouseActive(false)
      }, 2000)
    }

    let mouseTimeout: NodeJS.Timeout

    // Add click effect
    const handleClick = (e: MouseEvent) => {
      // Create explosion effect
      const explosionX = e.clientX
      const explosionY = e.clientY

      // Add 10 new particles at click position
      for (let i = 0; i < 10; i++) {
        const size = Math.random() * 6 + 2
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 3 + 1
        const hue = Math.floor(Math.random() * 40) + 200

        particles.push({
          x: explosionX,
          y: explosionY,
          size: size,
          baseSize: size,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          color: `hsla(${hue}, 80%, 70%, 0.6)`,
          opacity: 0.6,
          hue: hue,
        })
      }

      // Limit total particles for performance
      if (particles.length > (isMobile ? 100 : 200)) {
        particles = particles.slice(particles.length - (isMobile ? 100 : 200))
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    // Touch events for mobile
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        setMousePosition({ x: touch.clientX, y: touch.clientY })
        setIsMouseActive(true)

        // Create touch effect similar to click
        handleClick({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent)

        // Reset mouse active state after inactivity
        clearTimeout(mouseTimeout)
        mouseTimeout = setTimeout(() => {
          setIsMouseActive(false)
        }, 2000)
      }
    }

    window.addEventListener("touchmove", handleTouch)
    window.addEventListener("touchstart", handleTouch)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("touchmove", handleTouch)
      window.removeEventListener("touchstart", handleTouch)
      clearTimeout(mouseTimeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

