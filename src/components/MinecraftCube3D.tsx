
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MinecraftCube3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Создаем сцену, камеру и рендерер
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);
    
    // Создаем текстуры для разных сторон куба
    const createTexture = (color: string): THREE.Texture => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = color;
        context.fillRect(0, 0, 256, 256);
        
        // Добавляем пиксельную сетку
        context.strokeStyle = 'rgba(0,0,0,0.2)';
        context.lineWidth = 1;
        
        // Рисуем пиксельную решетку
        for (let i = 0; i <= 256; i += 32) {
          context.beginPath();
          context.moveTo(0, i);
          context.lineTo(256, i);
          context.stroke();
          
          context.beginPath();
          context.moveTo(i, 0);
          context.lineTo(i, 256);
          context.stroke();
        }
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      
      return texture;
    };
    
    // Создаем материалы для всех сторон куба
    const materials = [
      new THREE.MeshBasicMaterial({ map: createTexture('#9b7653') }), // право
      new THREE.MeshBasicMaterial({ map: createTexture('#9b7653') }), // лево
      new THREE.MeshBasicMaterial({ map: createTexture('#567d46') }), // верх
      new THREE.MeshBasicMaterial({ map: createTexture('#9b7653') }), // низ
      new THREE.MeshBasicMaterial({ map: createTexture('#9b7653') }), // перед
      new THREE.MeshBasicMaterial({ map: createTexture('#9b7653') })  // зад
    ];
    
    // Создаем куб
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    camera.position.z = 3.5;
    
    // Вращение куба
    const animate = () => {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Очистка при размонтировании
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      materials.forEach(material => material.dispose());
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto my-4" />;
};

export default MinecraftCube3D;
